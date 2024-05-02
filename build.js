import esbuild from 'esbuild';
import { glob } from 'glob';
import fs from 'fs';
import ts from 'typescript';

const components = glob.sync('packages/**/src/index.ts');
const indexPath = 'packages/index.ts';

const esbuildDefaults = {
  bundle: true,
  format: 'esm',
  sourcemap: true,
  target: 'es2017',
  minify: false,
  external: ['react', '@lingui/core'],
};

function generateTypeDefinitions(inputFilePath, packageName, outDir) {
  let listOfTsFiles = [];
  const options = {
    module: ts.ModuleKind.NodeNext,
    lib: ['DOM', 'ES2020'],
    target: ts.ScriptTarget.ES2020,
    sourceMap: true,
    strict: true,
    noImplicitReturns: true,
    noFallthroughCasesInSwitch: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    jsx: ts.JsxEmit.React,
    allowJs: true,
    declaration: true,
    emitDeclarationOnly: true,
    esModuleInterop: true,
    skipLibCheck: true,
    allowSyntheticDefaultImports: true,
    strictNullChecks: true,
    outDir: outDir,
  };
  const host = ts.createCompilerHost(options);
  host.writeFile = (fileName, contents) => listOfTsFiles.push({ fileName, contents });

  // Create a program using the parsed source file
  const program = ts.createProgram([inputFilePath], options, host);

  // Emit the generated type definitions in memory
  program.emit();

  // Write the generated type definitions to the output file
  listOfTsFiles.forEach((file) => {
    // Doing this hack since typescript sometimes doesn't output the correct path
    let packageTypePath = file.fileName.replace(outDir, '').replace('src/', '').replace(`${packageName}/`, '');
    const updatedFilename = outDir + packageTypePath;

    fs.mkdirSync(updatedFilename.split('/').slice(0, -1).join('/'), { recursive: true });
    fs.writeFileSync(updatedFilename, file.contents);
  });
}

function buildComponents(outDir, extraBuildOptions = {}) {
  components.forEach(async (item) => {
    const regex = /\/(\w+)\//;
    const match = item.match(regex);

    if (item.includes('utils')) return;
    console.log(`react: building ${match[1]}.js`);

    try {
      await esbuild.build({
        entryPoints: [item],
        outfile: `${outDir}/packages/${match[1]}/index.js`,
        ...esbuildDefaults,
        ...extraBuildOptions,
      });
      generateTypeDefinitions(item, match[1], `${outDir}/packages/${match[1]}/`);
    } catch (err) {
      console.error(err);
    }
  });
}

async function buildIndex(outDir, extraBuildOptions = {}) {
  console.log('react: building index.js');
  try {
    // ESM build
    await esbuild.build({
      entryPoints: [indexPath],
      outfile: `${outDir}/index.js`,
      ...esbuildDefaults,
      ...extraBuildOptions,
    });
    // CJS build
    await esbuild.build({
      ...esbuildDefaults,
      entryPoints: [indexPath],
      outfile: `${outDir}/index.cjs`,
      format: 'cjs',
      ...extraBuildOptions,
    });
  } catch (err) {
    console.error(err);
  }
}

console.log('Building react');

buildComponents('dist/npm');
buildIndex('dist/npm');

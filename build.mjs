import esbuild from "esbuild";
import { glob } from "glob";

const components = glob.sync("packages/**/src/index.ts");
const indexPath = "packages/index.ts";

const esbuildDefaults = {
  bundle: true,
  format: "esm",
  sourcemap: true,
  target: "es2017",
  minify: false,
  external: ["react", "react-dom", "@lingui/core"],
};

function buildComponents(outDir, extraBuildOptions = {}) {
  components.forEach(async (item) => {
    const regex = /\/(\w+)\//;
    const match = item.match(regex);

    if (item.includes("utils")) return;
    //console.log(`react: building ${match[1]}.js`);

    console.log(`"./components/${match[1]}": "./dist/npm/packages/${match[1]}/index.js",`);

    try {
      await esbuild.build({
        entryPoints: [item],
        outfile: `${outDir}/packages/${match[1]}/index.js`,
        ...esbuildDefaults,
        ...extraBuildOptions,
      });
    } catch (err) {
      console.error(err);
    }
  });
}

async function buildIndex(outDir, extraBuildOptions = {}) {
  console.log("react: building index.js");
  try {
    await esbuild.build({
      entryPoints: [indexPath],
      outfile: `${outDir}/index.js`,
      ...esbuildDefaults,
      ...extraBuildOptions,
    });
  } catch (err) {
    console.error(err);
  }
}

console.log("Building react");

buildComponents("dist/npm");
buildIndex("dist/npm");

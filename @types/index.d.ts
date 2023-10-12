declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '@fabric-ds/css';
declare module '@fabric-ds/css/tailwind-css';

declare module '@warp-ds/icons/react' {
  export * from '@warp-ds/icons/dist/types/react'
}
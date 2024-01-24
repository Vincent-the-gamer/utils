import type { Options } from 'tsup'

export default <Options>{
  entryPoints: [
    "src/index.ts",
    "src/client/index.ts",
    "src/server/index.ts"
  ],
  clean: true,
  format: ['esm',"cjs"],
  dts: true
}
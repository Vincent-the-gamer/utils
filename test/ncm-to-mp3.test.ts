// run `pnpm run dev test/npm-to-mp3.test.ts`

import { fileURLToPath } from "node:url"
import { ncm2mp3 } from "../src/ncm-to-mp3"
import path, { dirname } from 'node:path'
const __dirname = dirname(fileURLToPath(import.meta.url))

// just look if mp3 files have been generated.
await ncm2mp3(
    path.resolve(__dirname, "./ncm"), 
    path.resolve(__dirname, "./mp3"), 
    path.resolve(__dirname, "./songcover")
)
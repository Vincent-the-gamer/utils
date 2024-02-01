// run `pnpm run dev test/ifElse.test.ts`

import { useIf, useIfElse } from "../src/ifElse"

function sayHaha(){
    console.log("haha")
}

// useIf([
//     [2 > 1, sayHaha], // handler will be called
//     // @ts-expect-error
//     [2 === 1, sayHaha], // handler will not be called
// ])

// output: ccc
useIfElse([
    [2 < 1, () => {console.log("aaa")}], // continue
    // @ts-expect-error
    [2 === 1, () => {console.log("bbb")}], // continue
    [2 > 1, () => {console.log("ccc")}], // true, call the func
    ["_", () => {console.log("not reached")}] // else
])


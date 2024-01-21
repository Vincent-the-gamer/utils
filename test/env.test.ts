import { test, expect } from "vitest"
import { currentPlatform } from "../src/env"

test("Get current platform.", () => {
    expect(currentPlatform()).toEqual("macOS")
})
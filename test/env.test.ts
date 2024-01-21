import { test, expect } from "vitest"
import { env, getCurrentPlatform } from "../src/env"

test("env", () => {
    expect(env).toBe("node")
})

test("Get current platform.", () => {
    expect(getCurrentPlatform()).toEqual("macOS")
})
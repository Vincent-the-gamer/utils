import { test, expect } from "vitest"
import { env, getCurrentPlatform } from "../src"

test("env", () => {
    expect(env).toBe("node")
})

test("Get current platform.", () => {
    expect(getCurrentPlatform()).toEqual("macOS")
})
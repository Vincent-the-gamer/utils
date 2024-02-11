import { expect, test } from "vitest"
import { kebabToSnake, snakeToKebab, toCamel, toPascal } from "../src/string"

test("To camelCase", () => {
    let str = "pal-world"
    let str2 = "pal_world"
    expect(toCamel(str)).toBe("palWorld")
    expect(toCamel(str2)).toBe("palWorld")
})

test("To CamelCase", () => {
    let str = "pal-world"
    let str2 = "pal_world"
    expect(toPascal(str)).toBe("PalWorld")
    expect(toPascal(str2)).toBe("PalWorld")
})

test("kebab <-> snake", () => {
    let str = "Git-Hub"
    let str2 = "bili_bili"
    expect(kebabToSnake(str)).toBe("git_hub")
    expect(snakeToKebab(str2)).toBe("bili-bili")
})
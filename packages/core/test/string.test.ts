import { expect, test } from "vitest"
import { capitalizeFirst, kebabToSnake, snakeToKebab, toCamel, toPascal, uncapitalizeFirst, bvToAv, avToBv } from "../src/string"

test("To camelCase", () => {
    let str = "pal-world"
    let str2 = "pal_world"
    expect(toCamel(str)).toBe("palWorld")
    expect(toCamel(str2)).toBe("palWorld")
})

test("To PascalCase", () => {
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

test("capitalize or uncapitalize",() => {
    expect(capitalizeFirst("palworld")).toBe("Palworld")
    expect(uncapitalizeFirst("Palworld")).toBe("palworld")
})

test("BV <-> AV", () => {
    expect(bvToAv("BV1Q541167Qg")).toBe("AV455017605")
    expect(avToBv("882584971")).toBe("BV1mK4y1C7Bz")
    expect(avToBv("av498566183")).toBe("BV1AK411W7wq")
    expect(avToBv("AV455017605")).toBe("BV1Q541167Qg")
})
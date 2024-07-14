/**
 * kebab-case or snake_case to camelCase.
 */
export function toCamel(text: string) {
    return text.replace(/[_-][a-z]/g, str => str.slice(1).toUpperCase())
}

/**
 * kebab-case or snake_case to PascalCase.
 */
export function toPascal(text: string) {
    return toCamel(capitalizeFirst(text))
}

/**
 * kebab-case to snake_case
 */
export function kebabToSnake(text: string) {
    return text.toLowerCase()
        .replace(/-/g, "_")
}

export function snakeToKebab(text: string) {
    return text.toLowerCase()
        .replace(/_/g, "-")
}

/**
 * capitalize first letter of a word.
 */
export function capitalizeFirst(text: string) {
    return text.charAt(0).toUpperCase() + text.substring(1)
}

/**
 * uncapitalize first letter of a word.
 */
export function uncapitalizeFirst(text: string) {
    return text.charAt(0).toLowerCase() + text.substring(1)
}

/**
 * Bilibili: BV <-> AV
 */
const table: string = 'fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF'

const tr: any = table.split('').reduce(
    (pre, v, i) => {
        // @ts-ignore
        pre[table[i]] = BigInt(i)
        return pre
    }, []
)

let s: any = [11, 10, 3, 8, 4, 6].map(i => BigInt(i))
let xor = BigInt(177451812)
let add = BigInt(8728348608)
const NUM_58 = BigInt(58)

export function bvToAv(bvNum: string) {
    let r = BigInt(0);
    for (let i = 0; i < 6; i++) {
        r += tr[bvNum[s[i]]] * NUM_58 ** BigInt(i);
    }
    let res = (r - add) ^ xor
    return "AV" + res.toString();
}


export function avToBv(avNum: string) {
    let av
    if(avNum.includes("AV") || avNum.includes("av")) {
        av = BigInt(avNum.slice(2))
    } else {
        av = BigInt(avNum)
    }
    av = (av ^ xor) + add
    let r = 'BV1  4 1 7  '.split('')
    for (let i = 0; i < 6; i++) {
        // @ts-ignore
        r[s[i]] = table[av / NUM_58 ** BigInt(i) % NUM_58]
    }
    return r.join('')
}
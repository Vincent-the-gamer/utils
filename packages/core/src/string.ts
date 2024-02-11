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
export function kebabToSnake(text: string){
    return text.toLowerCase()
               .replace(/-/g, "_")             
}

export function snakeToKebab(text: string){
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
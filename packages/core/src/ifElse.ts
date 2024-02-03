type Handler = (...args: any) => any
type IfRule = [boolean, Handler]
type IfElseRule = [boolean | "_", Handler]

/**
 * Combine Multiple ifs
 * @param rules 
 * @returns an array, the results of rules are in the same of their original index.
 *          true statements get the return value of their inner function, while the falses gets null.
 */
export function useIf(rules: IfRule[]) {
    const results = []
    for (const [condition, handler] of rules) {
        if(condition){
            results.push(handler(condition))
        } else {
            results.push(null)
        }
    }
    return results
}

/**
 * Create a if-else chain
 * @param rules 
 * @returns result of true statement.
 */
export function useIfElse(rules: IfElseRule[]) {
    for (const [condition, handler] of rules) {
        const willCall: boolean = (typeof condition === "boolean" && condition) || condition === "_"
        if(willCall){
            return handler(condition)
        } else {
           continue
        }
    }
}
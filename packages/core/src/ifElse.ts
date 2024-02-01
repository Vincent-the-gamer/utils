type Handler = (...args: any) => any
type IfRule = [boolean, Handler]
type IfElseRule = [boolean | "_", Handler]

/**
 * Combine Multiple ifs
 * @param rules 
 */
export function useIf(rules: IfRule[]) {
    for (const [condition, handler] of rules) {
        if(condition){
            handler(condition)
        }
    }
}

/**
 * Create a if-else chain
 * @param rules 
 */
export function useIfElse(rules: IfElseRule[]) {
    for (const [condition, handler] of rules) {
        const willCall: boolean = (typeof condition === "boolean" && condition) || condition === "_"
        if(willCall){
            handler(condition)
            break
        } else {
           continue
        }
    }
}
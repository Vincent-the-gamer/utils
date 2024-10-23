/**
 * Python range()
 * @param start
 * @param end (not included)
 * @param step
 * @returns 
 */
export function range(start: number, end: number, step: number = 1): number[] {
    let current = start
    const list = []
    while (current < end) {
        list.push(current)
        current += step
    }

    return list
}

/**
 * Python all()
 * @param conditionList list of booleans
 * @returns 
 */
export function all(conditionList: boolean[]): boolean {
    for (let condition of conditionList) {
        if(!condition)
            return false
    }
    return true
}

/**
 * Python any()
 * @param conditionList list of booleans
 * @returns 
 */
export function any(conditionList: boolean[]) {
    for (let condition of conditionList) {
        if(condition)
            return true
    }
    return false
}

/**
 * Python divmod(), but not supported complex.
 * @param a 
 * @param b 
 * @returns 
 */
export function divmod(a: number, b: number): [number, number] {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    const quotient = Math.floor(a / b);
    const remainder = a % b;
    return [quotient, remainder];
}
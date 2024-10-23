/**
 * Python range()
 * @param start
 * @param end (not included)
 * @param step
 * @returns
 */
export function range(start: number, end?: number, step: number = 1): number[] {
  const result: number[] = []

  if (end === undefined) {
    end = start
    start = 0
  }

  if (step > 0 && start < end) {
    for (let i = start; i < end; i += step) {
      result.push(i)
    }
  }
  else if (step < 0 && start > end) {
    for (let i = start; i > end; i += step) {
      result.push(i)
    }
  }

  return result
}

/**
 * Python all()
 * @param conditionList list of booleans
 * @returns
 */
export function all(conditionList: boolean[]): boolean {
  for (const condition of conditionList) {
    if (!condition)
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
  for (const condition of conditionList) {
    if (condition)
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
    throw new Error('Division by zero')
  }
  const quotient = Math.floor(a / b)
  const remainder = a % b
  return [quotient, remainder]
}


export function isEven(n: number): boolean {
    return n % 2 === 0;
}

export const PI = 3.1415;

//placing '?' after parameter makes it optional parameter
export function formatName(first: string, last: string, middle?: string): string {
    let fullName = `${last}, ${first}`;
    if (middle !== undefined) {
        fullName += ` ${middle}.`;
    }
    return fullName
}
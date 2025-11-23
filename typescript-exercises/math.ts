// math.ts - Module de fonctions mathématiques

export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division par zéro impossible");
    }
    return a / b;
}

// Export par défaut
export default function power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
}
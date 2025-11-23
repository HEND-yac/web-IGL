// main.ts - Fichier principal qui importe et teste les fonctions mathématiques

import { add, subtract, multiply, divide } from './math.js';
import power from './math.js'; // Import par défaut

console.log('=== Tests des fonctions mathématiques ===');

// Tests des fonctions importées
console.log(`Addition: 10 + 5 = ${add(10, 5)}`);
console.log(`Soustraction: 10 - 5 = ${subtract(10, 5)}`);
console.log(`Multiplication: 10 * 5 = ${multiply(10, 5)}`);
console.log(`Division: 10 / 5 = ${divide(10, 5)}`);
console.log(`Puissance: 2^8 = ${power(2, 8)}`);

// Test de gestion d'erreur
try {
    console.log(`Division par zéro: ${divide(10, 0)}`);
} catch (error) {
    console.log(`Erreur capturée: ${error}`);
}
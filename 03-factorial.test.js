import { describe, it, expect } from 'vitest'
import { factorial }  from './03-factorial.js'

describe(
    'Factorial de un número',
    function () {

        it(
            'Given el número 0, when se calcula el factorial, then debe devolver 1',
            function () {
                // Given el número 0
                const numero = 0

                // When se calcula el factorial
                const resultado = factorial(numero)

                // Then debe devolver 1
                expect(resultado).toBe(1)
            }
        )
        

        it(
            'Given el número 1, when se calcula el factorial, then debe devolver 1',
            function () {
                // Given el número 1
                const numero = 1

                // When se calcula el factorial
                const resultado = factorial(numero)

                // Then debe devolver 1
                expect(resultado).toBe(1)
            }
        )

        it(
            'Given el número 5, when se calcula el factorial, then debe devolver 120',
            function () {
                // Given uno (5)
                const numero = 5

                // When se calcula su factorial
                const resultado = factorial(numero)

                // Then el resultado debe ser 120
                expect(resultado).toBe(120)
            }
        )
        it(
            'Given el número 7, when se calcula el factorial, then debe devolver 5040
            function () {
                // Given uno (7)
                const numero = 7

                // When se calcula su factorial
                const resultado = factorial(numero)

                // Then el resultado debe ser 5040
                expect(resultado).toBe(5040)
            }
        )
    }
)
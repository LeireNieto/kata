import { describe, it, expect } from 'vitest'
import { mayor } from './04-array.js'

// Un escenario
describe(
    function () {
        it('Given un array con números positivos ([1, 3, 2]), when se busca el máximo, then debe devolver 3'),
        function () {
            // Given un array con números positivos ([1, 3, 2])
            const array = [1, 3, 2]

            // When se busca el máximo
            const resultado = mayor(array)

            // Then debe devolver 3
            expect(resultado).toBe(3)
        }
    it('Given un array con números negativos ([-1, -3, -2]), when se busca el máximo, then debe devolver -1'),
        function () {
            // Given un array con números negativos ([-1, -3, -2])
            const array = [-1, -3, -2]

            // When se busca el máximo
            const resultado = mayor(array)

            // Then debe devolver -1
            expect(resultado).toBe(-1)
        }
    it('Given un array vacío ([]), when se busca el máximo, then debe devolver undefined'),
        function () {
            // Given un array vacío ([])
            const array = []

            // When se busca el máximo
            const resultado = mayor(array)

            // Then debe devolver undefined
            expect(resultado).toBe(undefined)
        }
    it('Given un array con un solo elemento ([5]), when se busca el máximo, then debe devolver 5'),
        function () {
            // Given un array con un solo elemento ([5])
            const array = [5]

            // When se busca el máximo
            const resultado = mayor(array)

            // Then debe devolver 5
            expect(resultado).toBe(5)
        }

    } 
)       







  

import { describe, it, expect } from 'vitest'
import { par } from './02-par.js'

describe(
    'Par o impar',
    function () {      
          
         it(
             'Given un número par positivo (4), when se verifica, then debe devolver true',
             function () {
                 // Given un número par positivo (4)
                 const numero = 4

                // When se evalúa
                 const resultado = par(numero)

                 // Then debe ser verdadero
                 expect(resultado).toBe(true)
                }
            )

            
        it(
            'Given un número impar positivo (7), when se verifica, then debe devolver false',
            function () {
                // Given un número impar positivo (7)
                const numero = 7

                // When se evalúa
                const resultado = par(numero)

                // Then debe ser falso
                expect(resultado).toBe(false)
            }
        )
    
        it(
            'Given un número par negativo (-6), when se verifica, then debe devolver true',
            function () {
                // Given un número par negativo (-6)
                const numero = -6

                // When se evalúa
                const resultado = par(numero)

                // Then debe ser verdadero
                expect(resultado).toBe(true)
            }
        )
        it(
            'Given cero (0), when se verifica, then debe devolver true',
            function () {
                // Given cero (0)
                const numero = 0

                // When se evalúa
                const resultado = par(numero)

                // Then debe ser verdadero
                expect(resultado).toBe(true)
            }

        )
    }
)    
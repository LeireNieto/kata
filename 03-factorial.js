function factorial(n) {   //Esta parte es una condición especial: si n es 0 o 1, devuelve 1 directamente. Esto es porque tanto 0! como 1! valen 1.
    if (n === 0 || n === 1) {
      return 1;
    }
  
    // Aquí empieza el cálculo real del factorial.
    let resultado = 1;   // Resultado empieza siendo 1.
    for (let i = 2; i <= n; i++) {   // Se usa un bucle for que va desde 2 hasta n.
      resultado *= i;  // En cada vuelta del bucle, multiplica resultado por i.
    }
  
    return resultado;
  }
  
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040
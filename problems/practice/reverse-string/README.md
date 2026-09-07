# Reverse String (Recorrido Inverso)

## Fuente
Practice (Fundamentos de recorrido y manipulación de cadenas en múltiples lenguajes)

## Dificultad
Easy

## Problema
Dada una cadena de texto, invertir el orden de sus caracteres construyendo manualmente el resultado carácter a carácter desde el final hacia el principio, sin recurrir a métodos nativos directos de reversa rápida (como `split().reverse().join()`).

## Ejemplo
Input:
```text
s = "Hello, World!"
```
Output:
```text
"!dlroW ,olleH"
```

## Qué entendí
Aprender a iterar arreglos y cadenas de forma decreciente, acumulando los elementos en una nueva estructura para comprender cómo se construyen las secuencias en memoria en diferentes lenguajes.

## Mi razonamiento inicial
Iniciar un índice `i` en la última posición válida (`longitud - 1`) y decrementar paso a paso hasta llegar a `0`, agregando cada carácter a un array o slice y finalmente uniéndolo en una nueva cadena.

## Qué necesito recordar
- El índice de la posición actual en el ciclo inverso.

## Estructura o patrón elegido
**Recorrido inverso con Array / Slice**.

## ¿Por qué?
Porque permite practicar el control preciso de límites de iteración y entender las diferencias de representación de strings y memoria entre distintos lenguajes.

## Pseudocódigo
```text
crear lista resultado vacía

desde i = longitud - 1 hasta 0 bajando de 1 en 1:
    agregar s[i] a resultado

devolver unir(resultado)
```

## Errores que cometí
- En Python: recordar que el paso en `range` decreciente requiere `(inicio, fin_exclusivo, paso)` -> `range(len(s) - 1, -1, -1)`.
- En Go: convertir el string a slice de runas (`[]rune(s)`) para manipular caracteres correctamente.

## Solución
- [solution.ts](solution.ts) (JavaScript / TypeScript)
- [solution.py](solution.py) (Python)
- [solution.go](solution.go) (Go)
- [solution.php](solution.php) (PHP)
- [solution.rb](solution.rb) (Ruby)

## Complejidad
### Tiempo
$O(n)$ — Recorrido de los $n$ caracteres de la cadena.

### Espacio
$O(n)$ — Espacio en memoria para almacenar los caracteres de la nueva cadena resultante.

## Qué aprendí
Comprobar en la práctica que **el algoritmo es independiente del lenguaje**: la misma lógica de recorrido inverso se implementa con idéntico razonamiento en Go, JavaScript, Python, PHP y Ruby.

## Reconocimiento futuro
Manipulación directa de secuencias, parsing de derecha a izquierda y fundamentos de control de bucles.

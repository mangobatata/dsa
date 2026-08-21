# Hash Map

Esta lección existe para estudiar el concepto antes de usarlo en ejercicios como Two Sum.

No hace falta memorizar una definición perfecta al principio. Lo importante es entender qué problema resuelve, cómo se usa y qué señales dentro de un problema pueden hacerte pensar en esta estructura.

## 1. ¿Qué es un Hash Map?

Un Hash Map es una estructura de datos que permite guardar información asociando una clave con un valor.

La forma general es:

```text
key -> value
```

Ejemplos:

```text
nombre -> teléfono
usuario -> email
producto -> precio
número -> índice
```

La idea principal es que no buscás la información recorriendo todo desde el principio. Buscás usando una clave.

Por eso un Hash Map puede funcionar como una especie de memoria durante un algoritmo.

Por ejemplo, si mientras recorrés un array querés recordar que ya viste cierto número, podés guardar:

```text
número -> información asociada
```

En Two Sum, esta idea se vuelve importante porque el problema obliga a pensar:

```text
¿Ya vi antes el número que necesito?
```

Pero todavía no necesitamos resolver Two Sum acá. Primero necesitamos entender la herramienta.

## 2. Key y Value

Un Hash Map guarda pares:

```text
key -> value
```

La key es la clave que usás para encontrar la información.

El value es la información guardada para esa clave.

Ejemplos:

```text
"Juan" -> "0981..."
"edad" -> 30
7 -> 2
```

En:

```text
"Juan" -> "0981..."
```

La key es:

```text
"Juan"
```

El value es:

```text
"0981..."
```

Si después preguntás por la key `"Juan"`, el Hash Map puede devolverte el teléfono asociado.

### ¿Qué pasa si una key ya existe?

Normalmente, si guardás un nuevo value usando una key que ya existía, el valor anterior se reemplaza.

Ejemplo:

```text
"edad" -> 30
"edad" -> 31
```

Después de actualizar, la key `"edad"` apunta a:

```text
31
```

Esto es importante porque en muchos problemas una misma key puede aparecer más de una vez.

## 3. Diferencia entre Array y Hash Map

Un Array guarda valores por posición.

```text
Array

índice -> valor

0 -> 5
1 -> 10
2 -> 20
```

Si querés acceder al elemento en la posición `1`, usás el índice:

```text
array[1] -> 10
```

Un Hash Map guarda valores por clave.

```text
Hash Map

clave -> valor

"nombre" -> "Ana"
"edad" -> 25
```

Si querés acceder a la edad, usás la clave:

```text
"edad" -> 25
```

### Acceso mediante índice

En un Array, el índice representa una posición.

Es útil cuando el orden importa o cuando querés recorrer los elementos secuencialmente.

### Acceso mediante clave

En un Hash Map, la clave representa una identidad.

Es útil cuando querés buscar información directamente por algo que conocés.

### Búsqueda

Si tenés un Array y querés saber si existe el valor `20`, normalmente tenés que recorrer:

```text
5
10
20
```

Eso puede costar:

```text
O(n)
```

Si tenés un Hash Map y querés saber si existe una key, podés preguntar por esa key directamente.

Eso suele costar:

```text
O(1) promedio
```

## 4. ¿Qué significa Hash?

La palabra hash se refiere a una transformación.

Conceptualmente, un Hash Map hace algo parecido a esto:

```text
key
 ↓
hash function
 ↓
posición interna
 ↓
value
```

La key no se guarda simplemente "en el aire". El Hash Map necesita decidir internamente dónde poner esa información para poder encontrarla rápido después.

Para eso usa una función hash.

## 5. Hash Function

Una hash function recibe una key y produce un resultado que ayuda a decidir dónde guardar o buscar esa key dentro del Hash Map.

Ejemplo conceptual:

```text
"Ana"
 ↓
hash function
 ↓
Bucket 2
```

No hace falta implementar una función hash profesional para usar Hash Maps en DSA.

Lo importante es entender que la estructura no está recorriendo todos los elementos cada vez. Usa la key para llegar rápido a una posición interna.

Una buena función hash intenta distribuir las keys de forma pareja, para evitar que muchas terminen en el mismo lugar.

## 6. Buckets

Podés imaginar que internamente el Hash Map tiene posiciones llamadas buckets.

```text
Bucket 0
Bucket 1
Bucket 2
Bucket 3
...
```

Cuando guardás una key, la función hash decide en qué bucket ubicarla.

Ejemplo conceptual:

```text
"Ana"  -> Bucket 2
"Juan" -> Bucket 0
"Luis" -> Bucket 3
```

Después, cuando preguntás por `"Ana"`, el Hash Map vuelve a aplicar la lógica de hash para llegar al bucket correspondiente.

## 7. Colisiones

Una colisión ocurre cuando dos keys terminan apuntando al mismo bucket.

```text
key A ─┐
       ├──> mismo bucket
key B ─┘
```

Esto se llama:

```text
Hash Collision
```

Las implementaciones reales tienen estrategias para manejar colisiones.

Dos ideas comunes son:

```text
chaining
open addressing
```

### Chaining

Chaining significa que dentro de un mismo bucket se puede guardar más de una entrada.

Conceptualmente:

```text
Bucket 2 -> ("Ana", 25) -> ("Luis", 31)
```

### Open addressing

Open addressing significa que, si una posición ya está ocupada, la estructura busca otra posición disponible siguiendo una regla.

No necesitás dominar estos algoritmos todavía para usar Hash Maps correctamente en ejercicios básicos.

Lo importante por ahora es saber que las colisiones existen y que por eso `O(1)` se habla normalmente como caso promedio.

## 8. Operaciones principales

### Insert

Guardar:

```text
key -> value
```

Ejemplo:

```text
"Ana" -> 25
```

### Get / Lookup

Buscar un value usando una key.

```text
"Ana" -> 25
```

### Contains / Has

Preguntar si una key existe.

```text
¿existe "Ana"?
```

### Delete

Eliminar una entrada.

```text
eliminar "Ana"
```

### Update

Actualizar el value asociado a una key.

```text
"Ana" -> 26
```

## 9. Complejidad temporal

Tabla promedio:

```text
Operación          Promedio

Insert             O(1)
Lookup             O(1)
Delete             O(1)
```

`O(1)` significa tiempo constante.

La idea es que la operación no crece proporcionalmente con la cantidad de elementos.

Si tenés 10 elementos, preguntar por una key debería ser rápido.

Si tenés 10.000 elementos, preguntar por una key también debería seguir siendo rápido en promedio.

### Array buscando valor

Si tenés:

```text
[5, 10, 20, 30]
```

y querés saber si existe `30`, podrías tener que revisar:

```text
5
10
20
30
```

Eso es:

```text
O(n)
```

### Hash Map buscando key

Si tenés:

```text
30 -> información
```

podés preguntar directamente:

```text
¿existe la key 30?
```

Eso es:

```text
O(1) promedio
```

### Peor caso

En teoría, un Hash Map puede degradarse a:

```text
O(n)
```

por ejemplo si hay demasiadas colisiones o una mala distribución interna.

Para la mayoría de ejercicios introductorios de DSA, trabajamos con el caso promedio:

```text
O(1)
```

pero es importante saber que no es magia ni una garantía absoluta en cualquier situación.

## 10. Complejidad espacial

Usar un Hash Map normalmente consume memoria adicional.

Esto introduce una idea fundamental:

```text
Time-Space Tradeoff
```

Es decir:

```text
intercambiar memoria por velocidad
```

Ejemplo:

```text
Antes:

Tiempo: O(n²)
Espacio adicional: O(1)

Después usando memoria:

Tiempo: O(n)
Espacio: O(n)
```

La mejora de tiempo no sale gratis. Guardar información requiere espacio.

Pero muchas veces ese intercambio vale la pena.

## 11. Hash Map como memoria

En DSA, un Hash Map aparece muchas veces cuando necesitás responder rápido preguntas como:

```text
¿Ya vi esto?
```

```text
¿Dónde vi esto?
```

```text
¿Cuántas veces apareció?
```

```text
¿Existe este valor?
```

```text
¿Qué información tenía asociada a este elemento?
```

Estas preguntas son señales.

Si durante un algoritmo pensás:

```text
Necesito recordar algo para no volver a recorrer todo
```

entonces puede aparecer un Hash Map.

## 12. Patrones comunes con Hash Map

### Seen / elementos vistos

Pregunta:

```text
¿Ya vi este elemento?
```

Uso conceptual:

```text
elemento -> true
```

### Value -> Index

Pregunta:

```text
¿Dónde vi este valor?
```

Uso conceptual:

```text
valor -> índice
```

### Frequency Counter

Pregunta:

```text
¿Cuántas veces apareció este elemento?
```

Uso conceptual:

```text
elemento -> cantidad
```

### Lookup rápido

Pregunta:

```text
Tengo una clave. ¿Qué información está asociada?
```

Uso conceptual:

```text
clave -> información
```

### Complement lookup

Pregunta:

```text
Tengo X.

Necesito Y.

¿Ya vi Y?
```

Esta idea prepara el terreno para Two Sum, pero no reemplaza el razonamiento del ejercicio.

## 13. Implementación en TypeScript

En JavaScript y TypeScript, una forma clara de representar un Hash Map es:

```ts
const map = new Map()
```

Operaciones principales:

```ts
map.set(key, value)
map.get(key)
map.has(key)
map.delete(key)
```

Ejemplo:

```ts
const edades = new Map<string, number>()

edades.set("Ana", 25)
edades.set("Juan", 30)

console.log(edades.get("Ana"))
```

Línea por línea:

```ts
const edades = new Map<string, number>()
```

Crea un Map donde las keys son `string` y los values son `number`.

```ts
edades.set("Ana", 25)
```

Guarda:

```text
"Ana" -> 25
```

```ts
edades.set("Juan", 30)
```

Guarda:

```text
"Juan" -> 30
```

```ts
console.log(edades.get("Ana"))
```

Busca la key `"Ana"` y devuelve:

```text
25
```

### Map vs Object

En JavaScript también se puede usar un objeto:

```ts
const edades: Record<string, number> = {}
```

Pero para aprender DSA, `Map` suele expresar mejor la intención:

```text
estoy usando una estructura key -> value
```

Un `Object` puede funcionar en muchos casos, pero también tiene detalles propios del lenguaje.

Para empezar, cuando quieras pensar claramente en Hash Map en TypeScript, preferí:

```ts
Map
```

## 14. Implementación en Python

En Python, el equivalente conceptual más común es:

```python
dict
```

Ejemplo:

```python
edades = {}

edades["Ana"] = 25
edades["Juan"] = 30
```

Esto guarda:

```text
"Ana" -> 25
"Juan" -> 30
```

Para acceder:

```python
edades["Ana"]
```

Para preguntar si una key existe:

```python
"Ana" in edades
```

Para buscar sin romper si la key no existe:

```python
edades.get("Ana")
```

Relación conceptual:

```text
TypeScript Map
        ↕
Python dict
```

No significa que sus implementaciones internas sean idénticas. Significa que, para el razonamiento inicial de DSA, cumplen un rol parecido:

```text
key -> value
```

## 15. Ejercicios conceptuales

No mires soluciones todavía. La idea es practicar el concepto antes de usarlo en problemas más grandes.

### Ejercicio 1

Guardar nombres y edades.

Ejemplo:

```text
"Ana" -> 25
"Juan" -> 30
"Luis" -> 28
```

Pregunta:

```text
¿Qué usarías como key?
¿Qué usarías como value?
```

### Ejercicio 2

Preguntar si un usuario ya existe.

Ejemplo:

```text
usuarios registrados:

"ana"
"juan"
"luis"
```

Pregunta:

```text
¿Cómo representarías esto para poder preguntar rápido si "ana" ya existe?
```

### Ejercicio 3

Contar cuántas veces aparece cada número.

Input:

```text
[1, 2, 1, 3, 2, 1]
```

Resultado conceptual esperado:

```text
1 -> 3
2 -> 2
3 -> 1
```

Pregunta:

```text
¿Qué pasa la primera vez que ves un número?
¿Qué pasa cuando lo volvés a ver?
```

### Ejercicio 4

Guardar la posición donde apareció un valor.

Input:

```text
[10, 20, 30]
```

Resultado conceptual:

```text
10 -> 0
20 -> 1
30 -> 2
```

Pregunta:

```text
¿Qué usarías como key?
¿Qué usarías como value?
```

## 16. Preguntas de comprobación

Respondé estas preguntas sin mirar una solución.

1. ¿Qué problema resuelve un Hash Map?
2. ¿Qué diferencia existe entre una key y un value?
3. ¿Qué diferencia conceptual existe entre un Array y un Hash Map?
4. ¿Por qué buscar una key puede ser `O(1)` promedio?
5. ¿Qué significa que un Hash Map funciona como "memoria"?
6. ¿Qué significa `value -> index`?
7. ¿Qué es una colisión?
8. ¿Qué costo espacial puede tener utilizar un Hash Map?
9. ¿Qué significa Time-Space Tradeoff?
10. ¿Qué señales dentro de un problema podrían hacerte pensar en utilizar un Hash Map?

## 17. Conexión con Two Sum

Después de estudiar Hash Map, el ejercicio Two Sum debería sentirse menos misterioso.

No lo resuelvas memorizando:

```text
Two Sum -> Hash Map
```

Usá preguntas:

```text
¿Qué información necesitarías recordar mientras recorres el array?
```

```text
¿Necesitás volver a recorrer todo el array para saber si un número ya apareció?
```

```text
¿Qué podrías guardar como key?
```

```text
¿Qué información sería útil guardar como value?
```

```text
Si conocés un número actual, ¿podés calcular qué otro número necesitás?
```

Cuando esas preguntas tengan sentido, recién ahí conviene volver a:

* [Two Sum](two-sum/README.md)

# DSA & Algorithmic Problem Solving

Repositorio personal para el estudio sistemático y de largo plazo de **Data Structures & Algorithms**, resolución de problemas y pensamiento algorítmico independiente del lenguaje.

Este espacio está diseñado como una base de conocimiento viva para aprender a razonar: registrar el proceso mental, las hipótesis iniciales, los errores cometidos y los patrones descubiertos antes de llegar a la solución final.

---

## Metodología de Aprendizaje

El foco principal es **conservar el proceso de deducción**:

```text
Problema
   ↓
Ejemplo manual detallado
   ↓
Estado / Memoria requerida
   ↓
Estructura de datos o Patrón
   ↓
Pseudocódigo en lenguaje natural
   ↓
Edge cases (casos límite)
   ↓
Implementación en código
   ↓
Análisis de complejidad (Big O de Tiempo y Espacio separados)
```

No se trata de memorizar código o coleccionar soluciones finales perfectas; se trata de poder volver a cualquier ejercicio meses después y entender:
> *"Así estaba pensando cuando lo resolví, aquí me equivoqué, y esta fue la señal que me llevó al patrón correcto."*

---

## Estructura del Repositorio

```text
.
├── README.md                      # Entrada principal, progreso y mapa de problemas
├── docs/                          # Documentación conceptual independiente de lenguajes
│   ├── learning-roadmap.md        # Fases pedagógicas de estudio (Etapas 1 a 6)
│   ├── problem-solving-framework.md # Framework de 16 pasos para abordar problemas
│   ├── big-o.md                   # Guía práctica de complejidad temporal vs espacial
│   ├── data-structures/           # Modelos mentales y operaciones de estructuras
│   │   ├── hashmap.md             # Tablas hash, lookup O(1), memoria asociativa
│   │   └── stack.md               # Pilas, principio LIFO, resolución de pendientes
│   └── patterns/                  # Técnicas y heurísticas algorítmicas
│       ├── two-pointers.md        # Descarte seguro en rangos o arrays ordenados
│       └── frequency-counter.md   # Conteo y comparación de distribuciones
│
├── problems/                      # Problemas resueltos organizados por origen
│   ├── leetcode/
│   │   ├── 0001-two-sum/
│   │   ├── 0020-valid-parentheses/
│   │   ├── 0125-valid-palindrome/
│   │   ├── 0167-two-sum-ii/
│   │   ├── 0217-contains-duplicate/
│   │   ├── 0242-valid-anagram/
│   │   └── 0844-backspace-string-compare/
│   ├── hackerrank/
│   │   ├── sales-by-match/
│   │   └── balanced-brackets/
│   └── practice/
│       ├── has-pair-with-sum/
│       └── reverse-string/
│
├── cybersecurity/                 # Ruta complementaria: fundamentos web y seguridad
└── tools/                         # Utilidades accesorias de entorno
```

---

## Problemas Resueltos

| Problema | Plataforma | Patrón / Estructura | Dificultad | TS / JS | Python | Go | Otros |
| :--- | :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| [Two Sum](problems/leetcode/0001-two-sum/) | LeetCode (#1) | Hash Map (Complemento) | Easy | [TS](problems/leetcode/0001-two-sum/solution.ts) | [PY](problems/leetcode/0001-two-sum/solution.py) | [GO](problems/leetcode/0001-two-sum/solution.go) | [PHP](problems/leetcode/0001-two-sum/solution.php) |
| [Valid Parentheses](problems/leetcode/0020-valid-parentheses/) | LeetCode (#20) | Stack (LIFO) | Easy | [TS](problems/leetcode/0020-valid-parentheses/solution.ts) / [JS](problems/leetcode/0020-valid-parentheses/solution.js) | [PY](problems/leetcode/0020-valid-parentheses/solution.py) | [GO](problems/leetcode/0020-valid-parentheses/solution.go) | — |
| [Valid Palindrome](problems/leetcode/0125-valid-palindrome/) | LeetCode (#125) | Two Pointers (Convergentes) | Easy | [TS](problems/leetcode/0125-valid-palindrome/solution.ts) | — | — | — |
| [Two Sum II - Sorted](problems/leetcode/0167-two-sum-ii/) | LeetCode (#167) | Two Pointers (Descarte seguro) | Medium | [TS](problems/leetcode/0167-two-sum-ii/solution.ts) | [PY](problems/leetcode/0167-two-sum-ii/solution.py) | [GO](problems/leetcode/0167-two-sum-ii/solution.go) | — |
| [Contains Duplicate](problems/leetcode/0217-contains-duplicate/) | LeetCode (#217) | Hash Map / Seen | Easy | [TS](problems/leetcode/0217-contains-duplicate/solution.ts) | — | — | — |
| [Valid Anagram](problems/leetcode/0242-valid-anagram/) | LeetCode (#242) | Frequency Counter | Easy | [TS](problems/leetcode/0242-valid-anagram/solution.ts) | — | — | — |
| [Backspace String Compare](problems/leetcode/0844-backspace-string-compare/) | LeetCode (#844) | Stack (LIFO) | Easy | [TS](problems/leetcode/0844-backspace-string-compare/solution.ts) | — | — | — |
| [Sales by Match](problems/hackerrank/sales-by-match/) | HackerRank | Frequency Counter | Easy | [TS](problems/hackerrank/sales-by-match/solution.ts) | [PY](problems/hackerrank/sales-by-match/solution.py) | — | — |
| [Balanced Brackets](problems/hackerrank/balanced-brackets/) | HackerRank | Stack (LIFO) | Medium | [TS](problems/hackerrank/balanced-brackets/solution.ts) | [PY](problems/hackerrank/balanced-brackets/solution.py) | [GO](problems/hackerrank/balanced-brackets/solution.go) | — |
| [Has Pair With Sum](problems/practice/has-pair-with-sum/) | Practice | Two Pointers | Easy | [TS](problems/practice/has-pair-with-sum/solution.ts) | — | [GO](problems/practice/has-pair-with-sum/solution.go) | — |
| [Reverse String](problems/practice/reverse-string/) | Practice | Recorrido Inverso | Easy | [TS/JS](problems/practice/reverse-string/solution.ts) | [PY](problems/practice/reverse-string/solution.py) | [GO](problems/practice/reverse-string/solution.go) | [PHP](problems/practice/reverse-string/solution.php) / [RB](problems/practice/reverse-string/solution.rb) |

---

## Learning Progress

### Data Structures
- **Hash Map / Object:** `Comfortable` — Dominio de inserción, lectura $O(1)$ promedio, tablas de frecuencias y técnica de complemento.
- **Stack:** `Comfortable` — Comprensión sólida del modelo mental LIFO (analogía de prepizzas), acumulación de aperturas y resolución de pendientes.
- **Arrays & Strings:** `Practiced` — Manipulación por índices, recorrido inverso y transformaciones básicas.
- **Linked Lists & Trees:** `Learning` — Contemplados en las etapas siguientes del roadmap.

### Patterns
- **Two Pointers:** `Practiced` — Comprensión de la técnica como descarte seguro en arrays ordenados y convergencia condicional en palíndromos.
- **Frequency Counter:** `Comfortable` — Conteo con mapas y objetos, comparación de anagramas y cálculo de lotes pares con división entera.
- **Sliding Window:** `Learning` — Próximo patrón a abordar.

### Problem Solving
- **Separación de razonamiento y código:** `Comfortable` — Redacción de pseudocódigo en español antes de escribir implementaciones formales.
- **Detección de Edge Cases:** `Practiced` — Consideración de inputs vacíos, caracteres sin correspondencia inicial y comprobación del estado final de la memoria.

### Complexity Analysis
- **Separación Tiempo vs Espacio:** `Comfortable` — Análisis independiente de Time Complexity y Space Complexity.
- **Identificación de Time-Space Tradeoffs:** `Practiced` — Comprensión de cuándo conviene gastar memoria auxiliar para reducir tiempo cuadrático a lineal.

---

## Documentación Conceptual

- [Problem-Solving Framework](docs/problem-solving-framework.md) — Los 16 pasos del proceso de resolución y trampas comunes.
- [Learning Roadmap](docs/learning-roadmap.md) — Las 6 etapas pedagógicas del aprendizaje.
- [Big O Guide](docs/big-o.md) — Complejidad temporal y espacial con ejemplos reales del repositorio.
- [Estructura: Hash Map](docs/data-structures/hashmap.md) — Guía completa sobre tablas asociativas y operaciones.
- [Estructura: Stack](docs/data-structures/stack.md) — Modelo mental de pilas, operaciones y señales de reconocimiento.
- [Patrón: Two Pointers](docs/patterns/two-pointers.md) — Lógica de descarte seguro, `for` vs `while` y variantes.
- [Patrón: Frequency Counter](docs/patterns/frequency-counter.md) — Conteo y comparación de distribuciones.

---

## Rutas Complementarias

- [CyberSecurity & Web Fundamentals](cybersecurity/README.md) — Notas sobre arquitectura web, protocolo HTTP, Cookies, Sessions y JWT.

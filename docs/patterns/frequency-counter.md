# Frequency Counter (Contador de Frecuencias)

## 1. Modelo Mental

El patrón **Frequency Counter** utiliza un Hash Map u objeto/diccionario para acumular las apariciones de cada valor:

```text
elemento -> cantidad de apariciones
```

Permite comparar dos colecciones o verificar redundancias evitando comparaciones cruzadas $O(n^2)$.

---

## 2. ¿Cuándo aparece?

- Determinar si dos cadenas son **anagramas** (mismas letras con idéntica frecuencia).
- Detectar si existen **duplicados** en un conjunto (`conteo > 1`).
- Agrupar elementos por pares o sets (por ejemplo, agrupar medias por color en **Sales by Match**).
- Encontrar elementos mayoritarios o únicos.

---

## 3. Problemas Resueltos en el Repositorio

- [Valid Anagram (LeetCode 242)](../../problems/leetcode/0242-valid-anagram/README.md)
- [Contains Duplicate (LeetCode 217)](../../problems/leetcode/0217-contains-duplicate/README.md)
- [Sales by Match (HackerRank)](../../problems/hackerrank/sales-by-match/README.md)

Bien. Ahora bajamos un poco la ayuda.

## 🧩 Two Pointers — Problema nuevo

Tenés un array **ordenado** de números y tenés que eliminar los duplicados **in-place**, de forma que cada elemento aparezca una sola vez.

Ejemplo:

```text
nums = [1, 1, 2]

resultado:
nums = [1, 2, ...]
return 2
```

Otro:

```text
nums = [0,0,1,1,1,2,2,3,3,4]

return 5

Los primeros 5 elementos deben quedar:
[0,1,2,3,4]
```

Es **LeetCode 26 — Remove Duplicates from Sorted Array**.

### Restricción importante

No queremos crear:

```ts
const result = [];
```

ni un `Set`.

Tenemos que modificar `nums` directamente usando **O(1) espacio extra**.

---

No te voy a decir todavía dónde poner los dos punteros.

Pensalo como venimos haciendo.

Tu primera pregunta es:

> **¿Qué información necesitás recordar mientras recorrés el array para saber si el número actual es un duplicado o uno nuevo?**

No escribas código todavía. Explicame solamente qué necesitarías recordar. esto es lo ultimo en lo que estamos trabajando
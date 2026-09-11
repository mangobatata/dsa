## 🧩 Two Pointers (slow/fast) — Problema nuevo

Tenés un array `nums` y un valor `val`. Tenés que eliminar todas las ocurrencias de `val` **in-place**, de forma que al principio queden solo los elementos distintos de `val`.

Ejemplo:

```text
nums = [3, 2, 2, 3], val = 3

resultado:
nums = [2, 2, ...]
return 2
```

Otro:

```text
nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2

return 5

Los primeros 5 elementos deben ser distintos de 2.
El orden de esos 5 no importa tanto como en el 26,
pero igual hay que hacerlo in-place.
```

Es **LeetCode 27 — Remove Element**.

### Restricción importante

No queremos crear:

```ts
const result = [];
```

ni un `Set`.

Tenemos que modificar `nums` directamente usando **O(1) espacio extra**.

---

No te voy a decir todavía dónde poner los dos punteros.

Pensalo como venimos haciendo (26 → 27).

Tu primera pregunta es:

> **¿Qué cambia respecto al 26 — contra qué comparás ahora para decidir si `nums[i]` se queda o se descarta?**

No escribas código todavía. Explicame solamente qué necesitarías recordar.

Sí. Esa es la idea. Solo una corrección de nombre: el ejercicio es **Valid Parentheses**, aunque justamente detecta cuándo es inválido.

Hasta ahora aprendiste dos modelos mentales:

| Ejercicio         | Estructura  | Idea que descubriste                                                  | Tiempo |
| ----------------- | ----------- | --------------------------------------------------------------------- | ------ |
| Two Sum           | **HashMap** | “Necesito recordar algo que ya vi para consultarlo rápidamente”       | O(n)   |
| Valid Parentheses | **Stack**   | “Necesito recordar pendientes y resolver primero el último que entró” | O(n)   |

Y esto es importante: no quiero que memorices:

```text
Two Sum → HashMap
Valid Parentheses → Stack
```

Quiero que, frente a un problema nuevo, puedas pensar:

```text
¿Qué información necesito recordar?

¿Cómo necesito recuperar esa información?

¿Necesito buscar algo que ya vi?
→ podría necesitar HashMap

¿Necesito trabajar primero con lo último que guardé?
→ podría necesitar Stack
```

Eso es mucho más transferible que memorizar soluciones de LeetCode.

Y nos quedó una mini pregunta pendiente para cerrar Stack al 100%:

```text
Input: "((((((((("
```

Si hay `n` símbolos y todos se guardan en la Stack, ¿cuánto puede crecer la memoria de la Stack?

**O(1), O(n) u O(n²)?**

Pensalo por cantidad: si entran 10 símbolos, ¿cuántos puede guardar? Si entran 100, ¿cuántos?

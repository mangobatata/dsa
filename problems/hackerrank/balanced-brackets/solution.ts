// Balanced Brackets
// Te dan un string que contiene solamente estos símbolos:

// ```text
// ()
// []
// {}
// ```

// Tenés que devolver:

// ```text
// YES
// ```

// si **todos los brackets están correctamente balanceados**, y:

// ```text
// NO
// ```

// si no lo están.

// “Correctamente balanceados” significa dos cosas:

// ```text
// 1. Cada apertura tiene su cierre correspondiente.
// 2. Los cierres aparecen en el orden correcto.
// ```

// Ejemplos:

// ```text
// {[()]}       → YES
// {[(])}       → NO
// {{[[(())]]}} → YES
// ((            → NO
// ())           → NO
// ```

// Por eso:

// ```text
// (((
// ```

// es `NO`, porque quedaron aperturas sin cerrar.

// Y:

// ```text
// )))
// ```

// también es `NO`, porque aparecen cierres sin una apertura previa.

// Ahora sí volvamos al caso:

// crear stack vacío

// recorrer el input
//     si el símbolo es de apertura
//         guardarlo en stack

//     si el símbolo es de cierre
//         si stack está vacío
//             devolver NO

//         si el último abierto NO corresponde con el cierre
//             devolver NO

//         si corresponde
//             eliminar el último abierto del stack
//             continuar recorriendo

// al terminar el recorrido
//     si stack está vacío
//         devolver YES
//     si no
//         devolver NO
function isBalanced(s: string): string {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        return "NO";
      } else {
        const lastOpen = stack[stack.length - 1];
        if (lastOpen === "(" && s[i] === ")") {
          stack.pop();
        } else if (lastOpen === "[" && s[i] === "]") {
          stack.pop();
        } else if (lastOpen === "{" && s[i] === "}") {
          stack.pop();
        } else {
          return "NO";
        }
      }
    }
  }

  if (stack.length === 0) {
    return "YES";
  }
  return "NO";
}

const isAlphaNumeric = (char: string): boolean => {
  return /[a-zA-Z0-9]/.test(char);
};

function isPalindrome(s: string): boolean {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (!isAlphaNumeric(s[i])) {
      i++;
      continue;
    }

    if (!isAlphaNumeric(s[j])) {
      j--;
      continue;
    }

    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}

// Tiempo: O(n)
// Espacio extra: O(1)

// izquierda inválida
// → i++

// derecha inválida
// → j--

// ambos válidos y diferentes
// → false

// ambos válidos e iguales
// → i++
// → j--
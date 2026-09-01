function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const memoS: { [key: string]: number } = {};
  const memoT: { [key: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in memoS) {
      memoS[s[i]] += 1;
    } else {
      memoS[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] in memoT) {
      memoT[t[i]] += 1;
    } else {
      memoT[t[i]] = 1;
    }
  }

  const keysS = Object.keys(memoS);
  for (let i = 0; i < keysS.length; i++) {
    const letter = keysS[i];

    if (memoS[letter] !== memoT[letter]) {
      return false;
    }
  }
  return true;
}

// FUNCIÓN isAnagram(s, t)
//     SI longitud de s es diferente a longitud de t:
//         devolver false
//     crear memoriaS vacía
//     crear memoriaT vacía

//     PARA cada letra de s:
//         SI la letra ya existe en memoriaS:
//             aumentar su contador en 1
//         SI NO:
//             guardar la letra con contador = 1

//     PARA cada letra de t:
//         SI la letra ya existe en memoriaT:
//             aumentar su contador en 1
//         SI NO:
//             guardar la letra con contador = 1

//     obtener todas las letras guardadas en memoriaS

//     PARA cada letra guardada en memoriaS:
//         comparar:
//             cantidad de esa letra en memoriaS
//             cantidad de esa letra en memoriaT

//         SI las cantidades son diferentes:
//             devolver false

//     devolver true

// si las longitudes son diferentes:
//     false

// contar frecuencias de s
// contar frecuencias de t

// por cada letra de s:
//     si su frecuencia en s != frecuencia en t:
//         false

// true
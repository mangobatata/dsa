function twoSum(nums: number[], target: number): number[] {
  // 1. ¿Qué estructura de datos vas a usar como "memoria"?
  //    (pensá: necesitás guardar números y preguntar "¿está esto adentro?" rápido)

  // Voy a utilizar HashMap para guardar elementos y sus índices, ya que permite búsquedas rápidas.
  const numMap: Record<number, number> = {};

  // 2. Recorré el array una sola vez, elemento por elemento
  for (let i = 0; i < nums.length; i++) {
    // 3. En cada elemento: calculá el complemento (target - elemento_actual)
    const complement = target - nums[i];
    // 4. Preguntá: ¿el complemento ya está en la memoria?

    if (complement in numMap) {
      // si sí -> ya tenés la respuesta
      return [numMap[complement], i];
    }
    // si no -> guardá el elemento actual en la memoria y seguí
    numMap[nums[i]] = i;
  }

  return [];
}

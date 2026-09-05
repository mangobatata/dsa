i = 0
j = longitud de numbers - 1

mientras i < j:
    suma = numbers[i] + numbers[j]

    si suma === target
        return [i+1, j+1]

    si suma > target:
        j--
    si suma < target:
        i++

return []


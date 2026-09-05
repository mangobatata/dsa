function twoSum(numbers: number[], target: number): number[] {
    let i = 0;
    let j = numbers.length - 1;

    while (i < j) {
        const sum = numbers[i]+numbers[j];

        if (sum === target) {
            return [i+1, j+1]
        } 
        if (sum > target) {
            j--
        }
        if (sum < target) {
            i++
        }
    }    

    return [];
};



// i = inicio
// j = final

// mientras i < j
//     suma = numbers[i] + numbers[j]

//     si suma == target
//         devolver índices

//     si suma > target
//         j--

//     si suma < target
//         i++
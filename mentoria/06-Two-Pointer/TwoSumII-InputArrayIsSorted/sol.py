class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        i = 0
        j = len(numbers) - 1

        while i < j:
            total = numbers[i] + numbers[j]

            if total == target:
                return [i+1,j+1]
            if total > target:
                j-=1
            if total < target:
                i+=1
        
        return []
    
    
    
# i = inicio
# j = final

# mientras i < j
#     suma = numbers[i] + numbers[j]

#     si suma == target
#         devolver índices

#     si suma > target
#         j--

#     si suma < target
#         i++
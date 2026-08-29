def twoSum(nums, target):
    hash_map = {}
    for index, num in enumerate(nums):
        complement = target - num
        if complement in hash_map:
            return [hash_map[complement], index]
        
        hash_map[num] = index
 
      
    return []


print(twoSum([11, 5, 7, 4, 78, 2], 9))
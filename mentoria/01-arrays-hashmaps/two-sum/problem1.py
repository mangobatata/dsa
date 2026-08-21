def twoSum(nums, target):
    nums_dict = {}
    for num in nums:
        complement = target - num
        if complement in nums_dict:
            return [nums_dict[complement], nums.index(num)]
        nums_dict[num] = nums.index(num)

    return []
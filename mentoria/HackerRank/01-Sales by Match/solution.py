def sockMerchant(n, ar):
    memo = {}
    totalPares = 0

    for value in ar:
        if value in memo:
            memo[value] += 1
        else:
            memo[value] = 1
            
    for v in memo:
        res = memo[v] // 2
        totalPares += res 

    return totalPares

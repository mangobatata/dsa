def isBalanced(s):
    stack = []
    for item in s:
        if item == "{" or item == "[" or item == "(":
            stack.append(item)
        else:
            if len(stack) == 0:
                return "NO"

            last_open = stack[len(stack)-1]
            if last_open == "(" and item == ")":
                stack.pop()
            elif last_open == "[" and item == "]":
                stack.pop()
            elif last_open == "{" and item == "}":
                stack.pop()
            else:
                return "NO"
            
    if len(stack) == 0:
        return "YES"
    
    return "NO"

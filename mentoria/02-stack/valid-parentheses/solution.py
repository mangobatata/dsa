class Solution:
    def isValid(self, s: str) -> bool:
        stack = []

        for i, char in enumerate(s):
            
            last_open = stack[len(stack) - 1] if stack else None
            if char == "(" or char == "[" or char == "{":
                stack.append(char)

            if char == ")" and last_open != "(":
                return False
            elif char == ")" and last_open == "(": 
                stack.pop()

            if char == "]" and last_open != "[":
                return False
            elif char == "]" and last_open == "[": 
                stack.pop()

            if char == "}" and last_open != "{":
                return False
            elif char == "}" and last_open == "{": 
                stack.pop()

        return len(stack) == 0

# 3) What does this Python code output?
def f(x, l=[]):
    for i in range(x):
        l.append(i*1)
    print(l)

f(2)
f(3,[3, 2, 1])
f(3)
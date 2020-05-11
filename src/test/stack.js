import Stack from '../Stack/Stack'

const stack = new Stack()

stack.push('a')

stack.getSize()

stack.push('b')

stack.push(123)

console.log(stack)

console.log(stack.getSize())

stack.pop()

console.log(stack.size)

console.log(stack)
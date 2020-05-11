import Queue from '../Queue/Queue'

const queue = new Queue()

queue.in('a')

queue.in(1234)

console.log(queue.getSize())

console.log(queue.out())

console.log(queue.in('bbb'))

console.log(queue)
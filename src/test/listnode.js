import ListNode from '../ListNode/ListNode'

const listnode = new ListNode()

listnode.append('aa')

listnode. append('lyttt')

console.log(listnode)

listnode.insert(0, 'start')

listnode.insert(2, 'insert')

listnode.insert(4, 'insertEnd')

listnode.insert(10, 'error')

console.log(listnode)

console.log(listnode.findIndex('start'))

console.log(listnode.findIndex('insertEnd'))

console.log(listnode.removeAt(2))

console.log(listnode.removeAt(0))

console.log(listnode.length)

listnode.clear()

console.log(listnode)
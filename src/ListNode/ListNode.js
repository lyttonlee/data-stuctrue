class ListNode {
  constructor () {
    this.head = null
    this.length = 0
  }

  append (element) {
    let node = new Node(element)
    if (this.length === 0) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  insert (index, element) {
    if (index < 0 || index > this.length) {
      return false
    }
    let node = new Node(element)
    if (index === 0) {
      node.next = this.head
      this.head = node
    } else {
      let curIndex = 0
      let current = this.head
      let previous = null
      while (curIndex < index) {
        previous = current
        current = current.next
        curIndex++
      }
      previous.next = node
      node.next = current
    }
    this.length++
  }

  findIndex (element) {
    if (!element) return -1
    let index = 0
    let current = this.head
    while (current.value !== element && index < this.length) {
      current = current.next
      index++
    }
    return index >= this.length ? -1 : index
  }

  getElementAt (index) {
    if (index < 0 || index > this.length - 1) return null
    let curIndex = 0
    let current = this.head
    while (curIndex < index) {
      current = current.next
      curIndex++
    }
    return current
  }

  removeAt (index) {
    if (index < 0 || index > this.length - 1) return false
    if (index === 0) {
      let cur = this.head 
      this.head = cur.next
      this.length--
      return cur
    }
    let curIndex = 1
    let previous = this.head
    let current = this.head.next
    while (curIndex < index) {
      previous = current
      current = current.next
      curIndex++
    }
    previous.next = current.next
    this.length--
    return current
  }

  clear () {
    this.head = null
    this.length = 0
  }
}

class Node {
  constructor (element) {
    this.value = element
    this.next = null
  }
}

export default ListNode

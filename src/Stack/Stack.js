class Stack {
  constructor () {
    this.stack = new Array()
    this.size = 0
  }
  push (element) {
    this.stack.push(element)
    // console.log(this.stack)
    this.size = this.stack.length
  }
  pop () {
    let currentItem = this.stack.pop()
    this.size = this.stack.length
    return currentItem || '栈已经空了'
  }
  getSize () {
    return this.stack.length
  }
}

export default  Stack
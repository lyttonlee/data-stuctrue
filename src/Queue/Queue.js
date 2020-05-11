class Queue {
  constructor () {
    this.queue = new Array()
    this.size = 0
  }
  in (element) {
    this.queue.push(element)
    this.size = this.queue.length
  }

  out () {
    let currentItem = this.queue.shift()
    this.size = this.queue.length
    return currentItem
  }

  getSize () {
    return this.size
  }
}
export default Queue
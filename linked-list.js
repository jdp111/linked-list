/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val)

    if (!this.head){
      this.head = newNode
    }else{
      this.tail.next = newNode
      newNode.prev = this.tail
    }
    this.tail = newNode
    this.length +=1

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)
    if (this.head){
      newNode.next = this.head
      this.head.prev = newNode
    }else{
      this.tail = newNode
    }
    this.length +=1
    this.head = newNode
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head){
      throw Error
    }

    const res = this.tail.val
    this.tail = this.tail.prev

    if(this.tail){
      this.tail.next = null
    }else{
      this.head = null
    }
    
    this.length -=1

    return res
  }

  /** shift(): return & remove first item. */

  shift() {
    if(!this.head){
      throw Error
    }

    const res = this.head.val
    this.head = this.head.next

    if (this.head){
    this.head.prev = null
    }else{
      this.tail = null
    }

    this.length -=1
    return res
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let res = this.head
    for (let i = 0; i < idx; i++){
      res = res.next
    }
    return res.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let res = this.head
    for (let i = 0; i < idx; i++){
      res = res.next
    }
    res.val = val
    return res.val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

    if(idx > this.length){
      throw Error
    }

    const newNode = new Node(val)
    let res = this.head
    for (let i = 0; i < idx; i++){
      res = res.next
    }

    if(!res){
      if(this.tail) {
        this.tail.next = newNode
        newNode.prev = this.tail
      }else{this.head = newNode}

      this.tail = newNode
      this.length +=1
      return undefined
    }

    newNode.next = res
    newNode.prev = res.prev
    
    if(res.prev){
      res.prev.next = newNode
    }

    res.prev = newNode
    this.length +=1
    return undefined
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx > this.length-1){
      throw Error
    }
    
    if (this.length ==1){
      this.length = 0
      this.head = null
      this.tail = null
      return undefined
    }

    if (idx == 0){
      this.head = this.head.next
      this.head.prev = null
      this.length -=1
      return undefined
    }
    
    if (idx == this.length-1){
      this.tail = this.tail.prev
      this.tail.next = null
      this.length -=1
      return undefined
    }

    let res = this.head
    for (let i = 0; i < idx; i++){
      res = res.next
    }

    res.prev.next = res.next
    res.next.prev = res.prev
    this.length -=1
    return undefined
  }

  /** average(): return an average of all values in the list */

  average() {
    let total = 0
    let item = this.head
    for (let i=0; i < this.length; i++){
      total += item.val
      item = item.next
    }

    return total/(this.length || 1)

  }
}

module.exports = LinkedList;


//Queues 
//Creating a waitlist app 

//Matt -- joy -- Sam -- Emily

//implemented in linkedlist 

class Node {
  constructor(value) {
    this.value = value; 
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null; 
    this.last = null; 
    this.length = 0; 
  }
//returns without removing the element at the front of queue
  first(){
    return this.first; 
  }

//add one element to the rear of the queue
  enqueue(value){
    const newNode = new Node(value); 
    if(this.length === 0){
      this.first = newNode; 
      this.last = newNode; 
    }else{
      this.last.next = newNode; 
      this.last = newNode;
    }
    this.length++; 
    return this;
  }

//removes and returns the element at the front of the queue 
 dequeue(){
    if(!this.first){
      return null;
    }
    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next
    this.length --; 
    return this;
  }
}


const myQueue = new Queue(); 

console.log(myQueue.enqueue("Julia"));
console.log(myQueue.enqueue("John"));
console.log(myQueue.enqueue("Anna"));

console.log(myQueue.dequeue());

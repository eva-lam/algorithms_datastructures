
function Queue(){
  this.elements = [];
}

//enqueue adds an element to the end of a queue 
Queue.prototype.enqueue = function(input) {
	this.elements.push(input);
}

//dequeue removes an element from the front of a queue 
Queue.prototype.dequeue = function(){ 
	if(this.elements.length ==0 ) {
		return this.elements;
	}
	this.elements.shift(); 
}

//isEmpty checks if a queue is empty and return a boolean 
Queue.prototype.isEmpty = function() {
	return this.elements.length ===0
}

//Peek returns the first element of a queue 
Queue.prototype.peek = function() {
	return !this.isEmpty()? this.elements[0]: undefined;
};

Queue.prototype.size = function() {
	return this.elements.length; 
}

let newQueue =  new Queue(); 

//add new element to the new queue 
newQueue.enqueue("hello");

console.log(newQueue.peek());  

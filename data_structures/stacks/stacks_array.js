
//using array 
class Stack {
	constructor(){
		this.array = [];
	}

	peek(){
    //peek the latest entry
		return this.array[this.array.length-1];
	}	

	push(value){
		this.array.push(value);
		return this; 
	}

	pop(){
    return this.array.pop();
	}
}

const myStack = new Stack(); 
// myStack.push("discord");
// myStack.push("Google");
console.log(myStack.push("Udemy"));
console.log(myStack.peek());

//Discord 
//Udemy
//Google



//First we construct a node class with its property
class Node {
	constructor(value){
		this.left = null; 
		this.right = null; 
		this.value = value
	}
  
  restructure(smallerNode){
    if(this.left == null && this.right == null){
       this.left = smallerNode;
      }else if(this.right ==null){
        //option 2: only left child 
        this.left.restructure(smallerNode);
      }else if (this.left == null ){
        //option 3: only right child
        this.left = smallerNode;
      }else{
        //option 4 have both children 
        this.left.restructure(smallerNode);
      }
  }
  
  remove(value){
    
    if (this.value === value){
      //need to remove this node
      //option 1: no children 
      if(this.left == null && this.right == null){
        return null;
      }else if(this.right ==null){
        //option 2: only left child 
        return this.left;
      }else if (this.left == null ){
        //option 3: only right child
        return this.right;
      }else{
        //option 4 have both children 
         this.right.restructure(this.left)
        return this.right
      }
      
      
    }else if (this.value > value){
      if (this.left != null) {
        this.left = this.left.remove(value);        
      }
      return this;
    }else if (this.value < value){
      if(this.right != null) {
        this.right = this.right.remove(value);
      }
      return this; 
    }
  }
}

class BinarySearchTree {
	constructor(){
		this.root = null; 
	}
	insert(value){
		const newNode = new Node(value);
		if(this.root === null){
			this.root = newNode
		}else{
      //traverse this node 
      let currentNode = this.root
			while (true){
        if(value < currentNode.value){
          if (!currentNode.left){
          currentNode.left = newNode
          return this;
          }
          currentNode = currentNode.left
        }else{
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right
        } 
			}
		}
	}
//step 1: check if root is not null and if value is bigger than first node 
//step 2 while value is not equal to 
	lookup(value){
		if(!this.root){
			return false;
		}
    let currentNode = this.root

    while( currentNode){
      if( currentNode.value > value){
        currentNode = currentNode.left;
      }else if ( currentNode.value < value){
        currentNode = currentNode.right;
      }else if( currentNode.value === value){
        return currentNode;
      }
     }
    return false;
	}
  
  remove(value){
    if(!this.root){
      return false;
    }else{
      this.root = this.root.remove(value) 
    }
    
    return this;
    
  }
 
 

}

const tree = new BinarySearchTree(); 
console.log(tree.insert(9));
console.log(tree.insert(4));
console.log(tree.insert(6));
console.log(tree.insert(20));
console.log(tree.insert(170));
console.log(tree.remove(20));
// tree.insert(15)
// tree.insert(30)

JSON.stringify(traverse(tree.root))

function traverse(node){
	const tree = {value: node.value}; 
	tree.left = node.left == null? null: 
	traverse(node.left); 
	tree.right = node.right === null? null: 
	traverse(node.right); 
	return tree; 
}
// 8
// 3  20
//1 5 15 30

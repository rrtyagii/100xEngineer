const createNode = (value) => {
  return {
    value: value,
    left: null,
    right: null,
  }
}

const depthFirstInsert = (root, value) => {
  if (root.value === value || !value)
    return root;

  // insert on the left side of the tree
  if (value < root.value) {
    if (root.left) {
      return depthFirstInsert(root.left, value);
    } else {
      root.left = createNode(value);
      return root;
    }
  }

  // insert on the right side of the tree
  if (root.value < value) {
    if (root.right) {
      return depthFirstInsert(root.right, value);
    } else {
      root.right = createNode(value);
      return root;
    }
  }
}

const depthFirstInsertIteratively = (root, value) => {
  if (!root) return createNode(value);
  const stack = [root];  // Initialize stack with just the root node

  while (stack.length > 0) {
    const currentNode = stack.pop(); 
    
    if (value < currentNode.value) {
      if (currentNode.left) {
        stack.push(currentNode.left); 
      } else {
        currentNode.left = createNode(value); 
        break;  
      }
    } 
    
    else if (value > currentNode.value) {
      if (currentNode.right) {
        stack.push(currentNode.right); 
      } else {
        currentNode.right = createNode(value); 
        break;  
      }
    }
  }
  return root; 
}

const breadthFirstTraverse = (root) => {
  let collector = [];
  let q = [root]

  while (q.length > 0) {
    let first = q.shift();
    collector.push(first.value);
    if (first.left)
      q.push(first.left);

    if (first.right)
      q.push(first.right);
  }

  return collector;
};

const breadFirstRecursiveHelper=(queue, result)=>{

  if(queue.length === 0){
    return result; 
  }

  const currentNode = queue.shift(); 
  result.push(currentNode.value); 

  if(currentNode.left) queue.push(currentNode.left); 
  if(currentNode.right) queue.push(currentNode.right); 

  return breadFirstRecursiveHelper(queue, result); 
}

const breadthFirstTraverseRecursively = (root)=>{
  const queue = [root]; 
  const result = []; 

  breadFirstRecursiveHelper(queue, result); 

  return result; 
}

module.exports = {depthFirstInsertIteratively, breadthFirstTraverseRecursively, createNode};
// module.exports = {depthFirstInsert, breadthFirstTraverse, createNode}; 

// module.exports = {depthFirstInsertIteratively, breadthFirstTraverse, createNode};
// module.exports = {depthFirstInsert, breadthFirstTraverseRecursively, createNode};
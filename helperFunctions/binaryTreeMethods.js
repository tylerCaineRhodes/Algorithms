class Node {
  constructor(value) {
    this.value = value || null;
    this.left = null;
    this.right = null;
  }
}

const bfsInsertion = (node, arr, index) => {
  if (arr.length > index) {
    let current = new Node(arr[index]);
    node = current;

    node.left = insert(node.left, arr, 2 * index + 1);
    node.right = insert(node.right, arr, 2 * index + 2);
  }
  return node;
};

const BFS_Print = (node) => {
  let collection = [node];
  let seen = [];

  while (collection.length) {
    let node = collection.shift();
    seen.push(node.value);

    if (node.left) {
      collection.push(node.left);
    }
    if (node.right) {
      collection.push(node.right);
    }
  }
  return seen;
};

const DFS_Print = (node) => {
  let collection = [node];
  let seen = [];

  while (collection.length) {
    let node = collection.shift();
    seen.push(node.value);

    if (node.right) {
      collection.unshift(node.right);
    }
    if (node.left) {
      collection.unshift(node.left);
    }
  }
  return seen;
};

const normalDF_Print = (node) => {
  let seen = [];

  const traverse = (node) => {
    seen.push(node.value)
    
    if(node.left){
      traverse(node.left)
    }
    if(node.right){
      traverse(node.right)
    }
  }
  traverse(node);
  return seen;
}

module.exports = {
  Node,
  bfsInsertion,
  BFS_Print,
  DFS_Print,
  normalDF_Print,
};
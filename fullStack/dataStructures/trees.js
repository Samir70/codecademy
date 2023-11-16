class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild(child) {
    if (child instanceof TreeNode) {
      this.children.push(child);
    } else {
      this.children.push(new TreeNode(child));
    }
  }

  removeChild(childToRemove) {
    this.children = this.children.filter(child => childToRemove instanceof TreeNode ? childToRemove !== child : childToRemove !== child.data)
  }
};

// module.exports = TreeNode;
// const TreeNode = require('./TreeNode');
const tree = new TreeNode(1);

tree.addChild(15);
const node = new TreeNode(30);
tree.addChild(node);

tree.removeChild(node)
console.log(tree)

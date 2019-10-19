// interface ITreeNode {
//   value: number;
//   parent: ITreeNode | null;
//   left: ITreeNode | null;
//   right: ITreeNode | null;
// }

class TreeNode {
  value: number;
  parent: TreeNode;
  left: TreeNode;
  right: TreeNode;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(node: TreeNode) {
    if (this.left === null) {
      this.left = node;
    } else {
      this.right = node;
    }
  }


}

// abstract class IBinarySearchTreeNode {
//   insert(newValue: number): void;
// }

class BinaraySearchTreeNode {
  value: number | null;
  parent: BinaraySearchTreeNode | null;
  left: BinaraySearchTreeNode | null;
  right: BinaraySearchTreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  insert(newValue: number) {
    // if (this.value !== newValue) {
    //   this.value = newValue;
    // } else if (this.value > newValue) {
    //   this.left.insert(newValue);
    // }
  }
}

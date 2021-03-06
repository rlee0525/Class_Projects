// Given two nodes in a binary tree, design an algorithm that computes their Least Common Ancestor (LCA). Assume that each node has a parent pointer.

// For example, given this BST:

//            (A)
//           /   \
//         (B)   (F)
//        /   \
//     (C)    (E)
//     /
//   (D)
// The LCA of D and E would be B.

let BinarySearchTree = require("./bst.js");

// With parent pointer
// Time: O(h) Space: O(h) - Brute Force
const LCA1 = (node1, node2) => {
  let seen = {};

  while (node1) {
    seen[node1] = true;
    node1 = node1.parent;
  }

  while (node2) {
    if (seen[node2]) return seen[node2];
    node2 = node2.parent;
  }

  return false;
};

// Time: O(h) Space: O(1) - Depth Method
const LCA2 = (node1, node2) => {
  let depth1 = getDepth(node1);
  let depth2 = getDepth(node2);

  if (depth1 < depth2) {
    let temp = node1;
    node1 = node2;
    node2 = temp;
  }

  let depthDifference = Math.abs(depth1 - depth2);
  while (depthDifference !== 0) {
    node1 = node1.parent;
    depthDifference--;
  }

  while (node1 !== node2) {
    node1 = node1.parent;
    node2 = node2.parent;
  }

  return node1;
};

const getDepth = node => {
  let depth = 0;

  while (node) {
    depth++;
    node = node.parent;
  }

  return depth;
};

// Given Root & No parent
// Time: O(h) Space: O(h) - stack
const LCA3 = (node1, node2, root) => {
  if (!root) return root;

  if (node1.val < root.val && node2.val < root.val) return LCA3(node1, node2, root.left);
  if (node1.val > root.val && node2.val > root.val) return LCA3(node1, node2, root.right);
  return root;
};

// Time: O(h) Space: O(1)
const LCA4 = (node1, node2, root) => {
  while (root) {
    if (node1.val < root.val && node2.val < root.val) {
      root = root.left;
    } else if (node1.val > root.val && node2.val > root.val) {
      root = root.right;
    } else {
      break;
    }
  }

  return root;
};









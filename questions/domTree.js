// We have two identical DOM trees, A and B. For DOM tree A, we have
// the location of an element. Create a function to find that same element
// in tree B.

function walkBackTree(node, tree) {
  let head = node;
  const nodeList = [];

  while (head.parent) {
    const index = head.parent.children.indexOf(node);
    if (index >= 0) {
      nodeList.push(index);
    }
    head = head.parent;
  }

  head = tree;

  while (nodeList.length) {
    head = head.children[nodeList.pop()];
  }

  return head;
}
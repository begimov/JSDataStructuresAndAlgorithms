function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.recursiveInsert = recursiveInsert;
    this.inOrder = inOrder;
}

function insert(data) {
    var n = new Node(data, null, null);

    if (this.root == null) {
        this.root = n;
    }
    else {
        var current = this.root;
        var parent;

        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            }
            else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }    
}

function recursiveInsert(data) {
    var n = new Node(data, null, null);

    function iter(subtree) {
        var parent = subtree;
            if (data < subtree.data) {
                subtree = subtree.left;
                if (subtree == null) {
                    parent.left = n;
                    return;
                }
            }
            else {
                subtree = subtree.right;
                if (subtree == null) {
                    parent.right = n;
                    return;
                }
            }
        iter(subtree);
    }

    if (this.root == null) {
        this.root = n;
    } 
    else {
        iter(this.root);
    }
}

function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}
// Creamos el nodo de arbol
function TreeNode(value) {
    return {
        value: value,
        left: null,
        right: null,
    } // Solo es valido en JavaScript
}

function insertNode(node, value) {
    if (value < node.value) {
        if (node.left === null) {
            node.left = TreeNode(value);
        } else {
            insertNode(node.left, value);
        }
        } else {
            if (node.right === null) {
                node.right = TreeNode(value);
            } else {
                insertNode(node.right, value);
            }
        }
    }

    function  insertData(root, value) {
        if (root === null) {
            return TreeNode(value);
        } else {
            insertNode(root, value);
            return root;
        }
    }

    function searchNode(node, value) {
        if (node === null || node.value === value) {
            return node;
        }

        if (value < node.value) {
            return searchNode(node.left, value);
        }

        return searchNode(node.right, value)
    }

    function searchData(root, value) {
        return searchNode(root, value);
    }
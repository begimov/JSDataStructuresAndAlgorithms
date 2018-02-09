function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // array to store list elements
    // this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    // this.front = front;
    // this.end = end;
    // this.prev = prev;
    // this.next = next;
    this.length = length;
    // this.currPos = currPos;
    // this.moveTo = moveTo;
    // this.getElement = getElement;
    this.length = length;
    // this.contains = contains;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        console.log(this.dataStore[i])
        if (this.dataStore[i] == element) {
            return i;
        }
    }
        return -1;
}

function remove(element) {
    var foundElementIndex = this.find(element);
    console.log(foundElementIndex);
    if (foundElementIndex > -1) {
        this.dataStore.splice(foundElementIndex, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}
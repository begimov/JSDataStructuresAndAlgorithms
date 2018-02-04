function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
}

function put(data) {
    var pos = this.simpleHash(data);
    this.table[pos] = data;
}
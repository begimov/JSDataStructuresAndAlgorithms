function recurFib(n) {
    if (n < 2) {
        return n;
    }
    return recurFib(n - 1) + recurFib(n - 2);
}

function dynFib(n) {
    if (n == 0) return 0;

    if (n == 1 || n == 2) {
        return 1;
    }
    
    var val = [];
    val[1] = 1;
    val[2] = 1;

    for (var i = 3; i <= n; i++) {
        val[i] = val[i - 1] + val[i - 2];
    }

    return val[n];
}
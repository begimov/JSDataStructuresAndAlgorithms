function recurFib(n) {
    if (n < 2) {
        return n;
    }
    return recurFib(n - 1) + recurFib(n - 2);
}
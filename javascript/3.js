function p(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            process.stdout.write("x");
        }
        console.log();
    }
}
console.log(p(5));
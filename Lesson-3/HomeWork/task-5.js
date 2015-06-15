h = 8;
w = 8;

for (i = 0; i < h; i++) {
    for (var j = 0; j < w / 2; j++) {
        (i % 2 !== 0) ? process.stdout.write(" " + "#") : process.stdout.write("#" + " ");
    }
    process.stdout.write('\n');
}


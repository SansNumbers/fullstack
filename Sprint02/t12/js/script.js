function concat(...args) {
    
    concatSecondString.count = 0;

    function concatSecondString() {
        let str = prompt("Enter string: ", "");
        if (str === null)
            return args[0];
        concatSecondString.count++;
        return args[0].concat(" ", str);
    }

    if (args.length == 1)
        return concatSecondString;
    if (args.length == 2) {
        return args[0].concat(" ", args[1]);
    }
}

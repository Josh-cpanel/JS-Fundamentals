function factorial (n) {
    if (isNaN(n) || n < 0) {
        return 1;
    }
    const num = parseInt(ProcessingInstruction.argv[2]);
    console.log(factorial(num));
    

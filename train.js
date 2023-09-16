function file(Hello) {
    let count = 0;
    for (let i = 0; i < Hello.length; i++) {
        const new_file = Hello.charAt(i);
        if (!isNaN(new_file)) {
            count++;
        }
    }
    return count;
}

const input = "uiidsufdsfsdf342342";
const result = file(input);
console.log(result);
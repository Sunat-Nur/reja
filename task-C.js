console.log("hello, world")

//true
function checkSimilarity(check, letter) {
    if (check.length === letter.length) {
        return true;
    } else if (check.length !== letter.length ) {
        return false;
    }
}

const result = checkSimilarity("samad", "damas");
console.log(result);


//false
function checkSimilarity2(check2, letter2) {
    if (check2.length === letter2.length) {
        return true;
    } else if (check2.length !== letter2.length ) {
        return false;
    }
}

const answer = checkSimilarity2("samad", "dajjmas");
console.log(answer);


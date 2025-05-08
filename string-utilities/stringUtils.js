function capitalize(str) {
    if (typeof str !== "string") {
        throw new Error("Please input a string as an argument");
    }

    if (str === "") {
        throw new Error("Your input is an empty string");
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
}


// reverse, iterative
// function reverse(str) {
//     let reversed = '';
//     for (i=str.length-1; i >= 0; i--) {
//         reversed += str[i];
//     }

//     return reversed
// }

// reverse, recursive
function reverse(str) {
    if (typeof str !== "string") {
        throw new Error("Please input a string as an argument");
    }
    
    if (str === "") {
        throw new Error("Your input is an empty string");
    }

    if (str.length <= 1) {
        return str
    }
    return str[str.length-1] + reverse(str.slice(0, str.length-1))
}


// low code
// function contains(str, substr) {
//     return str.includes(substr);
// }

// pro code, a better implementation?
function contains(str, substr) {
    if (!str || !substr) {
        throw new Error("You are missing at least one of two arguments");
    }

    if (str === "" || substr === "") {
        throw new Error("At least one of your inputs is an empty string");
    }

    if (typeof str !== "string" || typeof substr !== "string") {
        throw new Error("At least one of your two inputs is not a string");
    }

    for (i = 0; i <= str.length - substr.length; i++) {
        if (str[i] == substr[0]) {
            temp = ''
            let j = 0;
            while (i < str.length && str[i] == substr[j]) {
                temp += str[i];
                if (temp == substr) {
                    return true;
                }
                i++;
                j++;
            }
        }
    }

    return false;
}



module.exports = { capitalize, reverse, contains }
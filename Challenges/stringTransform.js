function reverseString(str) {
    return str.split('').reverse().join('');
}

function toAsciiCodes(str) {
    return str.split('').map(char => char.charCodeAt(0)).join(' ');
}

function transformString(input) {
    var length = input.length;

    if (length % 15 === 0) {
        return toAsciiCodes(reverseString(input));
    } else if (length % 3 === 0) {
        return reverseString(input);
    } else if (length % 5 === 0) {
        return toAsciiCodes(input);
    } else {
        return input;
    }
}
console.log(transformString("Hamburger"));
console.log(transformString("Pizza"));
console.log(transformString("Chocolate Chip Cookie"));
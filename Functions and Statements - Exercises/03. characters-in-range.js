function charactersInRange(firstChar, secondChar){
    let firstAsciiCode = firstChar.charCodeAt(0);
    let secondAsciiCode = secondChar.charCodeAt(0);
    let chars = [];
    if (secondAsciiCode > firstAsciiCode){
        for (let index = firstAsciiCode + 1; index < secondAsciiCode; index++) {
            const char = String.fromCharCode(index);
            chars.push(char)
        }
    }else{
        for (let index = secondAsciiCode+1; index < firstAsciiCode; index++) {
            const char = String.fromCharCode(index);
            chars.push(char)
        }
    }

    return chars.join(' ')
}

console.log(charactersInRange('C', '#'));

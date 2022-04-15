const textElement = ['Desa Jatimulyo', 'Desa Jatimulyo'];
let count = 0;
let textIndex = 0;
let currentText = '';
let word = '';

(function ketik() {
    if (count == textElement.length) {
        count = 0;
    }

    currentText = textElement[count];
    word = currentText.slice(0, ++textIndex);
    document.querySelector('.efek-mengetik').textContent = word;
    
    if (word.length == currentText.length){
        count++;
        textIndex = 0;
    }

    setTimeout(ketik, 500);
})();
var plainText = (prompt ('Ingresa la frase a cifrar. Recuerda que no debe contener caracteres especiales o números'));

if (plainText === null || plainText === '') {
  plainText = prompt ('Ingresa la frase a cifrar. Recuerda que no debe contener caracteres especiales o números');
}


var abcLowerCase = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];

var abcUpperCase = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function cipher (text) {

  var plainTextLength = plainText.length;

  var asciiCodeLetter = [];

  for (var i = 0; i < plainTextLength; i++) {//Obtener indice de letras del mensaje. Largo de la palabra
     var asciiCode = text[i].charCodeAt();
      asciiCodeLetter.push(asciiCode); //devuelve array con ascii code de plainText
    }

  var asciiCodeLetterLength = asciiCodeLetter.length;

  var asciiCodeLetterNumber = parseInt(asciiCodeLetter); // passar elementos de array a numero

  var movedAsciiCodeWithLoop = [];//llenar array con push al final

    for (var j = 0; j < asciiCodeLetterLength; j ++){ //distincion de conteo cuando llega a z/Z
        if (asciiCodeLetterNumber[j] === 90)  { //REVISAR QUE LAS LETRAS NORMALES SE AGREGUEN FUNCIONA CON LAS Z NO CON LAS DEMAS
          asciiCodeLetterNumber[j] = 65 + 2;
        } else if (asciiCodeLetterNumber[j] === 122) {
          asciiCodeLetterNumber[j] = 97 + 2;
        } else {
          asciiCodeLetterNumber += 3; //suma lugares a ascci
        }
    movedAsciiCodeWithLoop.push(asciiCodeLetterNumber);
  }

    var movedAsciiCodeWithLoopString = movedAsciiCodeWithLoop.toString();

    var cipherString = String.fromCharCode(movedAsciiCodeWithLoopString);

 return cipherString;
}

alert (cipher (plainText));

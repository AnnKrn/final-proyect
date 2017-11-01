# Cifrado de César

## Planteamiento

Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de _Cifrado César_ con el parámetro de desplazamiento de 33 espacios hacia la derecha.

#### Consideraciones específicas

- [ ] Cifrar y descifrar frases en mayúsculas y minúsculas.
- [ ] Crear una función para cifrar llamaad *cipher* y una función para descifrar llamada *decipher*.
- [ ] El usuario no puede ingresar un campo vacio o que contenga números.

## Pseudocódigo

#### Función *cipher*
1. Crear variable que contenga el texto a cifrar _var = plainText_
2. _plainText_ se alimentará por medio de _prompt ('Ingresa la frase a cifrar. Recuerda que no debe contener caracteres especiales, espacios o números)_ al pedir al usuario que ingrese el texto a codificar.
  * Especificar en redacción que la frase no debe contener *números* o *espacios*
  * Validar que el usuario introdujo alguna frase por medio de _if (null || cadena vacia (' ')) {'Ingresa una frase'}_.
  * En caso de no ser válida volver a solicitar ingresar frase  _prompt ('Ingresa la frase a cifrar. Recuerda que no debe contener caracteres especiales o números)_
3. Crear funcón _cipher_, que recibirá como parámetro _text_
4. Con _for_ iterar por _text_ ingresado, obtener i de cada caracter. La funcion debe obtener el código ascci de cada letra por medio de _charCodeAt_, los cuales seran guarados en la variable _asciiCode_.
5. Con la varable _asciiCode_ rellenar la variable _asciiLetters_, usar _.push_.
6. Del array código ascii _asciiLetters_ obtenido moverse los lugares especificados y guardar en variable.
7. Sumar al código ascii 3 lugares, guardar en variable _movedAsciiCodeWithLoop_.
   * Si la ultima letra es Z/z usa _if_ para iniciar el conteo desde la 'a', primera letra
8. Obener con _.push_ un nuevo array donde se integraran todos los código ascii desplazados _movedAsciiCodeWithLoop_
9. Rellenar el string con los caracteres obtenidos después de la suma/movimiento usando _ String.fromCharCode()_ para convertir de código ascii a letras, guardar en variable _cipherString_.
10. Devolver el html el resultado de la funcion con  _cipherString_ mediante un _alert()_

Diagrama ![DiagramadeFlujo](https://www.lucidchart.com/publicSegments/view/82013d7c-42ee-4b40-ab06-47b0010c24f2/image.png)
Nota Personal: Quiero que de la posicion 97/a te muevas n espacios a la derecha y devuelvas el caracter que encuentres en esa posicion dentro del código ascii.  

# Tarjeta de crédito válida

## Planteamiento

Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn.

#### Consideraciones específicas

- [ ] El código debe estar compuesto por 1 función: isValidCard.
- [ ] El usuario no debe poder ingresar un campo vacío.

## Pseudocódigo

#### Función *isValidCard*
1. Pedir por medio de _prompt_ los 16 dígitos de la TDC.
  1.1 Validar que no ingrese '' o null (cancele)
  1.2 Validar que ingrese 16 dígitos
2. Guardar dígitos de la TDC en variable _numbersTDC_
3. Invertir el string obtenido y guardarlo en un array
4. Por medio de _indexOf_ y sando móduls % obtener los dígitos en el indice impar (par contando segun el algoritmo Luhn)
5. Guardar en variable _evenNumber_ como una objeto y los elementos en indices impares en variable _oddNumber_
6. Ingresar a propiedad del onjeto _evenNumber_
  6.1. Multipicar cada valor por 2
  6.2. Si el resultado es >= a 10 entonces sumar cada digito
  6.3. Si el resultado el < a 10 entonces no hacer nada
7. Sumar variable _evenNumber_ y _oddNumber_, guardar en variable _numberAdition_.
8. Obtener el módulo de 10 del resultado de _numberAdition_.
  8.1 Si el residuo es 0, hacer _alert (Tarjeta de crédito válida)_
  8.2 Si el residuo es diferente a 0, hacer _alert (Tarjeta de crédito NO válida)_

Diagrama

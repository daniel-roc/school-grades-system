/*
  ### Transformar notas escolares

  Crie um algoritmo que transforme as notas do sistemas numérico para sistema de notas em caracteres tipo A B C

  * de 90 para cima -   A
  * entre 80 - 89 -     B
  * entre 70 - 79 -     C
  * entre 60 - 69 -     D
  * menor que 60 -      F
 */

function gradeConversor(grade) {
  let result

  if (grade >= 90) {
    result = 'A'
  } else if (grade < 90 && grade >= 80) {
    result = 'B'
  } else if (grade < 80 && grade >= 70) {
    result = 'C'
  } else if (grade < 70 && grade >= 60) {
    result = 'D'
  } else {
    result = 'F'
  }

  return result
}

console.log(gradeConversor(95))

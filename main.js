/*
  ### Transformar notas escolares

  Crie um algoritmo que transforme as notas do sistemas numérico para sistema de notas em caracteres tipo A B C

  * de 90 para cima -   A
  * entre 80 - 89 -     B
  * entre 70 - 79 -     C
  * entre 60 - 69 -     D
  * menor que 60 -      F
 */

function gradeConversor(gradeNumber) {
  let gradeLetter

  if (gradeNumber >= 90) {
    gradeLetter = 'A'
  } else if (gradeNumber < 90 && gradeNumber >= 80) {
    gradeLetter = 'B'
  } else if (gradeNumber < 80 && gradeNumber >= 70) {
    gradeLetter = 'C'
  } else if (gradeNumber < 70 && gradeNumber >= 60) {
    gradeLetter = 'D'
  } else if (gradeNumber >= 0 && gradeNumber < 60) {
    gradeLetter = 'F'
  } else {
    gradeLetter = 'undefined'
  }

  return gradeLetter
}

function getGradeNumber() {
  let gradeNumber = document.getElementById('gradeNumberInput').value

  document.getElementById('gradeLetterOutput').innerHTML =
    gradeConversor(gradeNumber)
}

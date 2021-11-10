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
    gradeLetter = 'Invalid grade!'
  }

  return gradeLetter
}

function getGradeNumber() {
  let gradeNumber = document.getElementById('gradeNumberInput').value

  document.getElementById('gradeLetterOutput').innerHTML =
    gradeConversor(gradeNumber)
}

function resetValues() {
  document.getElementById('gradeNumberInput').value = ''
  document.getElementById('gradeLetterOutput').innerHTML = ''
}

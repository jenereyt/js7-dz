const students = ['Davlat', 'Feruz', 'Asad', 'Danya']
const name = prompt(students + ' кого хочешь кикнуть  ').trim()
const index = students.indexOf(name) 
if(index !== -1) {
  students.splice(index, 1)
alert(' Остались: ' + students)
} else {
  alert("не нашли")
}
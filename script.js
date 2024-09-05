let students = [];

function addStudent() {
  const studentInput = document.getElementById("studentInput");
  const student = studentInput.value.trim();
  if (student) {
    students.push(student);
    studentInput.value = "";
    displayStudents();
    studentInput.focus();
    showStudentsTitle();
  }
}

function displayStudents() {
  const studentsList = document.getElementById("studentsList");
  studentsList.innerHTML = "";
  students.forEach((student) => {
    const li = document.createElement("li");
    li.textContent = student;
    li.style.fontFamily = "Arial, sans-serif";
    studentsList.appendChild(li);
  });
}

function generateGroups() {
  if (students.length < 2) {
    alert("Debe ingresar al menos dos estudiantes.");
    return;
  }

  const groupsOutput = document.getElementById("groupsOutput");
  groupsOutput.innerHTML = "";

  const groupsHeaderText = document.createElement("h2");
  groupsHeaderText.textContent = "Los grupos son:";
  groupsHeaderText.className = "group-title";
  groupsOutput.appendChild(groupsHeaderText);

  const shuffledStudents = shuffleArray(students.slice());

  while (shuffledStudents.length >= 2) {
    const group = shuffledStudents.splice(0, 2);
    const groupText = group.join(", ");
    const groupDiv = document.createElement("div");
    groupDiv.textContent = groupText;
    groupDiv.style.fontFamily = "Arial, sans-serif";
    groupsOutput.appendChild(groupDiv);
  }

  if (shuffledStudents.length === 1) {
    const soloStudentOutput = document.createElement("div");
    soloStudentOutput.textContent = `El/La alumno ${shuffledStudents[0]} no tiene grupo.`;
    soloStudentOutput.style.fontFamily = "Arial, sans-serif";
    groupsOutput.appendChild(soloStudentOutput);
  }
}

function showStudentsTitle() {
  const studentsListDiv = document.getElementById("studentsListContainer");

  if (studentsListDiv.querySelector("h2")) return;

  const studentsHeaderText = document.createElement("h2");
  studentsHeaderText.textContent = "Alumnos ingresados:";
  studentsHeaderText.className = "title";
  studentsListDiv.insertBefore(
    studentsHeaderText,
    document.getElementById("studentsList")
  );
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

document.addEventListener("DOMContentLoaded", function () {
  const studentInput = document.getElementById("studentInput");
  const addButton = document.getElementById("addButton");

  studentInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addStudent();
    }
  });

  addButton.addEventListener("click", addStudent);
});

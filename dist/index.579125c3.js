const studentsList = document.getElementById("studentsList");
const btnEl = document.querySelector(".btn");
const closeBtnEl = document.querySelector(".close");
const modal = document.getElementById("modal");
const saveBtn = document.querySelector(".save");
const studentForm = document.getElementById("studentForm");
let docData;
let studentsData = [];
function openModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}
btnEl.addEventListener("click", openModal);
closeBtnEl.addEventListener("click", closeModal);
saveBtn.addEventListener("click", saveStudent);
function saveStudent() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;
    const faculty = document.getElementById("faculty").value;
    const courses = document.getElementById("courses").value;
    if (!name || !surname || !age || !course || !faculty || !courses) {
        alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430. \u041F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0437\u0430\u043F\u043E\u0432\u043D\u0438\u0442\u0438 \u0432\u0441\u0456 \u043F\u043E\u043B\u044F. \u0421\u043F\u0440\u043E\u0431\u0443\u0439 \u0449\u0435 \u0440\u0430\u0437");
        return;
    }
    const newStudent = {
        name,
        surname,
        age: parseInt(age),
        course,
        faculty,
        courses
    };
    studentsData.push(newStudent);
    const jsonData = JSON.stringify(studentsData);
    updateStudentsList();
    closeModal();
}
function updateStudentsList() {
    alert("\u0412\u0438 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0431\u0435\u0440\u0435\u0433\u043B\u0438 \u043D\u043E\u0432\u043E\u0433\u043E \u0443\u0447\u043D\u044F! \u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0437\u0430\u043A\u0440\u0438\u0442\u0438");
}
function loadData() {
    fetch("./students.json").then((response)=>response.json()).then((data)=>{
        studentsData = data;
        updateStudentsList();
    }).catch((error)=>console.error("Error fetching data:", error));
}
loadData();

//# sourceMappingURL=index.579125c3.js.map

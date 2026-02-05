let students = [];

function calculateGrade(marks) {
    if (marks >= 90) {
        return "A+";
    } else if (marks >= 80) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 50) {
        return "D";
    } else {
        return "F";
    }
}

function addStudent() {
    let name = document.getElementById("name").value.trim();
    let marks = parseInt(document.getElementById("marks").value);
    let rollNo = document.getElementById("rollNo").value.trim();

    if (name === "" || isNaN(marks) || marks < 0 || marks > 100 || rollNo === "") {
        alert("Please enter valid student details!");
        return;
    }

    let grade = calculateGrade(marks);

    // Add student object to array
    students.push({ rollNo: rollNo, name: name, marks: marks, grade: grade });

    displayStudents();

    // Clear input fields
    document.getElementById("rollNo").value = "";
    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
}

function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    // Loop through array to display students
    for (let i = 0; i < students.length; i++) {
        let row = `<tr>
                            <td>${students[i].rollNo}</td>
                            <td>${students[i].name}</td>
                            <td>${students[i].marks}</td>
                            <td>${students[i].grade}</td>
                          </tr>`;
        table.innerHTML += row;
    }
}
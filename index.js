
var students = [
];

function addStudent(event) {
  event.preventDefault();

  // Lấy giá trị từ form
  var name = document.getElementById('name').value;
  var studentCode = document.getElementById('studentCode').value;
  var email = document.getElementById('email').value;
  var department = document.getElementById('department').value;
  var gender = document.getElementById('gender').value;
  var birthDate = document.getElementById('birthDate').value;

  // Tạo đối tượng sinh viên mới
  var newStudent = {
    name: name,
    studentCode: studentCode,
    email: email,
    department: department,
    gender: gender,
    birthDate: birthDate,
  };

  students.push(newStudent);

  document.getElementById('myForm').reset();

  renderStudentList();
}

// Hàm để render danh sách sinh viên vào HTML
function renderStudentList() {
  var studentListDiv = document.getElementById('studentList');
  studentListDiv.innerHTML = '';

  // Tạo một bảng để hiển thị danh sách sinh viên
  var table = document.createElement('table');
  var headerRow = table.insertRow();
  var headers = ['Name', 'Student Code', 'Email', 'Department', 'Gender', 'Birth Date',];

  // Tạo header của bảng
  headers.forEach(function (headerText) {
    var header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
  });

  // Thêm các sinh viên vào bảng
  students.forEach(function (student) {
    var row = table.insertRow();
    Object.values(student).forEach(function (text) {
      var cell = row.insertCell();
      cell.textContent = text;
    });
  });

  studentListDiv.appendChild(table);
}

// Bắt sự kiện submit form để thêm sinh viên mới
document.getElementById('myForm').addEventListener('submit', addStudent);


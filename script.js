document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var course = document.getElementById('course').value;
    var graduationYear = document.getElementById('graduationYear').value;
    var dob = document.getElementById('dob').value;
  
    var submittedData = document.getElementById('submittedData');
    submittedData.innerHTML = `
      <h2>Submitted Data:</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone No:</strong> ${phone}</p>
      <p><strong>Course:</strong> ${course}</p>
      <p><strong>Year of Graduation:</strong> ${graduationYear}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
    `;
  });

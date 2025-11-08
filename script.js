$(document).ready(function() {
  $("#regForm").submit(function(e) {
    e.preventDefault(); // stop default submit

    let name = $("input[name='fullname']").val();
    let email = $("input[name='email']").val();
    let phone = $("input[name='phone']").val();
    let course = $("select[name='course']").val();

    if(name.length < 3){ alert("Name must be at least 3 characters"); return; }
    if(!/^\d{10}$/.test(phone)){ alert("Enter a valid 10-digit phone number"); return; }

    $("#output").html(`
      <h3>Application Submitted Successfully!</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Course:</strong> ${course}</p>
    `);

    $("#regForm")[0].reset();
  });
});
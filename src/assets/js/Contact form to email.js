function emailSend() {
  var firstName = document.getElementById("first_name").value;
  var lastName = document.getElementById("last_name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var service = document.getElementById("service").value;
  var zip = document.getElementById("zip-code").value;
  var message = document.getElementById("message").value;

  var messageBody = `This is a message from HandymanOfCapeCod Web Site: 
    <br/> Name: ${firstName} ${lastName}
    <br/> Phone: ${phone}
    <br/> Email: ${email}
    <br/> Service: ${service}
    <br/> ZipCode: ${zip}
    <br/> Message: ${message}`;

  Email.send({
    Host: "smtp25.elasticemail.com",
    Username: "handymanofcapecod@gmail.com",
    Password: "45F1D7F95796AD02132E11BB0490AB157D40",
    To: "handymanofcapecod@gmail.com",
    From: "handymanofcapecod@gmail.com",
    Subject: "This is the subject",
    Body: messageBody,
  }).then((message) => {
    if (message == "OK") {
      swal("Successful", "Message Sent!", "success");
    } else {
      swal("Error", "Not sent", "error");
    }
  });
}

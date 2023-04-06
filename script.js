function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (name == "" || email == "" || subject == "" || message == "") {
        alert("Please fill in all fields.");
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}
// document.querySelector('.php-email-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     var form = document.querySelector('.php-email-form');
//     var formData = new FormData(form);

//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', form.getAttribute('action'));
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 form.reset();
//                 document.querySelector('.sent-message').classList.add('d-block');
//             } else {
//                 document.querySelector('.error-message').classList.add('d-block');
//             }
//             document.querySelector('.loading').classList.remove('d-block');
//         }
//     };
//     xhr.send(formData);

//     document.querySelector('.loading').classList.add('d-block');
// });

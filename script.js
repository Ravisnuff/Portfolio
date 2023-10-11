

const scriptURL = 'https://script.google.com/macros/s/AKfycbxZT5jA3HvvIjuz7on7C-vyqdKi0PKiOwC95vV0nU4Zy8hA-zFSEPxWKmYnzqJz-2ec/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
e.preventDefault();
const msg = document.getElementById('msg'); // Get the msg element

// Your existing code for form submission
fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // Display success message
            msg.style.display = "block"; // Set display to "block"

            // Reset message and form after a delay
            setTimeout(function() {
                msg.style.display = "none"; // Set display back to "none"
                form.reset();
            }, 1000);
        })
        .catch(error => console.error('Error!', error.message))
});

function up(){
    const ty=document.getElementById("us2");
    ty.classList.add("pl");
}
function down(){
    const py=document.getElementById("us2");
    py.classList.remove("pl");
}
function up1(){
    const ty=document.getElementById("us1");
    ty.classList.add("pl");
}
function down1(){
    const py=document.getElementById("us1");
    py.classList.remove("pl");
}
function up2(){
    const ty=document.getElementById("pass1");
    ty.classList.add("pl");
}
function down2(){
    const py=document.getElementById("pass1");
    py.classList.remove("pl");
}


function up3(){
    const ty=document.getElementById("text123");
    ty.classList.add("pp");
}
function down3(){
    const py=document.getElementById("text123");
    py.classList.remove("pp");
}



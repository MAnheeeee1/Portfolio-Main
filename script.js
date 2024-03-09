const contactButton = document.getElementById("contact-btn");
const dialog = document.querySelector("dialog");
const closeDialog = document.getElementById("close-dialog");
contactButton.onclick = function (){
    dialog.show()
}
closeDialog.onclick = function (){
    dialog.close();
}

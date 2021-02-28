//Get the element
var buttonForm = document.getElementById("button-submit");
var email = document.getElementById("email");
var textAlarm = document.getElementById("text-alarm");

//Add eventListener click button
buttonForm.addEventListener("click", function(e){

    e.preventDefault();   
    
    showAlert();
    
})

// Add eventListener keyup input 
email.addEventListener("keyup", function(){

    showAlert();

})

//Function validate email

function showAlert(){

    if(email.value === ""){
        email.classList.add("text-alarm-icon");
        textAlarm.innerHTML = "Please provide a valid E-mail";   
        textAlarm.style.display = 'block';       
    }else{
        email.classList.remove("text-alarm-icon");   
        textAlarm.style.display = 'none';   
    } 

}
//your JS code here. If required.

const username = document.getElementById("username"); 
const Password = document.getElementById("password"); 
const checkbox = document.getElementById("checkbox"); 
const submit = document.getElementById("submit"); 


submit .addEventListener("click",(e)=>{
  e.preventDefault();

if(checkbox.checked){
   localStorage.setItem("username",username.value);
   localStorage.setItem("password",Password.value);
alert(`Logged in as ${username.value}`);
}else{
   localStorage.removeItem("username");
    localStorage.removeItem("password");
    alert(`Logged in as ${username.value} (credentials not saved)`);
}

const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if(savedUsername && savedPassword){
  const existingBtn = document.getElementById("existing");
   existingBtn.hidden = false;

    existingBtn.addEventListener("click", () => {
  const savedUsername = localStorage.getItem("username");
  alert(`Logged in as ${savedUsername}`);
});
}
});

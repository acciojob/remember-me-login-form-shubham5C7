const username = document.getElementById("username");
    const password = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const submit = document.getElementById("submit");
    const existingBtn = document.getElementById("existing");

  
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
      existingBtn.hidden = false;
    }

    
    submit.addEventListener("click", (e) => {
      e.preventDefault();
      if (checkbox.checked) {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
        existingBtn.hidden = false;
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingBtn.hidden = true;
      }
     
      alert(`Logged in as ${username.value}`);
    });

    // existing user button
    existingBtn.addEventListener("click", () => {
      const savedUsername = localStorage.getItem("username");
      alert(`Logged in as ${savedUsername}`);
    });




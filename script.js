const signUp = e => {

// get input values in to the variable
    let fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;



    let formData = JSON.parse(localStorage.getItem('formData'));
    
    // let local = JSON.parse(localStorage.getItem('formData'));
    
    let exist = formData.some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() && 
            data.lname.toLowerCase() == lname.toLowerCase()
        );

    // check condition

    if(!exist){
     
        formData.push({ fname, lname, email, pwd });
       
        localStorage.setItem('formData', JSON.stringify(formData));
       
        // document.querySelector('form').reset();
       
        // document.getElementById('fname').focus();
       
        location.href = "./signin.html";
        alert("Account Created.\n\nReEnter your Username and Password");

    }
    else{
        alert("Sry already you have same Username and Email.");
    }
    e.preventDefault();
}

function signIn(e) {
    
    let fname = document.getElementById('fname').value;
    
    let pwd = document.getElementById('pwd').value;

    let formData = JSON.parse(localStorage.getItem('formData'));

    let exist = formData.some(data =>
         data.fname.toLowerCase() == fname && 
         data.pwd.toLowerCase() == pwd
         
         );

    if(!exist){
        alert("Incorrect login.Please check your Password or Username");
    }
    else{
    // correct username and password direct login home page
        location.href = "./home.html"
        alert("Welcome To Home Page");
    }
    e.preventDefault();
}







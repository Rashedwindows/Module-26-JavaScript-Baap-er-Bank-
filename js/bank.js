// get user email
document.getElementById('login-submit').addEventListener('click',function(){

   const emailField = document.getElementById('user-email');
   const userEmail = emailField.value;
//    console.log(userEmail); (check only)

//    get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword); (check only)


    // check user valid email and password
    
    if(userEmail == 'ariyan@gmail.com' && userPassword =='secret'){
        
        // redirect to other page if valid password

        window.location.href = 'other-banking-page(addtofirstpage).html'
    }
    
})




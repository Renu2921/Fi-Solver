let submit=document.querySelector("#submit");
 let reset=document.querySelector("#reset");

let password=document.querySelector("#password");
let confirmPassword=document.querySelector("#confirmPassword");

const msg = document.querySelector('#msg');
  
//   alert("hiii");


function matchPassword(){
    let a=password.value;
let b=confirmPassword.value;

console.log(a,b);
    if(a===b){

        var url='home.html';
        window.open(url, '_blank');
        localStorage.setItem("Password",a);    
      localStorage.setItem("confirmPassword",b);  
    }
    else{
        alert("password do not match");
        msg.textContent = 'Passwords do not match';
        
    }
};

submit.addEventListener("click",()=>{
    matchPassword();
   
});
 
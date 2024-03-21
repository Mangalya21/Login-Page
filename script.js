const database = [{username: "mangalya",
                   password: "mangalya"},
                
                  {username: "lekhan",
                   password: "lekhan"},
                
                   {username: "kartik",
                   password: "kartik"},
                
                   {username: "kush",
                   password: "kush"},
                
                   {username: "yaawar",
                   password: "yaawar"},
                
                   {username: "mihir",
                   password: "mihir"}];

const userNameElement = document.getElementById('userName');
const passwordElement = document.getElementById('password');


function validate(){
    const username = userNameElement.value;
    const password = passwordElement.value;
    if(database.some(person => person.username === username)){
        if(database.some(person => person.password === password)){
            alert("Username and password are correct!!!");
            window.open("loggedin.html");
        }else{
            alert("Password is incorrect");
        }
    }else{
        alert("Username is incorrect");
    }    
}
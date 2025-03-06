console.log("first")

let fetchbtn = document.getElementById('fetch');
fetchbtn.addEventListener('click',handler1);

let backup = document.getElementById('backup');
backup.addEventListener('click',handler2);

const name = document.getElementById('name');
const age = document.getElementById('age');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById
('address');
const submit = document.getElementById('submit');

function handler(){

    console.log("You have clicked the fetchbtn");
    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);//true means fetch the data asynchronously

    //progress (optional)

    xhr.onprogress = function(){
        console.log("On progress");
    }
    xhr.onload = function(){
        console.log(this.response);
    }
    //you have tosend the request
    xhr.send();
}

// post 

function handler1(){
    console.log("You have clicked the fetchbtn");
    const xhr = new XMLHttpRequest();

    xhr.open('POST','https://jsonplaceholder.typicode.com/posts',true);//true means fetch the data asynchronously
    xhr.getResponseHeader('Content-type','appliction/json')
    //progress (optional)

    const data = {
        "userId": "2",
        "id": "18",
        "title": "voluptate et itaque vero tempora molestiae",
        "body": {
            "name": "Neha",
            "age": "21"
        }
    }

    xhr.onprogress = function(){
        console.log("On progress");
    }
    xhr.onload = function(){
        console.log(this.response);
    }
    //you have tosend the request
    xhr.send(data);
}


function handler2(){
    console.log("You have clicked the backupbtn");
}
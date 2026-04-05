
function scrollToSection(id){

document.getElementById(id).scrollIntoView({
behavior:"smooth"
});

}

function applyJob(){

alert("Application Submitted Successfully!");

}

function searchJobs(){

let job=document.getElementById("jobInput").value.toLowerCase();
let location=document.getElementById("locationInput").value.toLowerCase();

let cards=document.querySelectorAll(".job-card");

cards.forEach(card=>{

let title=card.dataset.title;
let loc=card.dataset.location;

if(
(title.includes(job) || job=="") &&
(loc.includes(location) || location=="")
){
card.style.display="block";
}
else{
card.style.display="none";
}

});

}

function uploadResume(){

let file=document.getElementById("resumeFile").files[0];

if(!file){
alert("Please select a file");
return;
}

document.getElementById("resumeMsg").innerText="Resume uploaded successfully!";

}

function login(){

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(user==="admin" && pass==="1234"){
document.getElementById("loginMsg").innerText="Login Successful!";
}
else{
document.getElementById("loginMsg").innerText="Invalid Username or Password";
}

}
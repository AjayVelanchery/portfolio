function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_kjj3tal";
    const templateId = "template_nrw6xp6";

    emailjs.send(serviceID, templateId, params)
    .then(res => {
       
        document.getElementById("name").value = "";
        document.getElementById("email").value = ""; 
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message was sent successfully!");
    })
    .catch(err => console.log(err));
}


function toggleMenu(){
    var menuToggle=document.querySelector('.toggle');
    var menu=document.querySelector('.menu');
  
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}



const sr=ScrollReveal({

    origin:'top',
    distance:'85px',
    duration:2000,
    reset:true
})

sr.reveal('.home-text',{})
    sr.reveal('.homeimg',{delay:200})
    sr.reveal('.social',{delay:200})


sr.reveal('.about-img',{})
sr.reveal('.heading',{})
sr.reveal('.about-text',{delay:200})

sr.reveal('.skill',{delay:200})
sr.reveal('.project-content',{delay:200})

sr.reveal('.contact-form',{delay:200})



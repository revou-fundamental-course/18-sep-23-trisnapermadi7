let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".image");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 2000); // Ganti gambar setiap 2 detik (2000ms)
}

showSlides();

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const interest=document.getElementById("mySelect").value;
    if (name === "") {
        alert("Nama harus diisi.");
        return false;
    }

    if (email === "") {
        alert("Email harus diisi.");
        return false;
    }
    if(interest === "Select option"){
        alert("Isi Hobi");
        return false;
    }

    
    return true; 
}


const form = document.getElementById("myForm");
form.addEventListener("submit", function (e) {
    if (!validateForm()) {
        e.preventDefault(); 
    }
    
});


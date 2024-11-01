function adoptPetWithReceipt(petName) {
    const receiptSection = document.getElementById('receipt');
    const receiptText = document.getElementById('receipt-text');
    receiptText.textContent = `Congratulations! You have adopted a ${petName}. Enjoy your new magical companion!`;
    receiptSection.style.display = 'block';
}

function adoptPet(petName, petImage) {
    // Display the adoption confirmation section
    const confirmationSection = document.getElementById("adoption-confirmation");
    confirmationSection.classList.remove("hidden");

    // Set the adoption message and image
    const adoptionMessage = document.getElementById("adoption-message");
    const adoptedPetPhoto = document.getElementById("adopted-pet-photo");

    adoptionMessage.textContent = `You have successfully adopted a ${petName}!`;
    adoptedPetPhoto.src = petImage;
}
document.getElementById("animateButton").addEventListener("click", function() {
    const unicornDog = document.getElementById("unicornDog");
    unicornDog.classList.toggle("shake");

    // Optional: reset the animation after a certain time
    setTimeout(() => {
        unicornDog.classList.remove("shake");
    }, 1000);
});

document.getElementById("contact-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
});

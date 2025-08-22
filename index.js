const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
    menuBtn.classList.toggle("active"); // switches icons
});


const askedQuestion = document.querySelectorAll('.faq-question');

askedQuestion.forEach((button) => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
    });
});
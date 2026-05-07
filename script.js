// Відкриття та закриття мобільного меню (гамбургер)
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Функція розгортання історії
const readMoreBtn = document.getElementById('readMoreBtn');
const franchiseHidden = document.getElementById('franchiseHidden');

if (readMoreBtn && franchiseHidden) {
    readMoreBtn.addEventListener('click', () => {
        franchiseHidden.classList.toggle('show');
        if (franchiseHidden.classList.contains('show')) {
            readMoreBtn.textContent = 'Read Less';
            readMoreBtn.classList.add('expanded');
        } else {
            readMoreBtn.textContent = 'Read More';
            readMoreBtn.classList.remove('expanded');
        }
    });
}

// Функція для показу повідомлення
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Показуємо повідомлення
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Приховуємо через 4 секунди
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Перевірка (валідація) контактної форми
document.querySelector('.submit-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Зупиняємо стандартне відправлення
    
    let email = document.querySelector('.email-input').value;
    let message = document.querySelector('.message-input').value;

    if (email === "" || message === "") {
        showNotification("Please fill in all fields!", 'error');
    } else if (!email.includes("@")) {
        showNotification("Please enter a valid email address!", 'error');
    } else {
        showNotification("Thank you! Your message has been sent.", 'success');
        document.querySelector('.email-input').value = "";
        document.querySelector('.message-input').value = "";
    }
});
// Загружаем шапку и футер на каждую страницу
document.addEventListener('DOMContentLoaded', function() {
    // Вставляем шапку
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            const headerPlaceholder = document.createElement('div');
            headerPlaceholder.innerHTML = data;
            document.body.prepend(headerPlaceholder);

            // Инициализируем модальное окно (если нужно)
            initModal();
        });

    // Вставляем футер
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const footerPlaceholder = document.createElement('div');
            footerPlaceholder.innerHTML = data;
            document.body.appendChild(footerPlaceholder);
        });
});

// Функция для модального окна (если была в исходном коде)
function initModal() {
    const modal = document.getElementById('callbackModal');
    if (modal) {
        document.querySelectorAll('[onclick="openCallbackModal()"]').forEach(btn => {
            btn.onclick = () => modal.style.display = 'block';
        });
        document.querySelector('.close-modal').onclick = () => modal.style.display = 'none';
        window.onclick = (event) => {
            if (event.target === modal) modal.style.display = 'none';
        };
    }
}
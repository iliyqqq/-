// Исходный массив объектов с карточками
let places = [
    { 
        title: "Зал №1", 
        description: "Для баскетбола", 
        image: "https://via.placeholder.com/300x200?text=Зал+1" 
    },
    { 
        title: "Зал №2", 
        description: "Для волейбола", 
        image: "https://via.placeholder.com/300x200?text=Зал+2" 
    }
];

// Функция для отрисовки всех карточек
function renderCards() {
    let container = document.getElementById("cardsContainer");
    container.innerHTML = ""; // Очищаем контейнер
    
    // Для каждого элемента в массиве создаем карточку
    places.forEach((place, index) => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${place.image}" alt="${place.title}">
            <h3>${place.title}</h3>
            <p>${place.description}</p>
            <button onclick="deleteCard(${index})">Удалить</button>
        `;
        container.appendChild(card);
    });
}

// Функция для добавления новой карточки
function addPlace() {
    // Получаем значения из полей ввода
    let title = document.getElementById("titleInput").value;
    let description = document.getElementById("descriptionInput").value;
    let image = document.getElementById("imageInput").value;
    
    // Проверяем, что все поля заполнены
    if (!title || !description || !image) {
        alert("Пожалуйста, заполните все поля!");
        return;
    }
    
    // Добавляем новый объект в массив
    places.push({ 
        title, 
        description, 
        image 
    });
    
    // Очищаем поля формы
    document.getElementById("titleInput").value = "";
    document.getElementById("descriptionInput").value = "";
    document.getElementById("imageInput").value = "";
    
    // Перерисовываем карточки
    renderCards();
}

// Функция для удаления карточки
function deleteCard(index) {
    places.splice(index, 1); // Удаляем элемент из массива
    renderCards(); // Перерисовываем карточки
}

// Инициализация - отрисовка карточек при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    renderCards();
});

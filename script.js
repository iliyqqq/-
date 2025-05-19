// Начальные данные меню
let menuItems = [
    "Молочный коктейль",
    "Смузи",
    "Захват"
];

// Функция для отрисовки меню
function renderMenu() {
    const menuContainer = document.getElementById('menuContainer');
    menuContainer.innerHTML = '';

    menuItems.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <button class="delete-btn" onclick="deleteItem(${index})">×</button>
            <h3>${item}</h3>
        `;
        menuContainer.appendChild(menuItem);
    });
}

// Функция добавления нового пункта
function addItem() {
    const itemNameInput = document.getElementById('itemName');
    const newItem = itemNameInput.value.trim();

    if (newItem) {
        menuItems.push(newItem);
        itemNameInput.value = '';
        renderMenu();
    } else {
        alert('Пожалуйста, введите название позиции');
    }
}

// Функция удаления пункта
function deleteItem(index) {
    if (confirm('Вы уверены, что хотите удалить этот пункт из меню?')) {
        menuItems.splice(index, 1);
        renderMenu();
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    renderMenu();
});

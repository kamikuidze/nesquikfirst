document.addEventListener('DOMContentLoaded', function() {
    // Начальные значения
    let score = 0;            // Текущий счет
    let clickValue = 1;       // Сколько очков дается за один клик
    let isAutoClickerOn = false; // Включен ли автокликер

    // Элементы интерфейса
    const scoreElement = document.getElementById('score');           // Элемент для отображения счета
    const clickButton = document.getElementById('clickButton');      // Кнопка клика (монетка)
    const nesquikUpgrade = document.getElementById('nesquikUpgrade');// Кнопка улучшения "Несквик"
    const beerUpgrade = document.getElementById('beerUpgrade');      // Кнопка улучшения "Пиво"

    // Стоимость улучшений
    const nesquikCost = 10;   // Стоимость Несквика
    const beerCost = 50;      // Стоимость Пива (автокликера)

    // Обновление интерфейса с текущим счетом
    function updateScore() {
        scoreElement.textContent = 'Score: ' + score;
    }

    // Обработчик клика на кнопку монетки
    clickButton.addEventListener('click', function() {
        score += clickValue;  // Увеличиваем счет на текущее значение клика
        updateScore();        // Обновляем отображение счета
    });

    // Обработчик улучшения "Несквик" (+1 за клик)
    nesquikUpgrade.addEventListener('click', function() {
        if (score >= nesquikCost) {
            score -= nesquikCost; // Списываем очки за покупку
            clickValue += 1;      // Увеличиваем значение клика
            updateScore();        // Обновляем счет
            nesquikUpgrade.classList.add('disabled'); // Делаем кнопку неактивной после покупки
            nesquikUpgrade.disabled = true;           // Отключаем возможность повторного клика
        }
    });

    // Обработчик улучшения "Пиво" (автокликер)
    beerUpgrade.addEventListener('click', function() {
        if (score >= beerCost && !isAutoClickerOn) {
            score -= beerCost;    // Списываем очки за покупку
            updateScore();        // Обновляем счет
            beerUpgrade.classList.add('disabled'); // Делаем кнопку неактивной после покупки
            beerUpgrade.disabled = true;           // Отключаем возможность повторного клика
            isAutoClickerOn = true;                // Включаем автокликер

            // Запускаем автокликер: прибавляем очки каждые 1000 мс (1 секунда)
            setInterval(function() {
                score += clickValue;
                updateScore();
            }, 1000); // 1 клик в секунду
        }
    });

    // Начальное обновление счета при загрузке страницы
    updateScore();
});

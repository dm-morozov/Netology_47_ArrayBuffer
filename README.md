# Netology_47_ArrayBuffer: Контейнеры и ArrayBuffer

[![Build status](https://ci.appveyor.com/api/projects/status/5p9b4te9g5ent4gk?svg=true)](https://ci.appveyor.com/project/dm-morozov/netology-47-arraybuffer)
![Netology](https://img.shields.io/badge/Netology-JavaScript-blue)
![Jest Coverage](https://img.shields.io/badge/Покрытие-100%25-brightgreen)

## 📖 Описание

Этот проект создан в рамках домашнего задания к лекциям [«Контейнеры» и «ArrayBuffer» курса JavaScript от Нетологии](./README_for_Netology.md). Реализованы задачи по использованию математической логики (`Math`), контейнеров (`Set`), валидации и работы с бинарными данными через `ArrayBuffer`. Код проходит ESLint без ошибок, тесты обеспечивают 100% покрытие по строкам.

**Цели**:
- Реализовать классы `Character`, `Magician`, `Daemon`, `Team`, `ErrorRepository`, `ArrayBufferConverter` и другие.
- Обеспечить 100% покрытие тестами с помощью Jest.
- Интегрировать решения в игровой проект с демонстрацией в консоли.

## 🛠 Что сделано

### 1. `Math (log/trig)`: Классы `Character`, `Magician`, `Daemon`
- **Задача**: Управление атакой магических персонажей с учётом расстояния и эффекта «дурман».
- **Реализация**:
  - Базовый класс `Character` с валидацией имени и типа, методами `levelUp`, `damage`, `orderByProps`, `getSpecialAttack`.
  - Промежуточный класс `MagicalCharacter` для `Magician` и `Daemon` с геттерами/сеттерами `attack`, `stoned`, `distance`.
  - Логика атаки:
    - Линейное уменьшение: 100% на 1 клетке, 90% на 2-й, ..., 60% на 5-й.
    - Эффект «дурман» (`stoned = true`): уменьшение атаки на `Math.log2(расстояние) * 5`.
  - Классы `Magician` и `Daemon` наследуются от `MagicalCharacter`, задают `attack = 10`, `defence = 40`.
  - Тесты: `Character.test.js`, `MagicalCharacter.test.js` (100% покрытие).
- **Интеграция**: Демонстрация атаки в `index.js` (например, `Magician` на расстоянии 2: 9 без дурмана, 4 с дурманом).

### 2. `Set`: Класс `Team`
- **Задача**: Управление уникальными персонажами в команде.
- **Реализация**:
  - Класс `Team` использует `Set` для хранения объектов `Character`.
  - Методы: `add` (с ошибкой при дублировании), `addAll` (без ошибок), `toArray`.
  - Тесты: `Team.test.js` (100% покрытие).
- **Интеграция**: Добавление персонажей в команду с выводом в консоль.

### 3. `ArrayBuffer`: Класс `ArrayBufferConverter`
- **Задача**: Преобразование бинарных данных (`ArrayBuffer`) в строку и объект JSON.
- **Реализация**:
  - Класс `ArrayBufferConverter` с методами `load`, `toString`, `convertString`.
  - `load(buffer)`: сохраняет `ArrayBuffer` и сбрасывает предыдущую строку.
  - `toString()`: конвертирует буфер в строку через `Uint16Array`, выбрасывает ошибку, если буфер не загружен.
  - `convertString()`: парсит строку в объект JSON, автоматически вызывает `toString` при необходимости.
  - Обрабатывает краевые случаи: пустой буфер, некорректный JSON.
  - Тесты: `ArrayBufferConverter.test.js` (100% покрытие).
- **Интеграция**: Преобразование буфера в строку и объект JSON с выводом в консоль (`index.js`).

### 4. Дополнительные задачи
- **Валидация**:
  - Класс `Validator` для проверки имени персонажа (2–10 символов).
  - Класс `PhoneValidator` для проверки телефонных номеров.
  - Тесты: `Validator.test.js`, `PhoneValidator.test.js` (100% покрытие).
- **Обработка ошибок**:
  - Класс `ErrorRepository` для перевода кодов ошибок в сообщения.
  - Тесты: `ErrorRepository.test.js` (100% покрытие).
- **Сортировка свойств**:
  - Метод `orderByProps` в `Character` для сортировки свойств по заданному порядку и алфавиту.
  - Тесты: `orderByProps.test.js` (100% покрытие).
- **Специальные атаки**:
  - Метод `getSpecialAttack` в `Character` для обработки массива специальных атак с дефолтным описанием.
  - Тесты: `getSpecialAttack.test.js` (100% покрытие).
- **Настройки**:
  - Класс `Settings` для управления игровыми настройками через `Map`.
  - Тесты: `Settings.test.js` (100% покрытие).

## 📚 Чему научились

- **Математическая логика**:
  - Использование `Math.log2` для эффекта «дурман».
  - Линейное уменьшение атаки по расстоянию.
- **ООП**:
  - Наследование (`Character` → `MagicalCharacter` → `Magician`/`Daemon`).
  - Геттеры/сеттеры для управления атакой, расстоянием, дурманом.
- **Контейнеры**:
  - Использование `Set` для уникальных персонажей в `Team`.
  - Использование `Map` для хранения настроек в `Settings`.
- **Бинарные данные**:
  - Работа с `ArrayBuffer` и `Uint16Array` для преобразования байтов в строку и JSON.
- **Валидация**:
  - Проверка имени персонажа и телефонных номеров через регулярные выражения.
- **Тестирование**:
  - Unit-тесты с Jest для 100% покрытия по строкам.
  - Проверка всех веток, включая ошибки и краевые случаи.
- **Инструменты**:
  - Webpack для сборки.
  - ESLint (Airbnb) для стиля кода.
  - Babel для совместимости.
  - AppVeyor для непрерывной интеграции (CI).

## 🚀 Инструкции по запуску

1. **Клонируйте репозиторий**:
   ```bash
   git clone https://github.com/dm-morozov/Netology_47_ArrayBuffer.git
   cd Netology_47_ArrayBuffer
   ```

2. **Установите зависимости**:
   ```bash
   npm install
   ```

3. **Проверьте код**:
   - Линтер:
     ```bash
     npm run lint
     npm run lint:fix
     ```
   - Тесты:
     ```bash
     npm run test
     npm run test -- --coverage
     ```

4. **Запустите проект**:
   ```bash
   npm start
   ```
   Откройте `http://localhost:8080`, проверьте консоль (F12) для вывода результатов:
   - Преобразование `ArrayBuffer` в строку и объект JSON.
   - Атака `Magician` и `Daemon` с учётом расстояния и дурмана.
   - Управление командой через `Team`.
   - Перевод ошибок через `ErrorRepository`.

## 🛠 Технологии

- **JavaScript (ES6+)**: Классы, наследование, `Set`, `Map`, `Math`, `ArrayBuffer`.
- **Webpack**: Сборка проекта.
- **Jest**: Тестирование с 100% покрытием.
- **ESLint**: Проверка стиля (Airbnb).
- **Babel**: Совместимость кода.
- **AppVeyor**: Непрерывная интеграция (CI).

## 📧 Контакты

Если возникнут вопросы, пишите:
- ![LinkedIn](./svg/linkedin-icon.svg) [LinkedIn](https://www.linkedin.com/in/dm-morozov/)
- ![Telegram](./svg/telegram.svg) [Telegram](https://t.me/dem2014)
- ![GitHub](./svg/github-icon.svg) [GitHub](https://github.com/dm-morozov/)
# React + CSS Modules + Webpack

## Getting Started

- `npm install`
- `npm start`
- `open http://localhost:3000`

## Bundling

```
npm run build-prod
```
npm start
```


Тестовое задание React.js/Node.js:
Разработать приложение которое будет состоять с трех небольших страниц:
1. Главная страница
2. Страница со списком пользователей
3. Страница пользователя

Описание функционала и этапов работы

Back-end (Node.js, SQLlite):
- данные представляют собой список пользователей (файл users.json) и
статистику пользования сайтом (файл users_statistic.json)
- написать скрипт который при инициализации приложения будет проверять есть
ли нужные таблицы для работы в базе SQLlite и если нет, то будет создавать
таблицы и добавлять в них данные с файлов
- разработать функционал выборки списка пользователей и информации о них
(таблица users и таблица users_statistic (для выгрузки информации total_clicks и
total_page_views)) с постраничной навигацией (количество пользователей и
текущая страница приходит в запросе с Front-end)
- разработать функционал выборки данных статистики (таблица users_statistic)
по id пользователя с возможностью фильтрации по дате (“от” и “до” приходит в
запросе)
- все данные которые приходят с Front-end должны валидироваться на
соответствие формату (дата, число)
Front-end (React):
Главная страница:
- сверстать главную страницу приложения по макету (ссылка ниже)
Страница списка пользователей:
- создать страницу списка пользователей, на которой будет размещена таблица
со списком пользователей и информацией о них, полученная с API (поля
которые должны быть в таблице: id, first_name, last_name, email, gender,
ip_address, total_clicks, total_page_views)
- на странице должна быть реализована постраничная навигация
- максимальное количество пользователей на странице 50
- при нажатии на строку в таблице происходит переход на страницу
пользователя (пример роута /user/:id)

Страница пользователя:
- на странице пользователя должна отображаться две диаграммы со статистикой
пользователя по полям page_views и clicks
- статистика пользователя должна отображаться в виде линейной диаграммы.
- если в данных пользователя отсутствует значение за какую-то дату, это значит
page_views и clicks отсутствовали в этот день и они равны 0
- по умолчанию выводится статистика за неделю, но должна быть предусмотрена
возможность выбора промежутка “от” и “до”.

Требования к выполнению

Для навигации по страницам использовать React-роутинг
Для работы со стилями использовать препроцессор SCSS
Страницы должны быть адаптивными
Код разместить на github
Ссылки с тестовыми наборами:
Пользователи:
https://drive.google.com/open?id=1Mnt53fYM_JNsUQgzh7nfsvUjuBAWmh9f

Данные по статистике:
https://drive.google.com/open?id=10XCbjQ1QvdFTsOP5kXpmoXOZIqYVT_1K

Макеты:
https://www.figma.com/file/LpWuCx7YkPctSdSVwAKflI/Untitled?node-id=0%3A1

для просмотра стилей и экспорта изображений нужно зарегистрироваться в figma

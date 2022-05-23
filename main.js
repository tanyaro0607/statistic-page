const INCIDENTS = [
  {
    name: 'Андрей Иванов',
    incidents: {hard: '50', middle: '18', good: '31'}
  },
  {
    name: 'Михаил Вешкин', 
    incidents: {hard: '47', middle: '24', good: '0'}
  },
  {
    name: 'Семен Измайлов', 
    incidents: {hard: '32', middle: '0', good: '12'}
  },
  {
    name: 'Николай Островский', 
    incidents: {hard: '11', middle: '7', good: '0'}
  },
  {
    name: 'Константин Константинопольский', 
    incidents: {hard: '50', middle: '18', good: '31'}
  },
  {
    name: 'Александр Овчинников', 
    incidents: {hard: '50', middle: '18', good: '31'}
  }
];

const CATEGORY_SITES = [
  {
    category: 'Поисковики', 
    incidents: {value: '1257', difference: '+3%'}
  },
  {
    category: 'Новостные порталы', 
    incidents: {value: '1129', difference: '-2.1%'}
  },
  {
    category: 'Развлекательные', 
    incidents: {value: '987', difference: '+7%'}
  },
  {
    category: 'Категория с длинным названием, которая обрезается по ширине...', 
    incidents: {value: '596', difference: '-3%'}
  },
  {
    category: 'Игры', 
    incidents: {value: '431', difference: '+1%'}
  },
  {
    category: 'Форумы', 
    incidents: {value: '147', difference: '+2%'}
  }
];

const DISCIPLINE = [
  {
    date: '20.04',
    entry: { time: '08:07', difference: '+7мин'},
    exit: { time: '16:55', difference: '-5мин'},
    duration: '07:48'
  },
  {
    date: '19.04',
    entry: { time: '07:56', difference: '-4мин'},
    exit: { time: '16:56', difference: '+4мин'},
    duration: '08:00'
  },
  {
    date: '18.04',
    entry: { time: '09:30', difference: '+1ч 30мин'},
    exit: { time: '18:30', difference: '+1ч 30мин'},
    duration: '08:00'
  },
  {
    date: '17.04',
    entry: { time: '08:47', difference: '+47мин'},
    exit: { time: '17:47', difference: '+47мин'},
    duration: '08:00'
  },
  {
    date: '16.04',
    entry: { time: '08:12', difference: '+12мин'},
    exit: { time: '16:55', difference: '-5мин'},
    duration: '07:43'
  },
  {
    date: '14.04',
    entry: { time: '08:00', difference: ' '},
    exit: { time: '16:57', difference: '-3мин'},
    duration: '07:57'
  }
];


document.querySelector('.statistics-wrapper-one').innerHTML = `
  <table class="statistics-table">
    <caption class="statistics-table-title">Пользователи по инцидентам</caption>
      <tr class="statistics-table-name">
        <th nowrap>Пользователь</th>
        <th colspan="3" nowrap>Инциденты</th>
      </tr>
      ${INCIDENTS.map((item) => `
      <tr class="statistics-table-row statistics-table-one">
        <td nowrap>${item.name}</td>
        <td>${item.incidents.hard}</td>
        <td>${item.incidents.middle}</td>
        <td>${item.incidents.good}</td>
      </tr>
    `).join('')}
  </table>
`

document.querySelector('.statistics-wrapper-two').innerHTML = `
  <table class="statistics-table">
    <caption class="statistics-table-title">Категории сайтов</caption>
      <tr class="statistics-table-name">
        <th nowrap>Категория</th> 
        <th colspan="2" nowrap>Колличество инцидентов</th>
      </tr>
      ${CATEGORY_SITES.map((item) => `
      <tr class="statistics-table-row statistics-table-two">
        <td nowrap>${item.category}</td>
        <td nowrap>${item.incidents.value}</td>
        <td class="statistics-table-difference" nowrap>${item.incidents.difference}</td>
      </tr>
    `).join('')}
  </table>
`

document.querySelector('.statistics-wrapper-three').innerHTML = `
  <table class="statistics-table">
      <caption class="statistics-table-title">Дисциплина</caption>
        <tr class="statistics-table-name" nowrap>
          <th nowrap>Дата</th>
          <th colspan="2" nowrap>Приход</th>
          <th colspan="2" nowrap>Уход</th>
          <th nowrap>Рабочее время</th>
        </tr>
      ${DISCIPLINE.map((item) => `
      <tr class="statistics-table-row statistics-table-three" nowrap>
        <td nowrap>${item.date}</td>
        <td nowrap>${item.entry.time}</td>
        <td class="statistics-table-time statistics-table-time--positive" nowrap>${item.entry.difference}</td>
        <td nowrap>${item.exit.time}</td>
        <td class="statistics-table-time statistics-table-time--negative" nowrap>${item.exit.difference}</td>
        <td nowrap>${item.duration}</td>
      </tr>
    `).join('')}
  </table>
`

//+ Должен быть скрипто по добавлению класса с цветом кружка у значения инцидента
// и скрипт по смене цвета шрифта в поле Приход / Уход / Рабочее время в зависимости от значения 
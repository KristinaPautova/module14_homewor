function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
};

const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');
let input = document.querySelector("#select");

function displayResult(apiData) {
    let cards = '';
    // console.log('start cards', cards);

    apiData.forEach(item => {
        if(item.year == input.value){
            console.log(`${item.year} = ${input.value}`)
            const cardBlock = `
      <td>${item.sales.q1}</td>
      <td>${item.sales.q2}</td>
      <td>${item.sales.q3}</td>
      <td>${item.sales.q4}</td>
        <li>
    <a  href="https://quickchart.io/chart?c={type:'bar',data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'], datasets:[{label:'Выручка за ${input.value} год',data:[${item.sales.q1},${item.sales.q2},${item.sales.q3},${item.sales.q4}]}]}}">Открыть график </a>
    </li>
    `;
            cards = cardBlock;
        } if (input.value === "Выберите год") {
            alert('Выберите, пожалуйста, год')
        }
    });


    resultNode.innerHTML = cards;
}

btnNode.addEventListener('click', () => {
    useRequest('https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440', displayResult);
})
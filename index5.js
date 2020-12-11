let name = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
let date = new Date();
var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};
let datetime = date.toLocaleString("ru", options);

let Keyname = localStorage.getItem('name');
let KeyDate = localStorage.getItem('KeyDate');


if (Keyname == name) {
    alert(`Добрый день, ${name} Давно не виделись. В последний раз вы были у нас ${KeyDate}`);
} else {
    localStorage.setItem('name', name)
    Keyname = localStorage.getItem('name');
    console.log(Keyname);

    localStorage.setItem('KeyDate', datetime);
    KeyDate = localStorage.getItem('KeyDate');
    console.log(KeyDate);
}
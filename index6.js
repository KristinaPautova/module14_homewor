const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const startValue =  Math.ceil(Math.random()*100);

        if (startValue%2 ===  0 ) {
            resolve({
                message: "Завершено успешно.",
                data: startValue
            });
        } else {
            reject({
                message: "Завершено с ошибкой.",
                data: startValue
            });
        }
    },3000)
});

myPromise
    .then((result) => {
        console.log(result.message, `Сгенерированное число — ${result.data}`);
        return result.data
    })
    .catch((error) => {
        console.log(error.message, `Сгенерированное число — ${error.data}`);
        return startValue
    })
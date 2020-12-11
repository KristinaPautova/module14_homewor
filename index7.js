btn.onclick = function(){
    let id = document.getElementById("input").value;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
        .then((response) => response.json())
        .then((json) => {
            if(json.length != 0){
                let list = "";
                for(let i = 0; i < json.length; i++)
                    list += json[i].completed ? `<ul><li><strike>${json[i].title}</strike></li></ul>\n` : `<ul><li>${json[i].title}</li></ul>\n`;
                document.getElementById("list").innerHTML = list;
            }
            else{
                alert("Пользователь с указанным id не найден")
            };
        });
}
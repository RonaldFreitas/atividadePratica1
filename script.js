document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('user-list');

    //testei utilizando dados aleátorios, pois achei mais facil
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${user.name}</strong><br>Email: ${user.email}<br>Endereço: ${user.address.street}, ${user.address.city}`;
                userList.appendChild(li);
            });
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
});
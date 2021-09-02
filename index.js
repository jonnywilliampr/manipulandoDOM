// let link = document.createElement('a');
// link.setAttribute('href', 'https://google.com')

// let conteudo = document.createTextNode("Acessar ao Google");
// link.appendChild(conteudo);

// let container = document.querySelector('#app');
// container.appendChild(link);


// link.style.textDecoration ='none';
// link.style.color = '#ffffff';

// let box = document.querySelector('.box');
// console.log(box);

let box = document.querySelector('.box');

function callback(event){
    // console.log(event.currentTarget);
    // console.log(event.target);
    // console.log(event.path);
    if(event.key == 'r'){
        box.classList.toggle('red');
    }else if(event.key == 'b'){
        box.classList.toggle('blue');
    }else{
        box.classList.toggle('green');
    }
}

window.addEventListener('keydown', callback);
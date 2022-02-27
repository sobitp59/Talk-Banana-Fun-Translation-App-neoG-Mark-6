const textArea = document.querySelector('.textArea');
const btn = document.querySelector('.btn');

const translated = () => {
    let data = textArea.value;
    console.log(data);
}

btn.addEventListener('click', translated);
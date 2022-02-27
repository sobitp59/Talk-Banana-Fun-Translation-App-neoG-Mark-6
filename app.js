const textArea = document.querySelector('.textArea');
const textAreaOutput = document.querySelector('.textOutput');
const btn = document.querySelector('.btn');

const translated = () => {
    let output = document.createElement('div');
    output.innerText = textArea.value;
    document.body.appendChild(output);
    // textAreaOutput.appendChild(output);
}

btn.addEventListener('click', translated);

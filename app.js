const textArea = document.querySelector('.textArea');
const transatedOutput = document.querySelector('.transated-output');
const btn = document.querySelector('.btn');

const translated = () => {
    let fromTrans = textArea.value;
    transatedOutput.innerText = fromTrans;
}
btn.addEventListener('click', translated);




const textArea = document.querySelector('.textArea');
const transatedOutput = document.querySelector('.transated-output');
const btn = document.querySelector('.btn');

const translated = () => {
    let fromTrans = textArea.value;
    // const url = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=' + fromTrans;
    // const url = 'https://api.funtranslations.com/translate/minion.json?text=' + fromTrans;
    const url = 'https://api.funtranslations.com/translate/vulcan.json?text=' + fromTrans;
    fetch(url)
    .then(res => res.json())
    .then(json => {
    transatedOutput.innerText = json.contents.translated;
        
    }) 
}
btn.addEventListener('click', translated);


// let text1 = 'I am Batman'
// let text2 = 'I am Spider-man'
// let text3 = 'I am Shaktiman'


// fetch('https://api.funtranslations.com/translate/vulcan.json?text=i am tanay')
// .then(res => res.json())
// .then(json => console.log(json))
result = document.querySelector('.result');
text = document.querySelector('#text');
button = document.querySelector('.sub');
checkbox = document.querySelectorAll('input[type=checkbox]')
upper = document.getElementById('upper')
lower = document.getElementById('lower')
upper.addEventListener('change', (ev) => {
    if (ev.target.checked) {
        lower.checked = false
    }
});
let pun=`!()-[]}{;:'"\\,<>./?@#$%^&*_~`.split('')

lower.addEventListener('change', (ev) => {
    if (ev.target.checked) {
        upper.checked = false
    }
});
button.addEventListener("click", () => {
    result.innerHTML = ""
    const para = document.createElement('p')
    para.classList.add('warn')
    if (!text.value){
        para.innerText = "Please enter the text";
        result.appendChild(para);
        return
    }
    // console.log(checkbox.fo)
    let constrt = []
    // debugger;
    checkbox.forEach(element => {
        if (element.checked) {
            constrt.push(element.value)
        }
    });
    if (constrt.length) {
        textUtil(text, constrt)
    } else {
        para.innerText = "Please check atleast one thing";
        result.appendChild(para);
        // result.innerHTML = "Please check atleast one thing"
    }
})
const textUtil = (text, constraint) => {
    // console.log(text.value,constraint)
    let copy = text.value
    if (constraint.includes('upper')) {
        copy = copy.toUpperCase()
    }
    if (constraint.includes('lower')) {
        copy = copy.toLowerCase()
    }
    if (constraint.includes('newline')) {
        copy = copy.replaceAll('\n',' ')
    }
    if (constraint.includes('punc')) {
    //    pun.forEach(ele => ele)
    let cpy2 = ""
    for (let index = 0; index < copy.length; index++) {
        // debugger;
        if (pun.includes(copy[index])){
            copy = copy.replaceAll(copy[index],'') 
        }
    }
    }
    result.innerText = copy
}

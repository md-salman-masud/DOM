let del = document.getElementsByClassName('del');

let ul = document.getElementById('ul')
let chiled = document.getElementsByName("li");
// console.log(chiled);
[...chiled].forEach((li, ind) => {
    li.addEventListener('dblclick', function (e) {

        ul.removeChild(li)
        let a = e.target.value
        textfield(a)


    });
    [...del].forEach(delet => {
        delet

    })


    li.addEventListener('click', function (e) {
        //    console.log(e.target.value); 




        let text = e.target.innerText

        e.target.innerHTML = ''
        let inputbox = textfield(text);

        e.target.appendChild(inputbox)
        inputbox.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                e.target.innerHTML = event.target.value
            }
        })

    })
})


function textfield(a) {
    let input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.className = 'chiled'
    input.value = a;
    return input
}
const optionList = document.querySelectorAll('.option');

optionList.forEach(element => {
    element.addEventListener('mouseenter', () => {
        // console.log(element.childNodes[3]);
        makeVisible(element)
    })
});

function makeVisible(ele) {
    ele.childNodes[3].classList.add('optionsVisible')
}

optionList.forEach(element => {
    element.addEventListener('mouseleave', () => {
        // console.log(element.childNodes[3]);
        makeInvisible(element)
    })
});


function makeInvisible(ele) {
    ele.childNodes[3].classList.remove('optionsVisible')
}
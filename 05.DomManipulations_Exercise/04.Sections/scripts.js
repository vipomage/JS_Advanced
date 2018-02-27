function create(sentences) {
    for (let sentence of sentences) {
        let container = document.getElementById('content');
        let div = document.createElement('div');
        let paragraph = document.createElement('p');
        paragraph.textContent = sentence;
        paragraph.setAttribute('style','display:none');
        div.addEventListener('click',ev => {
            let element = ev.target.childNodes[0];
            element.setAttribute('style','display:block');
        });
        div.appendChild(paragraph);
        container.appendChild(div)
    }
}
function createBook(container, title, author, isbn) {
    let count = 1;
    let body = $(container);

    let book = $(`<div class="book${count}" style="border:medium none"></div>`);
    let titleEl = $(`<p class="title">${title}</p>`);
    let authorEl = $(`<p class="author">${author}</p>`);
    let isbnEl = $(`<p class="isbn">${isbn}</p>`);
    let select = $(`<button>Select</button>`);
    let deselct = $(`<button>Deselect</button>`);

    titleEl.appendTo(book);
    authorEl.appendTo(book);
    isbnEl.appendTo(book);
    select.appendTo(book);
    deselct.appendTo(book);

    book.appendTo(body);

    $("button:contains('Select')").on('click',(e)=>{
        let parent = e.target.parentNode;
        $(parent).css('border','2px solid blue')
    });
    $("button:contains('Deselect')").on('click',(e)=>{
        let parent = e.target.parentNode;
        $(parent).css('border','')
    });

}
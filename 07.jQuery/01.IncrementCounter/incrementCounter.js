function increment(selector) {
    let counter = 0;
    let container = $(selector);
    let textArea = `<textarea class="counter" disabled="disabled">0</textarea>`;
    let incrBtn = `<button class="btn" id="incrementBtn">Increment</button>`;
    let addBtn = `<button class="btn" id="addBtn">Add</button>`;
    let result = `<ul class="results"></ul>`;

    container.append(textArea, incrBtn, addBtn, result);
    $('#incrementBtn').on('click', () => {
        $('.counter').text(++counter);
    });
    $('#addBtn').on('click', () => {
        $('ul.results').append(`<li>${counter}</li>`)
    })
}
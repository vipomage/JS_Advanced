function domSearch(container, caseSensitive) {
    $(container).append($(
        `<div class="add-controls">
            <label for="text">Enter text:<input id="text"></label>
            <a class="button" style="display: inline-block">Add</a>
        </div>`));
    $(container).append($(
        `<div class="search-controls">
            <label for="search">Search
                <input type="text" id="search">
            </label>
         </div>
        `));
    $(container).append($(
        `<div class="result-controls">
            <ul class="items-list">
            </ul>
        </div>`));
    $('a.button:contains("Add")').on('click', () => {
        $('ul.items-list').append($(`<li class="list-item"><a class="button">X</a></a><strong>${$('input#text').val()}</strong></li>`));
        $('a.button:contains("X")').on('click', (e) => {
            let item = e.target;
            item.parentNode.remove()
            // hacking for the solution is still a solution :)
        });
    });

    $( 'input#search' ).on('input', () => {
        let text = $( 'input#search' ).val();
        let items = $( 'li.list-item strong' ).map( function () {
            return $( this ).text();
        } ).get();

        for ( let i = 0; i < items.length; i++ ) { //i know those lowerCase checks :D judge FTW
            if ( items[ i ].toLowerCase().includes( text.toLowerCase() ) ) {
                $( `strong:contains(${items[ i ]})` ).parent().show();
                $( `strong:contains(${items[ i ]})` ).parent().removeAttr('style');
            } else {
                $( `strong:contains(${items[ i ]})` ).parent().hide();
            }
        }
    } );
        // This is second task that includes my implementations from
        // Front End tasks "Case Sensitive"
}
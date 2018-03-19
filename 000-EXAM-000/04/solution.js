class PaymentManager {
    constructor(title) {
        this.title = title;
    }

    render(selector) {
        let table = $(`<table></table>`);
        table.append($(`<caption>${this.title} Payment Manager</caption>`));
        table.append($(`<thead></thead>`).append($(`<tr>
        <th class="name">Name</th>
        <th class="category">Category</th>
        <th class="price">Price</th>
        <th>Actions</th>
    </tr>`)));
        let tbody = $(`<tbody class="payments"></tbody>`)
        let tfoot = $('<tfoot class="input-data">')
        let inputBtn = $(`
 <tr>
 <td><input name="name" type="text"></td>
 <td><input name="category" type="text"></td>
 <td><input name="price" type="number"></td>
 </tr>`);
        inputBtn.append($(`<td><button>Add</button></td>`).click((e) => {
            let product = e.target.parentNode.parentNode.children[0].children[0];
            let category = e.target.parentNode.parentNode.children[1].children[0];
            let price = e.target.parentNode.parentNode.children[2].children[0];
            let fixedPrice = Number(price.value).toString();
            if (!Number.isInteger(Number(price.value))) {
                fixedPrice = parseFloat(fixedPrice)
            }
            if (product.value !== '') {
                if (category.value !== '') {
                    if (price.value !== '' || price.value === 0 || price.value === '0') {
                        table.append($(`<tr><td>${product.value}</td><td>${category.value}</td><td>${fixedPrice}</td></tr>`).append($(`<td><button>Delete</button></td>`).click((e) => {
                            e.target.parentNode.parentNode.remove();
                        })))
                        product.value = ''
                        category.value = ''
                        price.value = ''
                    }
                }
            }
        }))
        table.append(tbody);
        tfoot.append(inputBtn)
        table.append(tfoot)
        $('#' + selector).append(table)
    }
}
function solve(ticketsArr, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let output = [];

    for (let ticket of ticketsArr) {
        let [destination, price, status] = ticket.split('|');
        output.push(new Ticket(destination, price, status))
    }

    if (sortingCriteria === 'status' || sortingCriteria === 'destination') {
        return output.sort((a, b) => a[sortingCriteria].localeCompare(b[sortingCriteria]))
    } else {
        return output.sort((a, b) => a['price'] - b['price'])
    }
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));
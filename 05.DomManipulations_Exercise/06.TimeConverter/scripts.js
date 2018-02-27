function attachEventsListeners() {
    let elements = document.querySelectorAll('div input:nth-child(3)');

    for (let button of elements) {
        button.addEventListener('click', e => {
            calculate(e.target['id'])
        })
    }

    function calculate(inputBtn) {

        let daysContainer = document.getElementById('days');
        let hoursContainer = document.getElementById('hours');
        let minutesContainer = document.getElementById('minutes');
        let secondsContainer = document.getElementById('seconds');

        switch (inputBtn) {
            case 'daysBtn': {
                let days = Number(document.getElementById('days').value);
                hoursContainer.setAttribute('value', days * 24);
                minutesContainer.setAttribute('value', days * 1440);
                secondsContainer.setAttribute('value', days * 86400);
            }
                break;
            case 'hoursBtn': {
                let hours = Number(document.getElementById('hours').value);
                daysContainer.setAttribute('value', hours / 24);
                minutesContainer.setAttribute('value', hours / 24 * (1440));
                secondsContainer.setAttribute('value', hours / 24 * (86400));
            }
                break;
            case 'minutesBtn': {
                let minutes = Number(document.getElementById('minutes').value);
                daysContainer.setAttribute('value', minutes / 1440);
                hoursContainer.setAttribute('value', minutes / 60);
                secondsContainer.setAttribute('value', minutes * 1440 / 24);
            }
                break;
            case 'secondsBtn': {
                let seconds = Number(document.getElementById('seconds').value);
                daysContainer.setAttribute('value', seconds / 86400);
                minutesContainer.setAttribute('value', seconds / 60);
                hoursContainer.setAttribute('value', seconds / 3600);
            }
                break;
        }
    }
}
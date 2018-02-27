function timer() {
    let runing = false;
    $('button#start-timer').on('click',()=>{

        if(!runing){

            timer = setInterval(step,1000);
            runing = true;
        }
    });
    $('button#stop-timer').on('click',()=> {
        if (runing){
            clearInterval(timer);

            runing = false;
        }

    });

    function step() {
        let seconds = Number($('#seconds').text());
        let minutes = Number($('#minutes').text());
        let hours = Number($('#hours').text());
        let days = Number($('.day').text());

        seconds += 1;
        $("#seconds").html((seconds < 10 ? "0" : "") + seconds);
        if (seconds === 60) {
            $('#seconds').html('00');
            seconds = 0;
            minutes += 1;
            $("#minutes").html((minutes < 10 ? "0" : "") + minutes);

            if (minutes === 60) {
                minutes = 0;
                $('#minutes').html('00');
                hours += 1;
                $('#hours').html((hours < 10 ? "0" : "") + hours);
            }
            if (hours === 24) {
                hours = 0;
                $('#hours').html('00');
                days += 1;
                if (days > 1) {
                    $('.hidden').removeAttr('hidden').html(`${days} days`);
                } else {
                    $('.hidden').removeAttr('hidden').html(`${days} day`)
                }

            }
        }
    }
}



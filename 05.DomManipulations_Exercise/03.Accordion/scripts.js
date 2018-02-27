function toggle() {
    let visible = document.getElementsByClassName('button')[0].textContent === 'Less';
    if (visible) {
        hide()
    } else {
        display()
    }

    function display() {
        document.getElementById('extra').style.display = 'block';
        document.getElementsByClassName('button')[0].textContent = 'Less'
    }

    function hide() {
        document.getElementById('extra').style.display = 'none';
        document.getElementsByClassName('button')[0].textContent = 'More'
    }
}
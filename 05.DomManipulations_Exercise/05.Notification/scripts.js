function notify(string) {
    let notification = document.getElementById('notification');
    notification.textContent = string;
    notification.setAttribute('style','display:block');
    setTimeout(()=>{
        document.getElementById('notification').setAttribute('style','display:none');
    },2000);
}
function updateCountdown() {
    const newYear = new Date('January 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const diff = newYear - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
}
const vari = s
setInterval(updateCountdown, 1000);

// Show Message on Button Click
function showMessage() {
    alert('Happy New Year!');
}
function show(){
    const res = confirm('Do you want to pledge?');
    if(res){
        alert('Your manifested has recorded');
    }
    else{
        alert('You are way behind from success');
    }

}
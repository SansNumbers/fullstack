function addToStorage() {
    let val = document.getElementById('text__input').value + 
    ' [' + new Date().toLocaleDateString() + 
    ', ' + new Date().toLocaleTimeString() + ']';
    localStorage.setItem('t09',  val);
    document.getElementById('history__data').value = val;
}

function clearStorage() {
    localStorage.removeItem('t09');
    document.getElementById('history__data').value = '';
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('history__data').value = localStorage.getItem('t09');
});

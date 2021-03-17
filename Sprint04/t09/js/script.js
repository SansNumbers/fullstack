function addToStorage() {
    let val = document.getElementById('1').value + ' [' + new Date().toLocaleDateString().replace("/", '.') + ', ' + new Date().toLocaleTimeString() + ']'
    localStorage.setItem('t09data',  val)
    document.getElementById('2').value = val
}


function clearStorage() {
    localStorage.removeItem('t09data')
    document.getElementById('2').value = ''
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('2').value = localStorage.getItem('t09data')
});

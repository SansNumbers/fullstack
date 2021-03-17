function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function setCookie(cname, cvalue, maxage) {
    var d = new Date();
    document.cookie = cname + "=" + cvalue + ";max-age=" + maxage + ";path=/";
}


function wordCount() {
    document.getElementById('2').value = 'Word count: ' +  (document.getElementById('3').value.split(document.getElementById('1').value).length - 1);
    if (getCookie('wc')) {
        console.log(getCookie('wc'))
        let val = getCookie('wc') * 1
        val++
        setCookie('wc', val, 60)
    } else {
        setCookie('wc', 1, 60)
    }

    if (document.getElementById('wc').innerText.indexOf('[') == -1) {
        document.getElementById('wc').innerText += '[' + getCookie('wc') + ']'
    } else {
        document.getElementById('wc').innerText = document.getElementById('wc').innerText.split(' [')[0] + '[' + getCookie('wc') + ']'
    }
}

function replaceWords() {
    document.getElementById('2').value = document.getElementById('3').value.replace(/\w+/gmi, document.getElementById('1').value)
    if (getCookie('rw')) {
        console.log(getCookie('rw'))
        let val = getCookie('rw') * 1
        val++
        setCookie('rw', val, 60)
    } else {
        setCookie('rw', 1, 60)
    }

    if (document.getElementById('rw').innerText.indexOf('[') == -1) {
        document.getElementById('rw').innerText += '[' + getCookie('rw') + ']'
    } else {
        document.getElementById('rw').innerText = document.getElementById('rw').innerText.split(' [')[0] + '[' + getCookie('rw') + ']'
    }
}

function toPhone() {
    if (document.getElementById('1').value.length == 10 && document.getElementById('1').value.match(/^[0-9]+$/)) {
        document.getElementById('2').value = document.getElementById('1').value.substr(0, 3) + '-' + document.getElementById('1').value.substr(3, 3) + '-' + document.getElementById('1').value.substr(6)
    } else {
        document.getElementById('2').value = 'Invalid phone number'
    }

    if (getCookie('tp')) {
        console.log(getCookie('tp'))
        let val = getCookie('tp') * 1
        val++
        setCookie('tp', val, 60)
    } else {
        setCookie('tp', 1, 60)
    }

    if (document.getElementById('tp').innerText.indexOf('[') == -1) {
        document.getElementById('tp').innerText += '[' + getCookie('tp') + ']'
    } else {
        document.getElementById('tp').innerText = document.getElementById('tp').innerText.split(' [')[0] + '[' + getCookie('tp') + ']'
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (getCookie('wc')) {
        document.getElementById('wc').innerText += '[' + getCookie('wc') + ']'
    }
    if (getCookie('rw')) {
        document.getElementById('wc').innerText += '[' + getCookie('rw') + ']'
    }
    if (getCookie('tp')) {
        document.getElementById('tp').innerText += '[' + getCookie('tp') + ']'
    }
});

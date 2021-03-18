function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
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

function setCookie(cname, cvalue, expires) {
    var d = new Date();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function toPhoneNum() {
    if (document.getElementById('word_input').value.match(/^[0-9]+$/)) {
        document.getElementById('output').value = document.getElementById('word_input').value.substr(0, 3) 
        + '-' + document.getElementById('word_input').value.substr(3, 3) + 
        '-' + document.getElementById('word_input').value.substr(6);
    } else {
        document.getElementById('output').value = 'Invalid phone number';
    }

    if (getCookie('toPhoneNum')) {
        console.log(getCookie('toPhoneNum'));
        let val = getCookie('toPhoneNum') * 1;
        val++;
        setCookie('toPhoneNum', val, 60);
    } else {
        setCookie('toPhoneNum', 1, 60);
    }

    if (document.getElementById('toPhoneNum').innerText.indexOf('[') == -1) {
        document.getElementById('toPhoneNum').innerText += '[' + getCookie('toPhoneNum') + ']';
    }
}

function wordCount() {
    document.getElementById('output').value = 'Word count: ' +  
    (document.getElementById('text_input').value.split(document.getElementById('word_input').value).length - 1);

    if (getCookie('wordCount')) {
        console.log(getCookie('wordCount'));
        let val = getCookie('wordCount') * 1;
        val++;
        setCookie('wordCount', val, 60);
    } else {
        setCookie('wordCount', 1, 60);
    }

    if (document.getElementById('wordCount').innerText.indexOf('[') == -1) {
        document.getElementById('wordCount').innerText += '[' + getCookie('wordCount') + ']';
    }
}

function wordReplace() {
    document.getElementById('output').value = document.getElementById('text_input').value.replace(/\w+/gmi, document.getElementById('word_input').value);
    if (getCookie('wordReplaced')) {
        console.log(getCookie('wordReplaced'));
        let val = getCookie('wordReplaced') * 1;
        val++;
        setCookie('wordReplaced', val, 60);
    } else {
        setCookie('wordReplaced', 1, 60);
    }
    if (document.getElementById('wordReplaced').innerText.indexOf('[') == -1) {
        document.getElementById('wordReplaced').innerText += '[' + getCookie('wordReplaced') + ']';
    }
}


document.addEventListener("DOMContentLoaded", function() {
    if (getCookie('toPhoneNum')) {
        document.getElementById('toPhoneNum').innerText += '[' + getCookie('toPhoneNum') + ']'
    }
    if (getCookie('wordCount')) {
        document.getElementById('wordCount').innerText += '[' + getCookie('wordCount') + ']'
    }
    if (getCookie('wordReplaced')) {
        document.getElementById('wordReplaced').innerText += '[' + getCookie('wordReplaced') + ']'
    }
});

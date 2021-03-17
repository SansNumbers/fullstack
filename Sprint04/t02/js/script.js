let data = [['Black Panther', 66, 53], ['Captain America', 79, 137], ['Captain Marvel', 97, 26], ['Hulk', 80, 49], ['Iron Man', 88, 48], ['Spider-Man', 78, 16], ['Thanos', 99, 1000], ['Thor', 95, 1000], ['Yon-Rogg', 73, 52]]

let asc = true

function sort(type, data) {
    let parms = ['Name', 'Strength', 'Age']
    let ord = ['DESC', 'ASC']
    document.getElementById('notification').innerHTML = 'Sorting by ' + parms[type] + ', order: ' + ord[asc * 1] + '.'
    document.getElementById('mt').remove()
    if (asc) {
        document.getElementById('placeholder').appendChild(createTable(data.sort(function(a, b) {return (a[type]<b[type]?-1:(a[type]>b[type]?1:type));})))
    } else {
        document.getElementById('placeholder').appendChild(createTable(data.sort(function(a, b) {return (a[type]>b[type]?-1:(a[type]<b[type]?1:type));})))
    }
    asc = !asc
}


function createTable(data) {
    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody')
    let table = document.createElement('table')
    table.appendChild(thead)
    table.appendChild(tbody)
    {
        let name = document.createElement('th')
        name.innerHTML = 'Name'
        name.onclick = function() {sort(0, data)}
        let stre = document.createElement('th')
        stre.innerHTML = 'Strength'
        stre.onclick =function() { sort(1, data)}
        let age = document.createElement('th')
        age.innerHTML = 'Age'
        age.onclick = function() {sort(2, data)}

        thead.appendChild(name)
        thead.appendChild(stre)
        thead.appendChild(age)
    }

    for (i in data) {
        let tr = document.createElement('tr')
        let name = document.createElement('td')
        name.innerHTML = data[i][0]
        let stre = document.createElement('td')
        stre.innerHTML = data[i][1]
        let age = document.createElement('td')
        age.innerHTML = data[i][2]
        tr.appendChild(name)
        tr.appendChild(stre)
        tr.appendChild(age)
        tbody.appendChild(tr)
    }

    table.setAttribute('id', 'mt')
    return table
}

let table = createTable(data)
document.getElementById('placeholder').innerHTML = ''
document.getElementById('placeholder').appendChild(table)

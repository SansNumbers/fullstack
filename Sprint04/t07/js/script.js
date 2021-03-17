let key = '5EHY7xyAbBnTMP1PtP45gRm1eAjbyLiJ'

function createCard(date, image, degree) {
    let div = document.createElement('div')
    div.classList.add('card')

    let date_div = document.createElement('div')
    date_div.classList.add('date')
    let date_p = document.createElement('p')
    date_p.innerText = date
    date_div.appendChild(date_p)
    div.appendChild(date_div)

    let img = document.createElement('img')
    img.setAttribute('src', image)
    div.appendChild(img)
    let temp = document.createElement('p')
    temp.classList.add('temperature')
    if (degree > 0) {
        temp.innerText = "+" + degree + '°'
    } else {
        temp.innerText = degree + '°'
    }


    div.appendChild(temp)

    return div
}

function constructWeather(data) {
    for (i in data["DailyForecasts"]) {
        let date = data["DailyForecasts"][i]['Date'].split('T')[0].split('-').slice(1).reverse().join('.')
        let icon_val
        if (data["DailyForecasts"][i]['Day']['Icon'] < 10) {
            icon_val = '0' + data["DailyForecasts"][i]['Day']['Icon']
        } else {
            icon_val = data["DailyForecasts"][i]['Day']['Icon']
        }
        let image = 'https://developer.accuweather.com/sites/default/files/' + icon_val + '-s.png'
        let degree = data["DailyForecasts"][i]['Temperature']['Maximum']['Value']

        document.getElementsByClassName('weather').item(0).appendChild(createCard(date, image, degree))
    }
}

document.addEventListener("DOMContentLoaded", function() {
    fetch('http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey=1-324505_1_AL?apikey=5EHY7xyAbBnTMP1PtP45gRm1eAjbyLiJ&details=true&metric=true').then((response) => {
        return response.json();}).then((data) => {
        constructWeather(data);
    });
});

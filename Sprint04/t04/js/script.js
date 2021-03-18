let data = [
    ['John Wick', 'assets/img/wick.jpg', 'December 11, 2014', ['Keanu Reeves', 'Ian McShane', 'Lance Reddick', 'Bridget Moynahan', 'John Leguizamo'], 'Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John\'s prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef\'s father (Michael Nyqvist) -- John\'s former colleague -- puts a huge bounty on John\'s head.'],
    ['Avengers: Endgame', 'assets/img/end.jpg', 'April 22, 2019', ['Robert Downey Jr.', 'Chris Evans', 'Ian MacShane', 'Chris Hemsworth', 'Scarlett Johansson'], 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.'],
    ['Inception', 'assets/img/inc.jpg', 'July 22, 2010', ['Leonardo DiCaprio', 'Dominic Cobb', 'Joseph Gordon-Levitt', 'Tom Hardy', 'Cillian Murphy'], 'Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people\'s dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone\'s mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb\'s every move.']
]

function updateInfo(index) {
    let lis = document.getElementById('filmsList').getElementsByTagName('li')
    for (i in lis) {
        if (lis[i].classList) lis[i].classList.remove('selected');
        if (i == index) {
            lis[i].classList.add('selected')
        }
    }

    document.getElementById('filmName').innerHTML = data[index][0]
    document.getElementById('poster').setAttribute("src", data[index][1])
    document.getElementById('date').innerHTML = data[index][2]
    document.getElementById('actors').innerHTML = ''
    for (i in data[index][3]) {
        let l = document.createElement('li')
        l.innerHTML = data[index][3][i]
        document.getElementById('actors').appendChild(l)
    }
    document.getElementById('excerpt').innerHTML = data[index][4]
}


document.addEventListener("DOMContentLoaded", function(){
    updateInfo(1)
});

class Human {
    constructor() {
        this.firstName = "Akali";
        this.lastName = "Jhomen Tethi";
        this.gender = "Female";
        this.age = 19;
        this.calories = 100;
    }

    sleepFor() {
        let sleepTime = prompt('Enter sleeping time :', '')
        
        if (sleepTime != '' && sleepTime != null) {
            let sleep = document.getElementById("sleep");
            sleep.innerText = "I`m sleeping";
            setTimeout(() => {
                sleep.innerText = "I`m awake now";
            }, sleepTime * 1000);
        }
    }

    feed() {
        let eat = document.getElementById("eat");

        if (this.calories < 500) {
            eat.innerText = "Nom nom nom";
            this.calories += 200;
            let clrs = document.getElementById("clrs");
            clrs.innerText = "Calories: " + this.calories;
            setTimeout(() => {
                eat.innerText = "";
                if (this.calories < 500) {
                    eat.innerText = "I`m still hungry";
                    setTimeout(() => {
                        eat.innerText = "";
                    }, 5000);
                }
            }, 10000);
        }
        else {
            eat.innerText = "I`m not hungry";
            setTimeout(() => {
                eat.innerText = "";
            }, 5000);
        }
    }
}

humanForm();

class Superhero extends Human {
    fly() {
        let fly = document.getElementById("fly");
        fly.innerText = "I`m flying";
        setTimeout(() => {
            fly.innerText = "";
        }, 10000);
    }

    fight(){
        let fight = document.getElementById("fight");
        fight.innerText = "Khhhh-chh... Bang-g-g-g... Evil is defeated!";
        setTimeout(() => {
            fly.innerText = "";
        }, 5000);
    }

    feed() {
        let eat = document.getElementById("eat");
        eat.innerText = "Nom nom nom";
        setTimeout(() => {
            eat.innerText = "I`m not hungry";
        }, 3000);
        this.calories += 200;
        let calories = document.getElementById("clrs");
        calories.innerText = "Calories: " + this.calories;
    }
}

function humanForm() {
    let human = new Human();

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let gender = document.getElementById("gender");
    let age = document.getElementById("age");
    let clrs = document.getElementById("clrs");

    firstName.innerText += " " + human.firstName;
    lastName.innerText += " " + human.lastName;
    gender.innerText += " " + human.gender;
    age.innerText += " " + human.age;
    clrs.innerText += " " + human.calories;

    let btnSleep = document.getElementById("btnSleep");
    let btnEat = document.getElementById("btnEat");

    btnSleep.onclick = human.sleepFor;
    
    let eat = document.getElementById("eat");

    let hungry = setInterval(() => {
        eat.innerText = "I`m hungry";
        clearInterval(hungry);
    }, 5000);

    btnEat.onclick = function () {
        human.feed();
        clearInterval(hungry);
    };

    btnForm.onclick = function () {
        if(human.calories == 500) {
            heroForm(human.calories);
            clearInterval(hungry);
        }
    };

    setInterval(() => {
        human.calories -= 200;
        clrs.innerText = "Calories: " + human.calories;
    }, 60000);

}

function heroForm(calories){
    let hero = new Superhero();
    hero.calories = calories;
    document.getElementById("image").src = "assets/images/Akali_pop_star.jpeg";

    let btnSleep = document.getElementById("btnSleep");
    let btnEat = document.getElementById("btnEat");
    let btnForm = document.getElementById("btnForm");
    let btnFight = document.getElementById("btnFight");

    btnForm.value = "Fly";
    btnFight.style.opacity = 1;
    btnFight.onclick = hero.fight;
    btnForm.onclick = hero.fly;

    btnSleep.onclick = hero.sleepFor;
    btnEat.onclick = function () {
        hero.feed();
    }
}

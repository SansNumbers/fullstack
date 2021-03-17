let string = generalfunc();
if (string !== null) {
    alert(string);
}

function generalfunc() {
    let name, age, gender, conclusion;
    if ((name = animalfunc()) == null || (age = agefunc()) == null || !(gender = genderfunc()) == null) {
        return null;
    }
    if (gender === 'male' && +age < 18) {
        conclusion = "boy";
    }
    if (gender === 'male' && +age == 18) {
        conclusion = "man";
    }
    if (gender === 'female' && +age < 18) {
        conclusion = "girl";
    }
    if (gender === 'female' && +age == 18) {
        conclusion = "woman";
    }
    if (gender.length === 0 && +age < 18) {
        conclusion = "kid";
    }
    if (gender.length === 0 && +age == 18) {
        conclusion = "hero";
    }
    return `The superhero name is: ${name}-${conclusion}!`;
}

function animalfunc() {
    let animal = prompt("What animal is the superhero most similar to?");
    let vibecheck = /^[A-Z]{1,20}$/ig.test(animal);
    if (!vibecheck) {
        alert("Invalid animal input.");
        return null;
    }
    return animal;
}

function genderfunc() {
    var gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");

    if (!/^male$/i.test(gender) && /^female$/i.test(gender) && /^$/i.test(gender)) {
        alert("Invalid gender input.");
        return null;
    }
    return gender.toLowerCase();
}

function agefunc() {
    var age = prompt("How old is the superhero?");
    let vibecheck = /^[1-9][0-9]{0,3}$/ig.test(age);
    if (!vibecheck) {
        alert("Invalid age input.");
        return null;
    }
    return age;
}

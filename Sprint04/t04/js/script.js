function movieList() {

    let movies = {
      constantine: {
        id: 1,
        name: "Constantine",
        date: "February 8, 2005",
        actors: [
          "Keanu Reeves",
          "Rachel Weisz",
          "Shia LaBeouf",
          "Djimon Hounsou",
        ],
        desc: `John Constantine is a cynic with the ability to perceive and communicate
        with Half-Breeds in their true form. He seeks salvation from eternal damnation in Hell 
        for a suicide attempt in his youth. Constantine exorcises demons back to Hell in a bid 
        to earn favor with Heaven but has become weary over time. With death looming, 
        he helps a troubled police detective learn the truth about her sister's death 
        while simultaneously unraveling a much larger and darker plot.`,
        poster: "assets/images/constantine.jpeg",
      },

      endgame: {
        id: 2,
        name: "Avengers: Endgame",
        date: "April 22, 2019",
        actors: [
          "Robert Downey Jr.",
          "Chris Evans",
          "Ian McShane",
          "Chris Hemsworth",
          "Scarlett Johansson",
        ],
        desc: `After half of all life is snapped away by Thanos, the Avengers are
        left scattered and divided. Now with a way to reverse the damage,
        the Avengers and their allies must assemble once more and learn to
        put differences aside in order to work together and set things
        right. Along the way, the Avengers realize that sacrifices must be
        made as they prepare for the ultimate final showdown with Thanos,
        which will result in the heroes fighting the biggest battle they
        have ever faced.`,
        poster: "assets/images/endgame.jpg",
      },

      matrix: {
        id: 3,
        name: "Matrix",
        date: "March 31, 1999",
        actors: [
          "Keanu Reeves",
          "Laurence Fishburne",
          "Carrie-Anne Moss",
          "Joe Pantoliano",
          "Hugo Weaving",
        ],
        desc: `When a beautiful stranger leads computer hacker Neo to a forbidding underworld,
        he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.
        Thomas A. Anderson is a man living two lives.
        By day he is an average computer programmer and by night a hacker known as Neo.`,
        poster: "assets/images/matrix.jpeg",
      }
    };

    let movieName = document.getElementsByClassName("name");
    let container = document.getElementsByClassName("description_container")[0];
    for (let name of movieName) {
      name.addEventListener("click", () => {
        for (let attribute of movieName) {
          attribute.removeAttribute("id");
        }
        name.setAttribute("id", "active");
        let id = name.getAttribute("data-id");
        for (movie in movies) {
          let film_id = movies[movie].id;
          if (film_id == id) {
            container.innerHTML = `
              <div class="text">
                <div class="title">${movies[movie].name}</div>
                <div class="date">${movies[movie].date}</div>
                <div class="actors">
                <div class="actors">
                <div class="actor">${movies[movie].actors[0]}</div>
                <div class="actor">${movies[movie].actors[1]}</div>
                <div class="actor">${movies[movie].actors[2]}</div>
                <div class="actor">${movies[movie].actors[3]}</div>
                <div class="actor">${movies[movie].actors[4]}</div>
              </div>
                </div>
                <div class="description">${movies[movie].desc}
                </div>
              </div>
              <img src="${movies[movie].poster}" alt="poster" class="poster">`;
          }
        }
      });
    }
  }
movieList();
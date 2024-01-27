let filterToggle = true;

const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
      favorite: true
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      //imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg",//
      //imageUrl: "https://m.media-amazon.com/images/I/41U2dSmyZtL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",//
      imageUrl: "https://img.freepik.com/premium-photo/beautiful-bright-red-kitten-white-background-plays-young-cute-little-red-kitty-long-haired-ginger-kitten-play-home-cute-funny-home-pets-domestic-animal-young-kittens_332694-176.jpg?w=360",
      favorite: false
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
      favorite: true
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
      favorite: true
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
      favorite: false
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
      favorite: true 
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
      favorite: false
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      //imageUrl: "http://www.theouthousers.com/images/jck//ThanosCopter/news/grumpasaur.jpg",//
      imageUrl: "https://www.exoprimal.com/assets/images/dinosurvival/dinosaurs_img-trex.png",
      favorite: true
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
      favorite: false
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
      favorite: true
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      //imageUrl: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600",//
        imageUrl: "https://i.pinimg.com/originals/70/a3/c3/70a3c316427f2fcd63913565a08e1787.jpg",
      favorite: false
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
      favorite: true
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      //imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg",//
      imageUrl: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      favorite: false
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
      favorite: true
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
      favorite: false
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      //imageUrl: "https://images.readwrite.com/wp-content/uploads/2018/03/t-rex-dino-quiz-e1490854556549.jpg",//
      imageUrl: "https://img.freepik.com/free-vector/cute-tyrannosaurus-dinosaur-cartoon_1308-112232.jpg",
      favorite: true
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      //imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg",//
      imageUrl: "https://c.ndtvimg.com/2020-08/1cvf367_yellow-cat_625x300_25_August_20.jpg?im=Resize=(1230,900)",
      favorite: true
    },
    {
      id: 18,
      name: "Selah",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      //imageUrl: "https://www.nation.co.ke/image/view/-/4078922/highRes/1742693/-/maxw/600/-/1453yvh/-/DINO.jpg",//
      imageUrl: "https://www.thedinopark.com/uploads/5/2/0/6/52061569/spino_orig.gif",
      favorite: false
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg",
      favorite: false
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      //imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg",//
      imageUrl: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg",
      favorite: true
    },
    {
      id: 21,
      name: "Miss Kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      //imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/12/enhanced/webdr15/anigif_enhanced-29802-1446485228-10.gif?crop=250:165;0,0&downsize=715",//
      //imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.warrenphotographic.co.uk%2F11791-red-tabby-kitten&psig=AOvVaw1FFnaId92GNCg84vwNUHxm&ust=1706472175480000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKjQl7Cu_oMDFQAAAAAdAAAAABAJ",//
      imageUrl: "https://img.freepik.com/premium-photo/beautiful-bright-red-kitten-white-background-plays-young-cute-little-red-kitty-long-haired-ginger-kitten-play-home-cute-funny-home-pets-domestic-animal-young-kittens_332694-176.jpg?w=360",
      favorite: false
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      //imageUrl: "http://funnyanimalphoto.com/wp-content/uploads/2013/08/cat_caught_mouse_thegatewaypundit.jpg",//
      imageUrl: "https://www.rd.com/wp-content/uploads/2021/05/GettyImages-1286283054.jpg",
      favorite: true
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      //imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg",//
      imageUrl: "https://www.thesprucepets.com/thmb/Or_tc5C3Jypp_cyPbKYJJJXEjWQ=/2121x0/filters:no_upscale():strip_icc()/GettyImages-1201198563-fe6114423c714faa8cb1418a9b98e192.jpg",
      favorite: false
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      //imageUrl: "http://funbk.s3.amazonaws.com/wp-content/uploads/2016/06/funny-cat-video-which-will-make-you-laugh-louder.jpg",//
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Q_j-nmQyJ2iSk6zm1MAHieHoBl8IW0oK7w&usqp=CAU",
      favorite: true
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
      favorite: false
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
      favorite: true
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
      favorite: false
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
      favorite: true
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      //imageUrl: "http://lsae2.iypcdn.com/static//modules/uploads/photos/language1/dino-live-22.jpg?119",//
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1-h9BnGrdHIsaBR4c7masBlDehe_sC-J4A&usqp=CAU",
      favorite: false
    }
  ];

 
 
// ******************** //
// **** FUNCTIONS ***** //
// ******************** //

// Render to DOM utility function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};



// get the cards on the DOM
const cardsOnDom = (array) => {
  let domString = "";
  for (const pet of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${pet.imageUrl}" class="card-img-top" alt=${pet.name}>
    <div class="card-body">
      <p class="card-text">Name: ${pet.name}</p>
      <p class="card-text">Color: ${pet.color}</p>
      <p class="card-text">Special Skill: ${pet.specialSkill}</p>
      <p class="card-text">Type of Pet: ${pet.type}</p>
      <p class="card-text">Favorite: ${pet.favorite ? "Yes" : "No"}</p>
      <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
    </div>
  </div>`;
  }

  renderToDom("#app", domString);
};

const showAllButton = document.querySelector("#All");
const showDogsButton = document.querySelector("#Dogs");
const showCatsButton = document.querySelector("#Cats");
const showDinosButton = document.querySelector("#Dinos");


const filter = (typeString) => {
  filterToggle = true;
  const typeArray = [];

  

  for (const member of pets) {
    if (member.type === typeString) {
      typeArray.push(member);
    }
  }

  cardsOnDom(typeArray);
};


showAllButton.addEventListener("click", (e) => {
  filterToggle = true;
   cardsOnDom(pets);
  });


showDogsButton.addEventListener("click", (e) => {
  filter("dog");
 // const dogTypePets = filter(pets, "dog");
  //cardsOnDom(dogTypePets);
});

showCatsButton.addEventListener("click", (e) => {
  filter("cat");
  //const catTypePets = filter(pets, "cat");
  //cardsOnDom(catTypePets);
});

showDinosButton.addEventListener("click", (e) => {
  filter("dino");
  //const dinoTypePets = filter(pets, "dino");
 // cardsOnDom(dinoTypePets);
});


const form = document.querySelector('form');

const createNewPet = (e) => {
  e.preventDefault();
   //everytime you create a form


  const newAnimalObj = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    type: document.querySelector("#type").value,
    specialSkill: document.querySelector("#specialSkill").value,
    imageUrl: document.querySelector("#image").value,
  }


  pets.push(newAnimalObj);
  cardsOnDom(pets);
  form.reset();

};

form.addEventListener('submit', createNewPet);
    

//target the app div
  const app = document.querySelector("#app");

//add click event listener
  app.addEventListener('click', (e) => {

 // check to see if the target includes delete
 if (e.target.id.includes("delete")) {
  //console.log("hello there")
    
    

//destructure the array
    const [ , id] = e.target.id.split("--");

 // find the index of pets
    const index = pets.findIndex((e) => e.id === Number(id));
    const pet = pets.find((p) => p.id === Number(id))
    //console.log(pet)
    
// splice modifiesteh original arrayto where it only takes 1 card.
    pets.splice(index, 1);

// add if else --- choose all cards or just cards of one type
    if (filterToggle) {
      cardsOnDom(pets)
    } else {
      filter(pet.type);
    }

// repaint the DOM with updated array
    //filter(pets);
 }

});

const startApp = () => {
  cardsOnDom(pets);
};

startApp();

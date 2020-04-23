let intro;
let bed;
let sad;
let worry;
let death;
let state = 0;
let typed = "";
let fly;
let oldlady;
let peace;
let hospital;

function preload(){
  intro = loadImage("news.jpg");
bed = loadImage("bed.jpg");
sad = loadImage("sad.jpg");
worry = loadImage("worry.jpg");
death = loadImage("death.jpg");
fly = loadImage("fly.jpg");
oldlady = loadImage("oldlady.jpg");
peace = loadImage("peace.jpg");
hospital = loadImage("hospital.jpg")
}


function setup() {
  createCanvas(1024, 768);
  textFont("Helvetica");
  textSize(22);
}

function draw() {
  background(255);
  if (state == 0){
    textSize(16);
    textAlign(LEFT);
    text("You are spending a vacation in Europe, Italy. You are sitting in a restaurant, and suddenly you hear that a deadly virus\n is rapidly spreading in that city. The government of Italy decides to place an emergency lockdown within 2 hours\n for an indefinite period. As you being a foreigner in Italy:",100,40);
    image(intro, 200, 110);
    line(0, 87, width, 87);
    text("NO ESCAPE FROM WHAT'S COMING", 0, 200, 200, 200);
    text("TYPE COMMANDS = quarantine, flight, stay, treat, lady, you", 0, 300, 200, 200);
    text("SCROLL UP, CONTINUED STORY", 0, 400, 200, 200);

    text("1. Do you quarantine* yourself in Italy where virus-related cases are on the rise\n\n 2. Book your flight* to your home to New York where cases are on the rise",100,650,450,600);
}

if (state == 1){
  text("You made a hard choice. You are back in your hotel, only two days of quarantine, and you already feel incredibly sick. You call\n a nearby hospital, they send an ambulance for you due to your critical condition. The doctor at the hospital says that you have\n contracted a deadly virus called COVID-19, she concedes that if not treated now, you would die in the next four days.",100,40);
  image(worry,310,150, 600, 350);
  text("1.stay* in your hotel\n\n 2.Ask doctor to treat* you",120,500,450,600);
  text("NO ESCAPE FROM WHAT'S COMING", 0, 200, 200, 200);
  text("TYPE COMMANDS = quarantine, flight, stay, treat, lady, you", 0, 300, 200, 200);
  text("SCROLL UP, CONTINUED STORY", 0, 400, 200, 200);
}
else if (state == 2){
  image(death,210,150, 600, 350);
  text("You die gradually with no treatment.\n I thought you could do better. GAME OVER",100,550,450,600);
  text("PRESS NUM 0 TO START OVER", 0, 400, 200, 200);
}
else if (state == 3){
    text("Finally, you arrived in New York. At the airport, you are tested positive, and you feel incredibly sick. Customs at the airport\n sent you to a nearby hospital. The doctor says the capacity of hospital beds is full; only one bed is left, you and this old lady\n are the only two patients.",100,40);
    image(fly,110,150,600,350);
    image(oldlady,710,80,350,390);
    text("The Doctor says you'll die in few hours, and the old lady will die in a few days, and since you'll most likely die first, Doctor lets you decide:",100,550,450,600);
    text("\n1. let the old lady* take the bed\n\n2. you* take the bed instead",100,600,450,600);
    text("NO ESCAPE FROM WHAT'S COMING", 0, 200, 200, 200);
    text("TYPE COMMANDS = quarantine, flight, stay, treat, lady, you", 0, 300, 200, 200);
    text("SCROLL UP, CONTINUED STORY", 0, 400, 200, 200);
}
else if (state == 4 ){
  image(peace,210,150,600,350);
  text("You die peacefully. And the old lady survives because of you. \nYou saved someone's life! One decision you make can change your and somebody else's destiny. GAMEOVER.",100,550,450,600);
  text("PRESS NUM 0 TO START OVER", 0, 400, 200, 200);

}
else if (state == 5){
  image(death,210,150,600,359);
  text("The Doctor denies your request because the capacity of the hospital is full.\nYou die quickly with no treatment. GAMEOVER",100,600,450,600);
  text("PRESS NUM 0 TO START OVER", 0, 400, 200, 200);

}
else if (state == 6){
  image(hospital,210,150,600,350);
  text("You are taken in ICU but die eventually. Virus was too deadly for you.",100,600,450,600);
  text("PRESS NUM 0 TO START OVER", 0, 400, 200, 200);

}

text(typed, 0, 650, width, 30);

}

function keyPressed(){
if (keyCode == BACKSPACE){
  typed = '';
}

}


function keyTyped(){
  if (key == '0'){
    state = 0;
  } else if (key == '1'){
    state = 1;
  } else if (key == '2'){
    state = 2;
  } else if (key == '3'){
    state = 3;
  } else if (key == '4'){
    state = 4;
  } else if (key == '5'){
    state = 5;
  } else if (key == '6'){
    state = 6;
  }

    else{
    typed += key;
  }

  if (typed == 'quarantine'){
    state = 1;
    typed = '';
  } else if (typed == 'stay'){
    state = 2;
    typed = '';
  } else if (typed == 'flight'){
    state = 3;
    typed = '';
  } else if (typed == 'lady'){
    state = 4;
    typed = '';
  } else if (typed == 'treat'){
    state = 5;
    typed = '';
  } else if (typed == 'you'){
    state = 6;
    typed = '';
  }
}

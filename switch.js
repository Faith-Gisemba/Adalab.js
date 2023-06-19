let a = 20;
switch(a){
    case 30:
        console.log("a is 30");
        break;

    case 40:
        console.log("a is 40");
        break;

    default:
    console.log("a is not found");
    break;

}



let d = 60;
switch(d){
    case 60:
        console.log("d is an awesome starter");
        break;


    case 90:
            console.log("d will love it");
            break;

    default: 
    console.log("it is non of is");
    break
    
}


let dayOfWeek = 900;
let dayName;

switch (dayOfWeek) {
  case 0:
    dayName = 'Sunday';
    break;
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
    break;
    
}
console.log(`Today is ${dayName}`);



let classRoom = 7;
let student;

switch(classRoom){
    case 10:
        student = "Gisemba";
        break;

    case 20:
    student = "Annete";
    break;

    case 7:
        student = "Pauline";
        break;

    default:
        student = "Invalid Name"
        break;
    
}
console.log(`Today ${student} has not atteded classes`)



let num = [10,30,3,8,7,16,45];
for(let i= 0; i<num.length; i++){
    console.log(i);
    console.log(num[i]);

}

for(let i= 0; i < num.length; i++){
    if(i == 3){
        break;
    }
    console.log({"num": num[i]});
}
for(let i= 0; i < num.length; i++){
    if(i == 3){
        continue;
    }
    console.log({"num": num[i]});
}

let nam = [70,60,50,40,30,20,10];
for(let i= 0; i<nam.length; i++){
    console.log(i);
    console.log(nam[i]);
}
for(let i = 0; i <nam.length; i++){
    if(i == 3){
        break;
    }
    console.log({"nam": nam[i]});
}

for(let i = 0; i<nam.length; i++){
    if(i == 2){
        continue;
    }
    console.log({"nam": nam});
}


let kiko = [5,15,25,35,45,55,65,75,85,95];
for(let u = 0; u<kiko.length; u++){
    console.log(u);
    console.log(kiko[u]);
}

for(let u = 0; u<kiko.length; u++){
    if(u == 4){
        break;
    }
    console.log({"kiko":kiko[u]});
}


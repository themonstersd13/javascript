let userScore=0;
let compScore=0;
const res=document.querySelector("#res");
const users=document.querySelector("#user");
const comps=document.querySelector("#comp");
const selu=document.querySelector("#selectuser");
const selc=document.querySelector("#selectcomp");

const gcomp =()=>{
    options=["rock","paper","sci"];
    const indx=Math.floor(Math.random()*3);
    return options[indx];
};
const draw=(user,comp)=>{
    res.innerText="It's Draw";
    users.innerText=userScore;
    comps.innerText=compScore;
    selu.innerText=user;
    selc.innerText=comp;
    res.style.backgroundColor="black";
};

const userwin=(user,comp)=>{
    res.innerText="You won";
    res.style.backgroundColor="green";
    users.innerText=userScore;
    comps.innerText=compScore;
    selu.innerText=user;
    selc.innerText=comp;
    
};

const compwin=(user,comp)=>{
    res.innerText="You loose";
    res.style.backgroundColor="red";
    users.innerText=userScore;
    comps.innerText=compScore;
    selu.innerText=user;
    selc.innerText=comp;
};
const playGame =(user)=>{
    const comp=gcomp();
    if(user===comp)
    {
        //draw
        draw(user,comp);
    }
    else if((user==="paper" && comp==="rock")|| (user==="sci" && comp==="paper")|| (user==="rock" && comp==="sci"))
    {
        //user win
        userScore++;
        userwin(user,comp);
    }
    else{
        //comp win
        compScore++;
        compwin(user,comp);
    }
};
const choices=document.querySelectorAll(".rps");
choices.forEach((rps) => {
    rps.addEventListener("click",()=>{
        const user=rps.getAttribute("id");
        console.log(user);
        playGame(user);
    });
});
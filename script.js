let person=0;
let computer=0;
let choices=document.querySelectorAll(".choice");
let us=document.querySelector("#userscore");
let cs=document.querySelector("#computerscore");
let msg=document.querySelector("#msg");
console.log(choices);
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let cc=Math.floor(Math.random() * 3)+1;
        let c;
        if(choices[0]){
            c=1;
        }
        else if(choices[2]){
            c=2;
        }
        else if(choice[3]==="scissor"){
            c=3;
        }
        
        if(c==cc){
            msg.textContent="draw";
        }
        else if((c===1 && cc===2)|| (c==2 && cc==3)){
            msg.textContent="you lose";
            computer++;
            cs.textContent=computer;
        }
        else{
            msg.textContent="you win";
            person++;
            us.textContent=person;
        }
    })
})
let rb=document.querySelector("#rbtn");
console.log(rb);
rb.addEventListener("click",()=>{
    person=0;
    computer=0;
    cs.textContent=0;
    us.textContent=0;
    msg.textContent="Play your Move"
})

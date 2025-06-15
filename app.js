function calculation(num){

let n = [];
let s = "";

for(let i = 0; i<num.length;i++){
  s += num[i];
  if(num[i+1]=="+"||num[i+1]=="-"||num[i+1]=="X"||num[i+1]=="/"){
    n.push(s);
    s = "";
  }
  if(num[i]=="+"||num[i]=="-"||num[i]=="X"||num[i]=="/"){
    s = "";
    n.push(num[i]);
  }
  if(i == num.length-1){
    n.push(s)
  }
}  

  if(n[0]=="-"){
  n[1] = "-"+n[1];
  n.shift();
}

let total = 0;
let counterP = 0;
let counterMul = 0;
let counterMin = 0;
let counterD = 0;

for(let i = 0;i<n.length;i++){
   if(n[i]=="+" && counterP == 0){
         total = total + Number(n[i-1]); 
         total = total  + Number(n[i+1]);
     counterP ++;
     counterMin++;
     counterMul++;
     counterD++;
   }
  else if(n[i]=="+" && counterP > 0){
    total = total + Number(n[i+1]);
  }

  
    if(n[i] === "-" && counterMin == 0 && i != 0){
     total = Number(n[i-1])- Number(n[i+1]);
       counterMin++;
       counterP++;
        counterMul++;
        counterD++;
   }
     else if(n[i]==="-" && counterMin > 0 && i != 0){
       total = total - Number(n[i+1]);
     }
  
    if(n[i]==="X" && counterMul == 0){
     total = Number(n[i-1]) * Number(n[i+1]);
         counterP +=1;
     counterMin++;
     counterMul++;
     counterD++;
   }
      else if(n[i]==="X" && counterMul > 0){
     total = total * Number(n[i+1]);
   }

    if(n[i]==="/" && n[i+1] != "0" && counterD == 0){
     total = Number(n[i-1]) / Number(n[i+1]);
         counterP +=1;
     counterMin++;
     counterMul++;
     counterD++;
      }
  else if(n[i]==="/" && n[i+1] != "0" && counterD > 0){
     total = total / Number(n[i+1]);
      }
  if(num[i] == "/" && n[i+1] == "0"){
    return "error";
  }
}
  return total;
}




let numbers = document.querySelectorAll("#number");
let operators = document.querySelectorAll("#operator");
let screen = document.querySelector(".screen");
let screenP = document.createElement("p");
let AC = document.querySelector("#Ac");
let Del = document.querySelector("#Del");
let equal = document.querySelector(".equal");

let body = document.querySelector(".body");
numbers.forEach((num)=>{
    num.addEventListener("click",()=>{
        let text1 = document.createTextNode(`${num.textContent}`);
        screenP.appendChild(text1);
        screen.appendChild(screenP);
            if([...screenP.textContent].length > 14){
              screenP.style.fontSize = "medium";
            }

    });
});

operators.forEach((op)=>{
    op.addEventListener("click",()=>{
        let text2 = document.createTextNode(`${op.textContent}`);
         screenP.appendChild(text2);
        screen.appendChild(screenP);
    });
});
    let mom = document.createElement("p");

    equal.addEventListener("click",()=>{
    mom.textContent = calculation([...screenP.textContent]);
    screenP.textContent = mom.textContent;
});

AC.addEventListener("click",()=>{
  screenP.textContent = "";
});
Del.addEventListener("click",()=>{
  
  let non = [...screenP.textContent];
  non.pop();
  screenP.textContent = non.join("");
});
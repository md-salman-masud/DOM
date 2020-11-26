
let name=document.getElementById('name')
console.log(name);
name.addEventListener('keypress',function(event){
    if(event.key==='Enter'){
        document.getElementById('show').innerHTML= `your name is :${event.target.value}`
        event.target.value =''
    }
})

// var a=101;


// var a=new Array[salman,j,true,1];


let skills= document.getElementsByName('skils');
let result=document.getElementById('result')
console.log(result);

let checkedSkills= [];
console.log(checkedSkills);
[...skills].forEach(skil =>{
skil.addEventListener('change',function(event){
 

   if(event.target.checked){
    checkedSkills.push(event.target.value)
       console.log(event.target.value);
       output(result,checkedSkills)
       console.log(checkedSkills);
   }else{}
   let ind= checkedSkills.indexOf( event.target.value)
   checkedSkills.splice(ind,1)
   output(result,checkedSkills)

//    console.log(chekedSkils);
//    console.log(event.target.value);
   console.log(checkedSkills);
})

       
})

function output(parent,skils){
let result='';
skils.forEach((skill ,index)=>{
result +=`(${index +1}) ${skill}  `
})
parent.innerHTML=result
}

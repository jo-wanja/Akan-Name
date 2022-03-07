
function fetchdate(){
document.getElementById("date").value;
let dates =document.getElementById("date").value;

if (dates>"1600-01-01" && dates<"2022-04-01"){

return dates; 
  
}

else{
  return alert("invalid Birthdate!")
}

}


function chooseName(){
  let value= document.getElementById("gender").value;
  let fem = document.getElementById("female").value;
  let masc = document.getElementById("male").value;

  if (value===fem){
    let femaleNames ={
      0: "Akosua",
      1: "Adwoa",
      2: "Abenaa",
      3: "Akua",
      4:  "Yaa",
      5: "Afua",
      6: "Ama"
    };

    let dated=fetchdate();
    let date=new Date(dated);
    let key= date.getDay();
    console.log(key)

    console.log(femaleNames[key]);


    return femaleNames[key];

  }  

    else if(value==="1"){
      return alert("invalid choice!");
    }

    else{

      let maleNames ={
        0: "Kwasi",
        1: "kwadwo",
        2: "Kwabena",
        3: "Kwaku",
        4: " Yaw",
        5: "Kofi",
        6: "Kwame"
         
      }

        let dated= fetchdate();
        let date=new Date(dated);
        let key= date.getDay();
        console.log(key)

        console.log(maleNames[key]);

        return maleNames[key];

    }
}

  function submit(){
     console.log("Your Akan Name is, "+ chooseName());
   
       return document.getElementById("final").innerHTML = ["Your Akan Name is", chooseName()];
   
  } 



 

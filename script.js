const name=document.getElementById("cardholder-name");
const nameOnImg=document.getElementById("card-holder-img");

const cardNumber=document.getElementById("card-number");
const numberOnImg=document.querySelector(".card-number-img");

const month=document.getElementById("month");
const monthOnImg=document.getElementById("month-img");

const year=document.getElementById("year");
const yearOnImg=document.getElementById("year-img");


const cvc=document.getElementById("cvc");
const cvcOnImg=document.querySelector(".cvc-img");

const submitBtn=document.getElementById("submit");
const continueBtn=document.getElementById("continue");


/*Cardname validate*/
name.addEventListener("input", ()=>{
inputName();
});

function inputName(){
    for (let i=0; i<name.value.length; i++){
    if (name.value[i].match(/[a-zA-Z ]/g)) {
        name.value=name.value;
          document.getElementById("nameError").style.visibility="hidden";
    } else {
        name.value="";
       document.getElementById("nameError").style.visibility="visible";
    }
  }
  nameOnImg.innerHTML=name.value;
}

/*number validate*/
cardNumber.addEventListener("input", 
 ()=> {
    numberInput();
});
function numberInput(){
    for (let i=0; i < 16; i++){
    if (cardNumber.value[i].match(/[\d]/g)) {
                cardNumber.value=cardNumber.value;
    
          document.getElementById("numberError").style.visibility="hidden";

    } else {
       cardNumber.value="";
       document.getElementById("numberError").style.visibility="visible";
    }
    };
  
    let  numberFormatted=cardNumber.value.match(/\d{1,4}/g);
    if (numberFormatted !== null) {
    numberFormatted=numberFormatted.join(" ")
};
 cardNumber.value=numberFormatted;
numberOnImg.innerHTML=numberFormatted; 
}

/*month validate*/
month.addEventListener("input", ()=>{
  monthInput();
});
function monthInput(){
      for (let i=0; i<month.value.length; i++){
    if (month.value[i].match(/[\d]/g)) {
        month.value=month.value;
          document.getElementById("expiryError").style.visibility="hidden";
    } else {
        month.value="";
       document.getElementById("expiryError").style.visibility="visible";
    }
    }
    
   monthOnImg.innerHTML=month.value.substring(0,2);
}

/*year validation*/
year.addEventListener("input",()=>{
   yearInput();
});
function yearInput(){
      for (let i=0; i<year.value.length; i++){
    if (year.value[i].match(/[\d]/g)) {
        year.value=year.value;
          document.getElementById("expiryError").style.visibility="hidden";
    } else {
        year.value="";
       document.getElementById("expiryError").style.visibility="visible";
    }
    }
    
   yearOnImg.innerHTML=year.value.substring(0,2);
}
/*cvc*/
cvc.addEventListener("input",()=>{
   cvcInput();
});
function cvcInput(){
      for (let i=0; i<cvc.value.length; i++){
    if (cvc.value[i].match(/[\d]/g)) {
        cvc.value=cvc.value;
          document.getElementById("cvcError").style.visibility="hidden";
    } else {
        cvc.value="";
        document.getElementById("cvcError").style.visibility="visible";
    }
    }
    
    cvcOnImg.innerHTML=cvc.value.substring(0,3)
};

submitBtn.addEventListener("click", (e)=> {
    e.preventDefault();
                      document.querySelector(".form").style.display="none";
        document.querySelector(".thank-you").style.display="flex";
 
});

continueBtn.addEventListener("click",  (e)=> {
    
  document.querySelector(".form").style.display="flex";
    document.querySelector(".thank-you").style.display="none";
    name.value="";
    name.placeholder="e.g. Jane Appleseed";
    nameOnImg.innerHTML="Jane Appleseed";
    cardNumber.value="";
    cardNumber.placeholder="e.g. 1234 5678 9123 0000";
    numberOnImg.innerHTML="0000 0000 0000 0000";
    month.value="";
    month.placeholder="e.g. 1234 5678 9123 0000"
    monthOnImg.innerHTML="00";
    year.value="";
    year.placeholder="YY"
    yearOnImg.innerHTML="00";
    cvc.value="";
    cvc.placeholder="e.g. 123";
    cvcOnImg.innerHTML="000";

});
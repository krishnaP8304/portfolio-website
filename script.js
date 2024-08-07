

// let getgg=document.getElementById("change");
// getgg.addEventListener("click",function(){
//   document.getElementById("home1").style.backgroundColor="white";
//   document.getElementById("home1").style.color="black";
//   document.getElementById("about").style.backgroundColor="white";
//   document.getElementById("about").style.color="black";
//   console.log('hello');
// })

function changeColor(){
  if(document.getElementById("home1").style.backgroundColor=="white")
  {
    document.getElementById("navbar").style.backgroundColor="rgb(196, 179, 179)";
    document.getElementById("navbar").style.color="white";
    document.getElementById("home1").style.backgroundColor="black";
    document.getElementById("home1").style.color="white";
    document.getElementById("about").style.backgroundColor="black";
    document.getElementById("about").style.color="white";
    document.getElementById("skills").style.backgroundColor="black";
    document.getElementById("skills").style.color="white";
    document.getElementById("projects").style.backgroundColor="black";
    document.getElementById("projects").style.color="white";
    document.getElementById("experiences").style.backgroundColor="black";
    document.getElementById("experiences").style.color="white";
    document.getElementById("contact1").style.backgroundColor="black";
    document.getElementById("contact1").style.color="#fff";
    document.getElementById("te-co").style.color="white";
    document.getElementById("te-co1").style.color="white";
    document.getElementById("te-co2").style.color="white";
    document.getElementById("te-co3").style.color="white";
    document.getElementById("te-co4").style.color="white";


  }else{
    document.getElementById("navbar").style.backgroundColor="rgb(196, 179, 179)";
    document.getElementById("navbar").style.color="black";
    document.getElementById("home1").style.backgroundColor="white";
    document.getElementById("home1").style.color="black";
    document.getElementById("about").style.backgroundColor="white";
    document.getElementById("about").style.color="black";
    document.getElementById("skills").style.backgroundColor="white";
    document.getElementById("skills").style.color="black";
    document.getElementById("projects").style.backgroundColor="white";
    document.getElementById("projects").style.color="black";
    document.getElementById("experiences").style.backgroundColor="white";
    document.getElementById("experiences").style.color="black";
    document.getElementById("contact1").style.backgroundColor="white";
    document.getElementById("contact1").style.color="#222";
    document.getElementById("te-co").style.color="black";
    document.getElementById("te-co1").style.color="black";
    document.getElementById("te-co2").style.color="black";
    document.getElementById("te-co3").style.color="black";
    document.getElementById("te-co4").style.color="black";
  }
}

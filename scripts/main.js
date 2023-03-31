
const myImage=document.querySelector("img");


myImage.onclick=()=>{

    const mySrc=myImage.getAttribute("src");
    if(mySrc==="images/website.webp"){
        myImage.setAttribute("src","images/magic.jpg");
    }
    else{
        myImage.setAttribute("src","images/website.webp");
    }
}
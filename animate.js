let W=window.innerWidth,H=window.innerHeight;function change(e){e.style.position="relative",e.style.opacity="0"}function animateX(e,t){change(e);let o=e.getBoundingClientRect();"U"==t&o.top<.85*H&&e.classList.add("fadeup"),"L"==t&o.top<.85*H&&e.classList.add("fadeleft"),"R"==t&o.top<.85*H&&e.classList.add("faderight"),"J"==t&o.top<.85*H&&(e.style.justifyContent="space-between")}function animate2(){elementsU=document.getElementsByClassName("animateU");for(let e=0;e<elementsU.length;e++)animateX(elementsU[e],"U");elementsR=document.getElementsByClassName("animateR");for(let e=0;e<elementsR.length;e++)animateX(elementsR[e],"R");elementsL=document.getElementsByClassName("animateL");for(let e=0;e<elementsL.length;e++)animateX(elementsL[e],"L")}let moon=document.getElementById("moon"),sun=document.getElementById("sun"),mode=document.getElementById("mode"),body1=document.getElementById("body");function changeMode(){moon.classList.toggle("op0"),sun.classList.toggle("op0"),mode.classList.toggle("modeC"),body1.classList.toggle("darkMode")}let darkMode=localStorage.getItem("darkMode");const enableDarkMode=()=>{moon.classList.remove("op0"),sun.classList.add("op0"),mode.classList.add("modeC"),body1.classList.add("darkMode"),localStorage.setItem("darkMode","enabled")},disableDarkMode=()=>{moon.classList.add("op0"),sun.classList.remove("op0"),mode.classList.remove("modeC"),body1.classList.remove("darkMode"),localStorage.setItem("darkMode",null)};"enabled"===darkMode&&enableDarkMode(),mode.addEventListener("click",()=>{"enabled"!==(darkMode=localStorage.getItem("darkMode"))?enableDarkMode():(moon.classList.add("op0"),sun.classList.remove("op0"),mode.classList.remove("modeC"),body1.classList.remove("darkMode"),localStorage.setItem("darkMode",null))});

function viewPDF(){
    let PDF = document.getElementById("pdfviewer");
    PDF.classList.add("pdfON");
    let blackP = document.getElementById("blackPDF");
    blackP.classList.add("pdfON");
    console.log("works");
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
}

function pdfOFF(){
    let PDF = document.getElementById("pdfviewer");
    PDF.classList.remove("pdfON");
    let blackP = document.getElementById("blackPDF");
    blackP.classList.remove("pdfON");
    console.log("works00");
    document.body.style.height = "";
    document.body.style.overflow = "";
}
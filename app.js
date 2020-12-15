var url="https://api.funtranslations.com/translate/morse.json";
//var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var inpTxt=document.querySelector("#input-txt");
var opTxt=document.querySelector("#output-txt");
var btnClick=document.querySelector("#btn");
var output;

function errorHandle(error){
    console.log("Error occured:",error);
    alert("Oops!! Something went wrong please try again later");
}

function eventHandler() {
    var ip=inpTxt.value;
    var urlUpdate=""+url+"?text="+ip;
    fetch(urlUpdate)
    .then (r => r.json())
    .then (json => 
        {output=json.contents.translated
            opTxt.innerText=""+output})
    .catch(errorHandle);
};

btnClick.addEventListener("click",eventHandler);




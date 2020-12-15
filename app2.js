var inpTxt2=document.querySelector("#input-txt2");
var opTxt2=document.querySelector("#output-txt2");
var btn2Click=document.querySelector("#btn2");
var output2;
var url2="https://api.funtranslations.com/translate/morse2english.json";
function errorHandle(error){
    console.log("Error occured:",error);
    alert("Oops!! Something went wrong please try again later");
}
function eventHandler2() {
    var ip=inpTxt2.value;
    var urlUpdate=""+url2+"?text="+ip;
    fetch(urlUpdate)
    .then (r => r.json())
    .then (json => 
        {output2=json.contents.translated
            opTxt2.innerText=""+output2})
    .catch(errorHandle);
};
btn2Click.addEventListener("click",eventHandler2);
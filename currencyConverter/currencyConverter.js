let select=document.querySelectorAll("select");
let btn=document.querySelector("form button");
let url="";
for( opt of select)
{
    for(let country in countryList)
{
    let newOption=document.createElement("option");
    newOption.innerText=country;
    newOption.value=country;
    opt.append(newOption);
}
opt.addEventListener("change",(evt)=>{
    flagChange(evt.target);
});
}
const flagChange=(element)=>{
    let countryCode=element.value;
    let country=countryList[countryCode];
    let imgurl=`https://flagsapi.com/${country}/flat/64.png`;
    let imgsrc=element.parentElement.querySelector("img");
    imgsrc.src=imgurl;
};
async function copilot(c2) {
    let response = await fetch(url);
    let data = await response.json();
    return data[c2];
}

async function endgame(val, c1, c2) {
    let output = document.querySelector("#output");
    let conversionRate = await copilot(c2);
    let finalVal = val * conversionRate;
    let p1 = val + " " + c1;
    let p2 = " = ";
    let p3 = finalVal + " " + c2;
    output.innerText = (p1 + p2 + p3).toUpperCase();
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let inputvalue = document.querySelector("form input");
    let amount = inputvalue.value;
    let c1 = document.querySelector("#from").value.toLowerCase();
    let c2 = document.querySelector("#to").value.toLowerCase();
    url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${c1}/${c2}.json`;
    await endgame(amount, c1, c2);
});

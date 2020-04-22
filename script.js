let ii=1
let i
var num
var total=1
function chngeVar(){
  num = document.getElementById("len-input").value
    // console.log(num)
  fetch(`https://api.lenny.today/v1/random?limit=${num}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    //     console.log(data[0].face);
    function ButnMkr() {
      let more = document.getElementById("mainDiv");
      for ( i = 0; i < data.length; i++) {
        let butn = document.createElement("button");
        butn.innerHTML = data[i].face;
        butn.id = "len" + [ii];
        console.log(ii)
        ii++;
        
        butn.onclick = function() {
          copyClipboard(this.id);
        };
        more.appendChild(butn);
      }
    }
    ButnMkr();
  });
}

function copyClipboard(clicked_id) {
  let str = document.getElementById(clicked_id).innerHTML;
  let el = document.createElement("textarea");
  el.setAttribute("readonly", "");
  el.style = { position: "absolute", left: "-9999px" };
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

function clearButton(){
  // for (  i=ii-num;i<ii;i++){ // WORKS FOR query and id
    for (i=0;i<ii;i++){
    // let delbut=document.getElementById("mainDiv").querySelectorAll('button')
    let delbut=document.getElementById("mainDiv").querySelector('button') // REMOVES LAST PLACED BUTTONS
    
    // let delbut=document.getElementById(`len${i}`) //WORKS ONCE
    console.log(delbut)
    delbut.parentNode.removeChild(delbut)
  }
}
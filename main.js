var dis=document.getElementById("display");
var source=document.getElementById("source");
var btn_left=document.getElementById("previous");
var btn_right=document.getElementById("next");
var pictures_url=[
    "https://s.yimg.com/ny/api/res/1.2/12UU2JphAsbxTTDca.7QFQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9MTA4MDtoPTcxNg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae",
    "https://s.yimg.com/ny/api/res/1.2/kg38FzK75DJKJT8asCKihA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9MTI4MDtoPTk2MA--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/c3c38fd0-112f-11ea-971f-520366d3b67f",
    "https://s.yimg.com/ny/api/res/1.2/rmfGib4xoF6pQnYbWhXxAg--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9MTI4MDtoPTk2MA--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7bd51710-112b-11ea-b76f-d315edec6306",


]
var current_idx=0

const refresh=() => {
    if(current_idx==0) btn_left.classList.add("disabled");
    else btn_left.classList.remove("disabled");
    if(current_idx==pictures_url.length-1) btn_right.classList.add("disabled");
    else btn_right.classList.remove("disabled");
    display.src="./images/loading.gif";
    source.firstElementChild.href=pictures_url[current_idx];
    source.firstElementChild.textContent=pictures_url[current_idx];
    new Image().src=pictures_url[current_idx];
    display.src=pictures_url[current_idx];
    
};

var previous=document.getElementById("previous");
var next=document.getElementById("next");

previous.addEventListener( "click" , function() {
    current_idx--;
    if(current_idx>-1){
        refresh();
    }
    else{
        current_idx++;
        alert('it\'s the top of the picture viewer');
    }
});

next.addEventListener( "click" , function() {
    current_idx++;
    if(current_idx<pictures_url.length){
        refresh();
    }
    else{
        current_idx--;
        alert('it\'s the end of the picture viewer');
    }
});






refresh();
let calculate=document.getElementById("calculate");
let youbill=document.getElementById("youbill");

calculate.addEventListener("click",function(){
    let billAmount=document.getElementById("billAmount").value;
    let numberofGuests=document.getElementById("numberofGuests").value;
    let quality=document.getElementById("quality").value;

    let tip=Math.round((billAmount/numberofGuests)*quality)
    document.getElementById("billAmount").value=""
    document.getElementById("numberofGuests").value=""
    document.getElementById("quality").value=""
    if(tip=="NaN"){
        youbill.innerText=`Tip $0 each`;
    }
    else{
        youbill.innerText=`Tip  $${tip} each`;
    }

    document.getElementById("youramount").style.display="block"
})


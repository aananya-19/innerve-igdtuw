countvisits();
function countvisits(){
    fetch('https://api.countapi.xyz/update/form/register/?amount=1')
    .then((res)=>res.json())
    .then((res)=>{
        if(res.value<=1200)
        {
            document.getElementById("form2").classList.add("formdisappear");
        }
        else{
            document.getElementById("form1").classList.add("formdisappear");
        
        }
    })
}

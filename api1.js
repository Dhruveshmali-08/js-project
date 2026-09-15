let url="https://dog.ceo/api/breeds/image/random/alt";
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    try{
        let res=await axios.get(url);
        console.log(res.data.message);
        let image=document.querySelector("img").src=res.data.message;
    }
    catch(e){
        console.log("error-",e)
    }
});

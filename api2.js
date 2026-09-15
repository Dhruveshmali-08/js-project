let url="http://universities.hipolabs.com/search?name=India";
        let li=document.querySelector("ul");

async function api2() {
        try{

        let res=await axios.get(url);
        console.log(res.data)
        
        for(let i=0;i<res.data.length;i++)
            {
            let list=document.createElement("li");
            list.appendChild(li);
            console.log(res.data[i].name,i);
            list.innerText=res.data[i].name;
        }      

    }
    catch(e){
        console.log("error-",e)
    }
}
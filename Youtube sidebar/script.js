const openMenu = document.querySelector("#menu-bars")
const hideMenuIcon=document.querySelector("#hide-menu")
const sideMenu= document.querySelector("#nav-menu")

openMenu.addEventListener("click",function(){
    sideMenu.classList.add('active')
})

hideMenuIcon.addEventListener("click", function(){
    sideMenu.classList.remove('active')
})






//data append


const search_result_div = document.getElementById("search-results");


const searchVideos = async () =>{
    try{
        let inp = document.getElementById("search").value;

        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inp}&key=AIzaSyDTj1t-sZJKsq_g3OVEpOi2B8tn4FHxR90&maxResults=15`);

        let data = await res.json();

        let videos= data.items;

        appendVideos(videos)
console.log("videos:",videos)

        // return videos;
       // console.log("data:",data)  
    }
catch(error){
console.log("error:",error)
}

    }
const appendVideos = (data)=>{
search_result_div.innerHTML=null;

try{

data.forEach(({snippet:{title,thumbnails}, id:{videoId}})=>{

let div = document.createElement('div')

let name= document.createElement('h3')
name.innerText= title;
// name.style.fontSize="10px"

let img1 = document.createElement("img")
img1.src=thumbnails.medium.url;


//  function thmb(){
//     window.location.href="videoplay.js"
//     alert("Hiii")
 
    let iframe= document.createElement('iframe')
iframe.src= `https://www.youtube.com/embed/${videoId}`
iframe.style.display="none"
iframe.allow="fullscreen"
//  };







div.append(img1,title)

search_result_div.append(div)

localStorage.setItem("Youtube",search_result_div)

});
}
catch(error){
    console.log("error",error)
}

}




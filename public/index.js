
const root = document.querySelector('#root')


//  function getUsers(e){
     
//     console.log('get users')

//     fetch('/get-users')
//     .then(r=>r.json())
//     .then(data=>{
//         console.log('then')
//         renderUsers(data)
//     })
//     console.log('after fetch')
//  }

// function renderUsers(users){
//     let html = '';
//     users.forEach(user=>{
//         html += `<p>Name: ${user.name}</p>`
//     }) 

//     root.innerHTML = html
// }

function handleSubmits(e){
    
    //  e.preventDefualt();
     let imagename=e.target.elements.username.value;
     let count=0;
     fetch('/addImg',{
         method:'POST',
         headers:{'Content-Type': 'application/json'}, body: JSON.stringify({imagename,count})
     })
     .then(r=>r.json())
     .then(data=>{console.log(data)})
    //  console.log(imagename)
    //  console.log("hy")
}



 function getUsers(e){
     
    console.log('get users')

    fetch('/get-users')
    .then(r=>r.json())
    .then(data=>{
        console.log('then')
        renderUsers(data)
    })
    console.log('after fetch')
 }

  function myScript(){
      let html='<p> hhhhh</p>'
      root.innerHTML = html
  }
function renderUsers(users){
    let html = '';
    let html2='';
    users.forEach(user=>{
        console.log(user)
        html += ` <img src="${user.imagename} alt="heba"> 
        <span  onclick="starmark(this)" id="1one+${user.imagename}" style="font-size:40px;cursor:pointer;" class="fa fa-star checked"></span>
        <span   onclick="starmark(this)" id="2one+${user.imagename}"  style="font-size:40px;cursor:pointer;" class="fa fa-star "></span>
        <span  onclick="starmark(this)" id="3one+${user.imagename}"  style="font-size:40px;cursor:pointer;" class="fa fa-star"></span>
        <span  onclick="starmark(this)" id="4one+${user.imagename}"  style="font-size:40px;cursor:pointer;" class="fa fa-star"> </span> 
        <span  onclick="starmark(this)" id="5one+${user.imagename}"  style="font-size:40px;cursor:pointer;" class="fa fa-star"></span>`
        
    }) 

    root.innerHTML = html
 }

 var count;

function starmark(item)
{
count=item.id[0];
sessionStorage.starRating = count;
var subid= item.id.substring(1);
var imagename=item.id.substring(5);
for(var i=0;i<5;i++)
{
if(i<count)
{
document.getElementById((i+1)+subid).style.color="orange";
 //console.log(subid)

}
else
{
document.getElementById((i+1)+subid).style.color="black";
}


}
fetch('/addRate',{
    method:'POST',
    headers:{'Content-Type': 'application/json'}, body: JSON.stringify({imagename,count})
})
.then(r=>r.json())
.then(data=>{console.log(data)})

}




function result()
{
    

    fetch('/get-users')
    .then(r=>r.json())
    .then(data=>{
        console.log('then')
        renderUsers2(data)
    })
    
}



function renderUsers2(users){
    let html = '';
    let html2='';
    users.sort(function(a,b){return (-1*(a.count-b.count))});
    users.forEach(user=>{
        console.log(user)
        html += ` <div> <img src="${user.imagename} alt="heba"> <h8>${user.count} <h8>
          </div> `
        
    }) 

    root.innerHTML = html
 }
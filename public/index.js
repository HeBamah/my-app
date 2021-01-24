
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
     fetch('/addImg',{
         method:'POST',
         headers:{'Content-Type': 'application/json'}, body: JSON.stringify({imagename})
     })
     .then(r=>r.json())
     .then(data=>{console.log(data)})
    //  console.log(imagename)
    //  console.log("hy")
}
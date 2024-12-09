async function getdata()
{
   let data = await fetch("http://localhost:3000/allow")
   let res = await data.json()
   let a = document.querySelector("#output")
   a.innerHTML = res.map((e)=>`
  <tr>
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.size}</td>
    <td>${e.calories}</td>
     <td>${e.price}</td>

    <td><button onclick ="edit('${e.id}')">Edit</button></td>
  </tr>

   `).join(" ")
}


function insert()
{
    let data = {
        name : document.querySelector("#name").value,
       size : document.querySelector("#size").value,
      calories : document.querySelector("#calories").value,
       price : document.querySelector("#price").value
    }
    fetch("http://localhost:3000/allow" , {
        method : "POST" ,
        body : JSON.stringify(data)
    })
    return false;
}





async function edit(id)
{ 
    let data =await fetch(`http://localhost:3000/allow/${id}`)
    let res =await data.json()
let a = document.querySelector("#update")
       a.innerHTML = `
        <input type="text"  value = "${res.id}" id="id1" readonly> <br> <br>
        <input type="text"  value = "${res.name}" id="name1"> <br> <br>
        <input type="text" value = "${res.size}" id="age1"> <br> <br>
        <input type="text"  value = "${res.calories}" id="country1"> <br> <br>
         <input type="text"  value = "${res.price}" id="average1"> <br> <br>
     <button onclick = "update('${res.id}')">Update</button>

`

}




//  <<<<<<<<<<<<<<<<<<<<<<<UPDATE>>>>>>>>>>>

function update(id){
    let fdata={
        name: document.querySelector("#name1").value,
       size: document.querySelector("#size1").value,
        calories: document.querySelector("#calories").value,
        price: document.querySelector("#price").value
    }

    fetch(`http://localhost:3000/allow/${id}`,{
        method:'PUT',
        // headers : {
        //     'content-type':'application/json'
        // },
        body:JSON.stringify(fdata)
    })
     .then(r=>alert("updated"))
}
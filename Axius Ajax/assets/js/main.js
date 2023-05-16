let row = document.querySelector(".row");
axios.get('https://jsonplaceholder.typicode.com/posts').then(res =>{
   for (let i = 0; i < res.data.length; i++) {
    console.log(res.data[i].title)
    row.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <h2 class="card-title">${res.data[i].title}</h2>
        <div class="card-body">
        <p class="card-text">${res.data[i].body}</p>
        </div>
    </div>`

   }
})

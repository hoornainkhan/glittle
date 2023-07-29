const url = 'https://api.github.com/users';
let search = document.querySelector('.search');
let searchButton = document.querySelector('#searchButton');
let scaning = document.querySelector('.scaning');

search.addEventListener("click", (e) => {
    e.preventDefault();
    if(searchButton.value){
          setTimeout(() => {
            getUserDetails(`${url}/${searchButton.value}`);
          },1000);
            
        }
})

function showUserDetails(data){
    let card = document.querySelector('#card');
    card.innerHTML=`
    <div class="iu">
        <div class="img">
            <img src="${data.avatar_url}" alt="avatar" id="avatar">
        </div>
        <div class="username">
            <h2 id="username">${data.name}</h2>
            <h4 id="userid">ID: ${data.id}</h4>
        </div>
        </div>
        <div class="data">
            <div><p id="reposit">Public Repositories: ${data.public_repos}</p></div>
            <div><p id="date">Created At: ${data.created_at}</p></div>
            <div><p id="followers">Followers: ${data.followers}</p></div>
        </div>
    `
}


async function getUserDetails(url){
    let request =await fetch(url)
    .then (async (request) =>{
        return await request.json();

    })
    .then((response) =>{
      if(response.name===null){
        alert("User not found!!");
        location.reload();
      }else{
        // console.log(reponse);
        showUserDetails(response);
      }
      }).catch((error)=>{
      alert("USER NOT FOUND!!");
        console.log(error);

    })

}


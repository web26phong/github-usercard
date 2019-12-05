/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/PHONGdotTech")
  .then(response => {
    document.querySelector(".cards").appendChild(createCard(response.data));
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["IsabellaGuo", "lisabpink", "CAM603", "Adammonast", "FreedomWriter"];

followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`)
    .then(response => {
      document.querySelector(".cards").append(createCard(response.data));
    })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>


*/

function createCard(anObject){
  const card = document.createElement("div");
  const objectImg = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const username = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const profileLink = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username");

  profileLink.href=anObject.html_url;
  objectImg.src=anObject.avatar_url;
  name.textContent = anObject.name;
  username.textContent = anObject.login;
  location.textContent = `Location: ${anObject.location}`;
  profile.textContent = "Profile: ";
  profileLink.textContent = anObject.html_url;
  followers.textContent = `Followers: ${anObject.followers}`;
  following.textContent = `Following: ${anObject.following}`;
  bio.textContent = `Bio: ${anObject.bio}`;

  profile.append(profileLink);
  cardInfo.append(name, username, location, profile, followers, following);
  card.append(objectImg, cardInfo);

  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

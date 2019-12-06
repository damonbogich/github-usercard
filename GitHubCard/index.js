/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// axios.get('https://api.github.com/users/damonbogich')
//   .then(response => {
//     console.log(response);
//   })
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

//setting where to append my card

//make object iterable 

const entryPoint = document.querySelector('.cards');

axios.get('https://api.github.com/users/damonbogich')
  .then(response => {
    console.log(response.data);
    const myCard = githubCard(response.data);
    entryPoint.appendChild(myCard);
})
.catch (err => {
  console.log(err);
})
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/damonbogich/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "crutledgedev",
  "squashgray",
  "ethyl2",
  "lyndsiWilliams",
  "bseverino",
  "leachcoding",
  "aaronjan98"
];

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(response => {
    console.log(response.data)
    // response.data.forEach(data => {
    //   console.log(data);
    //   const followerCard = githubCard(data);
    //   entryPoint.appendChild(followerCard);

    // })
    const follower = githubCard(response.data);
    entryPoint.appendChild(follower);


  })
  .catch(err => {
    console.log(err);
  })
})


// axios.get('https://api.github.com/users/damonbogich/followers')
//   .then(response => {
//     console.log(response);
//     //for each object in the array
//     response.data.forEach(data => {
//       //                    my function with array of objects as argument... makes card for each follower
//       console.log(data);
//       const followerCards = githubCard(data)
//       //append the cards to the entry point
//       entryPoint.appendChild(followerCards);
//     })
//   })
//   .catch (err => {
//     console.log(err);
//   })

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
function githubCard(person){
  //create elements
  const card = document.createElement('div');
  const image = document.createElement('img');
  const info = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const url = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // append
  card.appendChild(image);
  card.appendChild(info);

  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(location);
  info.appendChild(profile);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  profile.appendChild(url);

  //classes
  card.classList.add('card');
  info.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  //content
  image.src = person.avatar_url;
  name.textContent = person.name;
  username.textContent = `Username: ${person.login}`;
  location.textContent = `Location: ${person.location}`;
  profile.textContent = `Profile: ${person.url}`;
  // url.href = person.url;
  followers.textContent = person.followers;
  following.textContent = person.following;
  bio.textContent = person.bio;



return card;


}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

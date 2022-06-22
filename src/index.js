console.log(data);

// WRITE YOUR CODE BELOW!

// Step 1: Download the template and open it with VS Code
// Step 2: Explore the HTML and the data
// Step 3: Read the instructions carefully
// Step 4: Query the elements that we will need to use from the page
// Step 5: Create a function for every action we will need to perform (i.e. addDogListItem, displayDog)
// Step 6: Start writing one function at a time, testing along the way to make sure things work the way we expect them to
// Step 7: Call the functions when we need to (i.e. call addDogListItem for each dog available whent he app starts, call displayDog when we click a dog list item, etc)

// Instructions:
// - You'll find a variable called data in the console.log. That's your list of dogs
// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - There should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog

// We need to add the dogs in the list
let dogList = document.querySelector('.dogs-list')
// We need the section where the dog clicked will be displayed
let dogSection = document.querySelector('.main__dog-section')

function addDogListItem(dog) {
//   <li class="dogs-list__button">Mr. Bonkers</li>
  let addDogLiEl = document.createElement('li')
  addDogLiEl.className = 'dogs-list__button'
  addDogLiEl.textContent = dog.name
  dogList.append(addDogLiEl)
}

function displayDog(dog) {
  // Remove previous content
  dogSection.textContent = ''

  // Add dog info

  let h2El = document.createElement("h2")
  h2El.textContent = "Mr.Bonkers"
  

  let imgEl = document.createElement("img")
  imgEl.src = "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
  imgEl.alt =""
  

  let divEl = document.createElement("div")
  divEl.className = "main__dog-section__desc"
  
  let h3El = document.createElement("h3")
  h3El.textContent = "Bio"
 
  let pElBio = document.createElement("p")
  pElBio.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
    minima voluptates libero cumque rerum consequatur optio aliquid sint
    eum maxime illo laborum omnis quo ab rem cupiditate nulla
    perspiciatis`
  
  let divEl2 = document.createElement("div")
  divEl2.className = "main__dog-section__btn"
  
  
  
  let pEl2 = document.createElement("p")
  pEl2.className = "p-yes-no"
  pEl2.textContent = "yes!"
  let emEl = document.createElement("em")
  emEl.textContent = "Is naughty?"
  let buttonEl = document.createElement("button")
  buttonEl.textContent = "Good dog!"
 
  buttonEl.addEventListener('click', function (event) {

    if (buttonEl.textContent === "Good dog!") {
        pEl2.textContent = ''
        pEl2.append(emEl)
        pEl2.textContent += "No!"
        buttonEl.textContent = "Bad dog!"
    }

    else if (buttonEl.textContent === "Bad dog!") {
        pEl2.textContent = ''
        pEl2.append(emEl)
        pEl2.textContent += "Yes!"
        buttonEl.textContent = "Good dog!"
    }

})

  pEl2.append(emEl)
  divEl.append(h3El,pElBio)
  dogSection.append(h2El,imgEl,divEl,h3El,pElBio,divEl2,pEl2,buttonEl)
}
displayDog()

for (let dog of data) {
  addDogListItem(dog)
  displayDog(dog)

}



// <!-- This is a template for the main dog card -->

// <!-- <section class="main__dog-section">
//         <h2>Mr. Bonkers</h2>
//         <img
//           src="https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
//           alt=""
//         />
//         <div class="main__dog-section__desc">
//           <h3>Bio</h3>
//           <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
//             minima voluptates libero cumque rerum consequatur optio aliquid sint
//             eum maxime illo laborum omnis quo ab rem cupiditate nulla
//             perspiciatis ipsum!
//           </p>
//         </div>
//         <p><em>Is naughty?</em> yes!</p>
//         <button class="main__dog-section__btn">Good dog!</button>
//   </section>  -->

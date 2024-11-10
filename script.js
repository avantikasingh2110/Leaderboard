let players_container = document.getElementById("players_container");
let score_btn = document.getElementById("score_btn");
let firstName = document.querySelector(".fname");
let lastName = document.querySelector(".lname");
let country = document.querySelector(".country");
let score = document.querySelector(".score");
let playersArray = []; // Array to store players

score_btn.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Button clicked");

    if (firstName.value === "" || lastName.value === "" || country.value === "" || score.value === "") {
        alert("Please fill all the information.");
    } else {
        // Create player object
        let player = {
            firstName: firstName.value,
            lastName: lastName.value,
            country: country.value,
            score: Number(score.value)
        };
        
        // Add player to array
        playersArray.push(player);

        // Sort and display players in descending order
        sortAndDisplayPlayers();

        // Clear input fields
        firstName.value = "";
        lastName.value = "";
        country.value = "";
        score.value = ""; 
    }
});

function sortAndDisplayPlayers() {
    // Sort playersArray by score in descending order
    playersArray.sort((a, b) => b.score - a.score);

    // Clear existing players in the container
    players_container.innerHTML = "";

    // Display all players in sorted order
    playersArray.forEach(player => displayPlayer(player));
}

function displayPlayer(player) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("newDiv");
    players_container.appendChild(newDiv);

    let name = document.createElement("p");
    name.textContent = `${player.firstName} ${player.lastName}`;
    newDiv.appendChild(name);

    let countryName = document.createElement("p");
    countryName.textContent = player.country;
    newDiv.appendChild(countryName);

    let playerScore = document.createElement("p");
    playerScore.textContent = player.score;
    newDiv.appendChild(playerScore);

    let subtractBtn = document.createElement("button");
    subtractBtn.innerText = "-5";
    subtractBtn.addEventListener("click", () => {
        player.score -= 5;
        sortAndDisplayPlayers();
    });
    newDiv.appendChild(subtractBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.addEventListener("click", () => {
        playersArray = playersArray.filter(p => p !== player);
        sortAndDisplayPlayers();
    });
    newDiv.appendChild(deleteBtn);

    let addBtn = document.createElement("button");
    addBtn.innerText = "+5";
    addBtn.addEventListener("click", () => {
        player.score += 5;
        sortAndDisplayPlayers();
    });
    newDiv.appendChild(addBtn);
}


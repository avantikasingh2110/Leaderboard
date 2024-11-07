let players_container = document.getElementById("players_container");
let score_btn = document.getElementById("score_btn");
let firstName = document.querySelector(".fname");
let lastName = document.querySelector(".lname");
let country = document.querySelectorAll(".country");
let score = document.querySelector(".score");

score_btn.addEventListener("click", function(e){
    e.preventDefault();

    if(firstName.value === "" || lastName.value === "" || country.value === "" || score.value === ""){
        alert("Please fill all the information.")
    }
    else if(firstName.value !== "" && lastName.value !== "" && country.value !== "" && score.value !== ""){
        let newDiv = document.createElement("div");
        newDiv.classList = ("newDiv");
        players_container.appendChild(newDiv);

        let name = document.createElement("p");
        name.textContent = firstName.value + " " +  lastName.value;
        newDiv.appendChild(name);

        let countryName = document.createElement("p");
        countryName.textContent = country.value;
        newDiv.appendChild(countryName);

        let playerScore = document.createElement("p");
        playerScore.textContent = score.value;
        newDiv.appendChild(playerScore);

        let substract_btn = document.createElement("button");
        substract_btn.innerText = "-5";
        substract_btn.addEventListener("click", () => {
            playerScore.value -=5;
            playerScore.textContent = playerScore.value;
        })
        newDiv.appendChild(substract_btn);

        let delete_btn = document.createElement("button");
        delete_btn.innerText = "❌";
        delete_btn.addEventListener("click", () => {
            newDiv.remove();
        })
        newDiv.appendChild(delete_btn);

        let add_btn = document.createElement("button");
        add_btn.innerText = "+5";
        add_btn.addEventListener("click", () => {
            playerScore.value +=5;
            playerScore.textContent = playerScore.value;
        })
        newDiv.appendChild(add_btn);

        firstName.value = "";
        lastName.value = "";
        country.value = "";
        score.value = ""; 
    }
})

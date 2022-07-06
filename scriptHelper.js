// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
    <ol>
        <li>Name:${name} </li>
        <li>Diameter:${diameter} </li>
        <li>Star: ${star}</li>
        <li>Distance from Earth:${distance} </li>
        <li>Number of Moons: ${moons} </li>
    </ol>
    <img src=" ${imageUrl}">`;
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    };

    if (isNaN(testInput)) {
        return "Not a Number"
    } else {
        return "Is a Number";
    };
};



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if (validateInput(list) === "Empty" ||
        validateInput(pilot) === "Empty" ||
        validateInput(copilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" ||
        validateInput(cargoLevel) === "Empty") {
            alert("Please input all fields");


        list.style.visibility = "";
        document.getElementById("launchStatus").style.color = "";
        document.getElementById("launchStatus").innerHTML = `Awaiting Information Before Launch`;


    }

    else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("You need to enter a number for the Fuel level and Cargo Level")
    }
    else {
        let pilotStatus = document.getElementById("pilotStatus")
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        let copilotStatus = document.getElementById("copilotStatus")
        copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`;
        let fuelStatus = document.getElementById("fuelStatus")
        fuelStatus.innerHTML = `Fuel level is perfect for launch`;
        let cargoStatus = document.getElementById("cargoStatus")
        cargoStatus.innerHTML = `Cargo mass is perfect for launch`;
        let launchStatus = document.getElementById("launchStatus");

        if (fuelLevel < 10000) {

            list.style.visibilty = "visible";
            fuelStatus.innerHTML = `There is not enough fuel for the journey`;
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red";
        }

        if (cargoLevel > 10000) {

            list.style.visibilty = "visible";
            cargoStatus.innerHTML = `There is too much mass for the shuttle to take off`;
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red";
        }


        if (fuelLevel >= 10000 && cargoLevel <= 10000) {
            launchStatus.innerHTML = `Shuttle Ready for Launch`;
            launchStatus.style.color = "green";
        };
    }




}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {

    // generate a number from 0-5
    let index = Math.floor(Math.random() * 6);
    return planets[index];


}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

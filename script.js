// Write your JavaScript code here!

//const { formSubmission, myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = this.document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
let pilotName = document.querySelector("input[name=pilotName]");
let copilotName = document.querySelector("input[name=copilotName]");
let fuelLevel = document.querySelector("input[name=fuelLevel]");
let cargoMass = document.querySelector("input[name=cargoMass]");
let list = document.getElementById("faultyItems");
/*if ( pilotName.value === "" || copilotName.value === ""|| fuelLevel.value === ""|| cargoMass.value === "") {
    alert("All fields are required!");
    event.preventDefault();
    ;}
    else{ */
    formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
    
});



   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let selection = pickPlanet(listedPlanets);
       addDestinationInfo(document, selection.name, selection.diameter, selection.star, selection.distance, selection.moons, selection.image);

  
    })
   

});
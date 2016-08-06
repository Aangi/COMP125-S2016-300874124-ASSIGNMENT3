/*
Filename : App.js
@author Aayushi Shah
@date August 5,2016
StudentID : 300874124
website : http://comp125-s2016-300874124-assignment3.azurewebsites.net/
@description : This file is the main javascript file for this web site
*/
/* main javascript file  */
//IIFE - Immediately Invoked Function Expression
(function() {

    "use strict";
    // code codes in here 

    // define an array of HTML elements
    var paragraphElements = [];

    paragraphElements[0] = document.getElementById("aboutPara");
    paragraphElements[1] = document.getElementById("projectsPara");
    paragraphElements[2] = document.getElementById("TravellingPara");
    paragraphElements[3] = document.getElementById("PaintingPara");
    
    // define your paragraphs array
    var paragraphs = [];

        //create a reference to the firstname field
    var firstName = document.getElementById("firstName");
    //create a reference to the lastname field
    var lastName = document.getElementById("lastName");
    //create a reference to the email field
    var email = document.getElementById("email");
    //create a reference to the contactNumber field
    var contactNumber = document.getElementById("contactNumber");
    //create a reference to the message field
    var message = document.getElementById("message");

    //create a reference to the form
    var contactForm = document.getElementById("contactForm");

    if (contactForm){
    //event listener with inline anonymous event handler function
    contactForm.addEventListener("submit",function(event){
        event.preventDefault();
        showFormInput();
        contactForm.reset();
    });
    }

    function showFormInput() {
        console.log("*****************************");
        console.log("First Name: "+firstName.value);
        console.log("*****************************");
        console.log("Last Name: "+lastName.value);
        console.log("*****************************");
        console.log("Email: "+email.value);
        console.log("*****************************");
        console.log("Contact Number: "+contactNumber.value);
        console.log("*****************************");
        console.log("Message: "+message.value);
        console.log("*****************************");

    }

    // assignment 3 starts here
     var xhrMyData;
    
    //This function reads data from the paragraphs.json file and aligns them with their 
     // respective ID's with the innerHTML using the if statement 

    function readData() {
        if ((xhrMyData.readyState === 4) && (xhrMyData.status === 200)) {

            var MyData = JSON.parse(xhrMyData.responseText);
            var paragraphs = MyData.paragraphs;
            paragraphs.forEach(function (paragraph) {
                var paragraphElements = document.getElementById(paragraph.id);
                //looks for the element id and aligns it with the paragraphs in the html
                if(paragraphElements) {
                     paragraphElements.innerHTML = paragraph.content;
                }
               
            }, this);
        }
    }
    
    //This functions loads data from the paragraph.json file to the html file
    
    function loadData(){
        xhrMyData = new XMLHttpRequest();
        xhrMyData.open("GET","Scripts/paragraphs.json",true);
        xhrMyData.send(null);
        xhrMyData.addEventListener("readystatechange",readData);
    }
    function init() { 
     //calls the loadData function 
        loadData();
     };
     //loads the init function after loading all the html functions 
    window.addEventListener("load",init);
})();


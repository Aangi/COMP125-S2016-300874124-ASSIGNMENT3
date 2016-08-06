/*
Filename : App.js
@author Aayushi Shah
@date June 10,2016
StudentID : 300874124
website : http://finalassignment2.azurewebsites.net/
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

    // assignment 3
     var xhrMyData;
    /**
     * This function reads data from the paragraphs.json file and aligns them with their 
     * respective ID's with the innerHTML using the if statement 
     * 
     * @method readData
     * @return void
     */
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
    /*
    This functions loads data from the paragraph.json file to the html file
    @method loadData
    @return void
    */
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

/*
    // data for my pages
    paragraphs[0] = "My name is <strong>Aayushi Shah</strong>. I am from India. I am studying <strong>Software Engineering Technology</strong> at Centennial College. I want to become an outstanding Software Engineer after completing my course. I want to get a degree from a renowned university after graduating from this course. Other than my field, I like mathematics subject the most.";
    paragraphs[1] = "Reading inspirational books is my hobby. This book <strong>WINGS OF FIRE</strong> is the best book I have ever read. It is basically the autobiography of APJ Abdul Kalam who was a great person and had been one of the best Presidents of India.";
    paragraphs[2] = "I like to <strong>travel</strong> to new and exciting places. I like visiting the places which are in the lap of nature. I feel like heaven by travelling such places. I had been to many places such as Kashmir."
    paragraphs[3] = "I love <strong>painting</strong>. I like to draw village scenes the most. I have sketched some natural scenes, mostly the sunsets. Painting gives me inner peace."
    
    // if paragraph exists then populate each paragraph on this page
    for (var index = 0; index < paragraphElements.length; index++) {
        if (paragraphElements[index]) {
            paragraphElements[index].innerHTML = paragraphs[index];
        }
    }
*/

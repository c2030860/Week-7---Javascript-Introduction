// console.log("Hi from JS");

// console.dir(document);


// IIFE
(function (){
    // Start
    document.getElementById("myHeading").innerHTML = "Liam";

    let firstLink = document.querySelector("nav ul li");
    console.info(firstLink);

    //firstLink.setAttribute("class", "currentPage");
    //firstLink.setAttribute("href", "https://www.google.co.uk");

    // Test Event

    let myBtn = document.getElementById("myTestEvent");
    // myBtn.onclick = ButtonPress;
    myBtn.addEventListener("click", ButtonPress);
    
    // Background Colour Picker
    
    let colourBtns = document.querySelectorAll(".colPicker");
    console.dir(colourBtns);

    for (let i = 0; i < colourBtns.length; i++){
        colourBtns[i].addEventListener("click", ChangeColour);
    }

    // Image Rotator

    let imageAr = ['images/view1.jpg', 'images/view2.jpg', 'images/view3.jpg', 'images/view4.jpg', 'images/view5.jpg', 'images/view6.jpg'];

    let count = 0;

    setInterval(RotateImage, 1000);
    

    
    
    function ButtonPress(event){ // Event Handlers.
        console.dir(event);
        console.info("I was clicked.");
    }


    function ChangeColour(event){
        console.dir(event.target.classList);

        let bodyElement = document.querySelector("body");

        correctClass = event.target.classList[0] + "Back";

        bodyElement.setAttribute("class", correctClass);
    }

    // Image Rotator
    function RotateImage(event){
        document.getElementById("myImages").setAttribute("src", imageAr[count]);
        
        count += 1;
        if (count === imageAr.length){
            count = 0;
        }
        console.info("Rotate Image")
        
    }

// End
})()
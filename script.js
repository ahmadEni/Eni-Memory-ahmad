const legums =["../ressources/memory-legume/1.svg","../ressources/memory-legume/2.svg","../ressources/memory-legume/3.svg","../ressources/memory-legume/4.svg","../ressources/memory-legume/5.svg","../ressources/memory-legume/6.svg","../ressources/memory-legume/1.svg","../ressources/memory-legume/2.svg","../ressources/memory-legume/3.svg","../ressources/memory-legume/4.svg","../ressources/memory-legume/5.svg","../ressources/memory-legume/6.svg"]
const dinosaures =["../ressources/dinosaures/1.jpg","../ressources/dinosaures/2.jpg","../ressources/dinosaures/3.jpg","../ressources/dinosaures/4.jpg","../ressources/dinosaures/5.jpg","../ressources/dinosaures/6.jpg","../ressources/dinosaures/1.jpg","../ressources/dinosaures/2.jpg","../ressources/dinosaures/3.jpg","../ressources/dinosaures/4.jpg","../ressources/dinosaures/5.jpg","../ressources/dinosaures/6.jpg"]
const animauxAnimes =["../ressources/animauxAnimes/1.webp","../ressources/animauxAnimes/2.webp","../ressources/animauxAnimes/3.webp","../ressources/animauxAnimes/4.webp","../ressources/animauxAnimes/5.webp","../ressources/animauxAnimes/6.webp","../ressources/animauxAnimes/1.webp","../ressources/animauxAnimes/2.webp","../ressources/animauxAnimes/3.webp","../ressources/animauxAnimes/4.webp","../ressources/animauxAnimes/5.webp","../ressources/animauxAnimes/6.webp"]
const chiens =["../ressources/chiens/1.webp","../ressources/chiens/2.webp","../ressources/chiens/3.webp","../ressources/chiens/4.webp","../ressources/chiens/5.webp","../ressources/chiens/6.webp","../ressources/chiens/1.webp","../ressources/chiens/2.webp","../ressources/chiens/3.webp","../ressources/chiens/4.webp","../ressources/chiens/5.webp","../ressources/chiens/6.webp"]


const plateau = document.getElementById("plateau")                      // div .plateau 

const imgReaction = document.getElementById("reaction");

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {                  // Check if the pressed key is the space key 
        console.log("Space key pressed");            // maessge for test
        location.reload(); // Reload the page
    }})  
        




function family(images){                                                        // function for create the game{

    images.sort(()=>Math.random()-0.5);
    let choix =[];                                                       // array max = 2      pour evaluate
    let nbVrai =0;
    let nbFaux =0;


    const scoreFaux = document.getElementById("nbFaux");
    scoreFaux.textContent = `nbFaux : ${nbFaux}`; 
    for(let i = 0 ; i<images.length ;i++){                              // for each [i]  create carte  and add this carte inside the .plateau 
        const carte = document.createElement("img")                     // carte(image) inside the div (plateau) 
        carte.src="../ressources/question.svg";                         // 
        plateau.appendChild(carte)                                      // add the carte inside the div .plateau 
        carte.addEventListener("click",function(){                      // event click for change the image 
            if(choix.length === 2 || !carte.src.includes("question")){                                         // stop click 
                return;
            }
            carte.classList.add("effet")                                 // add class effet for animation
            carte.src =images[i]                             // change the src  with family image 
            choix.push(i)                                   // add the element whivh we click on it to new array for make evaluate 
            console.log(choix)
            if(choix.length === 2){                         
                console.log("its full ")                         // for test the console 
                if(images[choix[0]] === images[choix[1]]){
                    const audio = new Audio('../ressources/correct.mp3');                 // create audio for correct
                    imgReaction.style.display = "block";
                    imgReaction.src = "../ressources/reaction2.png"
                    setTimeout(function() {
                        imgReaction.style.display = "none";
                        imgReaction.src = "../ressources/reaction.png"
                    }, 1000);
                    audio.play();                                                     // to say if === 2 , change the image for the index choix [0][1]
                    console.log("the same")                         // for test the console
                    choix.length = 0;                           //// make array = zero 
                    nbVrai++
                }else{ 
                    
                    nbFaux = nbFaux + 1;
                    scoreFaux.textContent = `nbFaux : ${nbFaux}`;
                    const audio2 = new Audio('../ressources/laugh.mp3');                 // create audio for error
                    audio2.play(); 

                    imgReaction.style.display = "block";                                              
                    setTimeout(function() { 
                        
                        imgReaction.style.display = "none";
                                    
                    for(let j = 0 ;j< 2;j++){                      // loop for 2 items 
                        
                        
                        plateau.children[choix[j]].src = "../ressources/question.svg"     //  div .plateau the father  -- 12 image (the children )
                        plateau.children[choix[j]].classList.remove("effet");         // remove the class effet for animation

                        

                    } 
                    choix.length = 0;            // make array = zero 
                    console.log("array will be zero ")            // console test 
                    }, 1000);
                    
                    
                    
                }
            }
            
            if(nbVrai === 6){
                scoreFaux.style.display="none";
                imgReaction.style.display="none";
                
                plateau.style.display="none";
                console.log("win")
                document.getElementById("win").style.display="block";
                const audio = new Audio('../ressources/win.mp3');
                audio.play();
                
            }

            
        })
    }
}


family(legums); // default theme is legums
const themeSelect = document.getElementById("theme");


themeSelect.addEventListener("change", function() {
    const option = themeSelect.value;

    plateau.innerHTML = "";   // Clear the plateau before loading new images
    plateau.style.display = "grid"; // Show the plateau
    document.getElementById("win").style.display = "none"; // Hide the win message
    document.getElementById("nbFaux").style.display = "block"; // Show the score

    if (option === "legums") {
        console.log("legums");
        
        family(legums);
    } else if (option === "dinosaures") {
        console.log("dinosaures");
        
        family(dinosaures);
    } else if (option === "animauxAnimes") {
        console.log("animauxAnimes");
        family(animauxAnimes);
    }else if (option === "chiens") {
        console.log("chiens");
        family(chiens); 
    }



});





const images =["../ressources/memory-legume/1.svg","../ressources/memory-legume/2.svg","../ressources/memory-legume/3.svg","../ressources/memory-legume/4.svg","../ressources/memory-legume/5.svg","../ressources/memory-legume/6.svg","../ressources/memory-legume/1.svg","../ressources/memory-legume/2.svg","../ressources/memory-legume/3.svg","../ressources/memory-legume/4.svg","../ressources/memory-legume/5.svg","../ressources/memory-legume/6.svg"]

images.sort(()=>Math.random()-0.5);


const plateau = document.getElementById("plateau")                      // div .plateau 
let choix =[];                                                       // array max = 2      pour evaluate
let nbVrai =0;
let nbFaux =0;

const scoreFaux = document.getElementById("nbFaux");

scoreFaux.textContent = `nbFaux : ${nbFaux}`; 

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {                  // Check if the pressed key is the space key 
        console.log("Space key pressed");            // maessge for test
        location.reload(); // Reload the page
    }})  
        // event keydown for space key


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
            choix.push(i)  
                                              // add the element whivh we click on it to new array for make evaluate 
            console.log(choix)
            if(choix.length === 2){          
                
                console.log("its full ")                         // for test the console 
                if(images[choix[0]] === images[choix[1]]){
                    const audio = new Audio('../ressources/correct.mp3');                 // create audio for correct
                    audio.play();                                                     // to say if === 2 , change the image for the index choix [0][1]
                    console.log("the same")                         // for test the console
                    choix.length = 0;                           //// make array = zero 
                    nbVrai++
                    

                }else{ 
                    nbFaux = nbFaux + 1;
                    scoreFaux.textContent = `nbFaux : ${nbFaux}`;
                    const audio2 = new Audio('../ressources/erreur.mp3');                 // create audio for error
                    audio2.play();                                                     // to say if !== 2 , change the image for the index choix [0][1]
                    setTimeout(function() { 
                        
                                    
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
                
                plateau.style.display="none";
                console.log("win")
                document.getElementById("win").style.display="block";
                const audio = new Audio('../ressources/win.mp3');
                audio.play();
            }

            
        })
    }



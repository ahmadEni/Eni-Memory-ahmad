const images =["../ressources/memory-legume/1.svg","../ressources/memory-legume/2.svg","../ressources/memory-legume/3.svg","../ressources/memory-legume/4.svg","../ressources/memory-legume/5.svg","../ressources/memory-legume/6.svg","../ressources/memory-legume/1.svg","../ressources/memory-legume/2.svg","../ressources/memory-legume/3.svg","../ressources/memory-legume/4.svg","../ressources/memory-legume/5.svg","../ressources/memory-legume/6.svg"]

images.sort(()=>Math.random()-0.5);


const plateau = document.getElementById("plateau")                      // div .plateau 
let choix =[];                                                       // array max = 2      pour evaluate


for(let i = 0 ; i<images.length ;i++){                              // for each [i]  create carte  and add this carte inside the .plateau 
    const carte = document.createElement("img")                     // carte(image) inside the div (plateau) 
    carte.src="../ressources/question.svg";                         // 
    plateau.appendChild(carte)                                      // add the carte inside the div .plateau 
    carte.addEventListener("click",function(){                      // event click for change the image 
        if(choix.length === 2){                                         // stop click 
            return;
        }
        carte.src =images[i]                             // change the src  with family image 
        choix.push(i)                                     // add the element whivh we click on it to new array for make evaluate 
        console.log(choix)
        if(choix.length === 2){          
            
            console.log("its full ")                         // for test the console 
            if(images[choix[0]] === images[choix[1]]){
                console.log("the same")                         // for test the console
                choix.length = 0;                           //// make array = zero 

            }else{                                                      // to say if !== 2 , change the image for the index choix [0][1]
                setTimeout(function() {             
                   for(let j = 0 ;j< 2;j++){                      // loop for 2 items 
                    
                    plateau.children[choix[j]].src = "../ressources/question.svg"     //  div .plateau the father  -- 12 image (the children )
                } 
                choix.length = 0;            // make array = zero 
                console.log("array will be zero ")            // console test 
                }, 1000);
                
                
                 
            }
        }
        
        
        
    })
}



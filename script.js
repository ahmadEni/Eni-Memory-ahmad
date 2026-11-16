const images =["../ressources/memory-legume/1.svg","../ressources/memory-legume/2.svg","../ressources/memory-legume/3.svg","../ressources/memory-legume/4.svg","../ressources/memory-legume/5.svg","../ressources/memory-legume/6.svg","../ressources/memory-legume/1.svg","../ressources/memory-legume/2.svg","../ressources/memory-legume/3.svg","../ressources/memory-legume/4.svg","../ressources/memory-legume/5.svg","../ressources/memory-legume/6.svg"]
console.log(images)

const plateau = document.getElementById("plateau")

for(let i = 0 ; i<images.length ;i++){
    const carte = document.createElement("img")
    carte.src="../ressources/question.svg";
    plateau.appendChild(carte)
}
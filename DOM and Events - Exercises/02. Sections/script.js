function create(words) {
   const outerDivElement = document.getElementById("content");
   for (const word of words) {
     const divElement = document.createElement("div");
     const pElement = document.createElement("p");
     pElement.textContent = word;
     pElement.style.display = "none"; 
     divElement.appendChild(pElement);
     divElement.addEventListener("click", onClick);
     outerDivElement.appendChild(divElement);
   }
 
   function onClick(event) {
     console.log(event);
     event.target.firstChild.style.display = "inline";
   }
 }
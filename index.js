function getFirstSelector(selector) {
  let element = document.querySelector(selector)
  
  return element
}

 function nestedTarget() {
   let element = document.querySelector("#nested .target")
  
   return element
 }

 function increaseRankBy(n){
  
   let elementList = document.querySelectorAll("ul.ranked-list li")
   for(var list = 0; list < elementList.length; list++) {
      elementList[list].innerHTML = (parseInt(elementList[list])innerHTML + n).toString()
    }
 }

 function deepestChild() {
  
 let element = document.querySelector("div#grand-node div div div div").innerHTML
 
 return element
}









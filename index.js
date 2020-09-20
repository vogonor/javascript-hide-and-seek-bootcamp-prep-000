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
      elementList[list].innerHTML = (parseInt(elementList[list].innerHTML) + n).toString()
    }
 }

 function deepestChild() {
  
 let element = document.getElementById("grand-node").querySelector("div div div div div")
 
 return element
}


  // 1) index
  //     deepestChild()
  //       returns the most deeply nested child in #grand-node:
  //   AssertionError: expected '\n              <div>\n                boo!\n          </div>\n            ' to equal { Object () }
  //     at Context.it (test/index-test.js:18:33)







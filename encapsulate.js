/*
Here we will demostrate how the encapusation works in JS 
 */

var website = (function(){
    
    var counter=0; // private Members
   return {  
    // public members
       setCounter : function() {
            if(counter<10) {
			console.log("count "+ counter);
            counter++;
          
            }
        }   
   } 	
})();


website.setCounter();


// Here, we create our main function.
function fizzbuzz(n) {
    
    console.log('Welcome to FizzBuzz!');
    // Put your code here...
     
    console.log('Hello World');
    

    let Num = [];
  
    for(let i=1; i<(n+1); i++)
    {
        let output = "";
       // console.log(i);
       
       if(i%3==0){
        output += 'Fizz';
       }

       if(i%13==0){
        if(output ==''){
        output='Fezz';
       } else {
        output+='Fezz';
       }
    
    }

       if(i%5==0){
        output += 'Buzz';
       }
       
       if(i%7==0){
        output+= 'Bang';
       }

       if(i%11==0){
        if(output=='Fezz'){
            output+='Bong';
        }else {
        output ='Bong';
        }
       }

       if(i%17==0){
        if(output.length>4){
           
            //
                          let segments = [];
                for (let j = 0; j < output.length; j += 4) {
                    segments.push(output.slice(j, j + 4));
                }
                
                const RevSegments = segments.reverse();
                let result ='';
                for(let k=0; k<RevSegments.length; k++){
                        result += RevSegments[k];
                }
                output = result;
            }
            
          
            //
        }
              
       if(output !==''){
        Num.push(output);
       } else {
        Num.push(i);
       }
              

    }
    
   
    console.log(Num);
    console.log(Num[194]);
    console.log(Num[142]);
    console.log(Num[254]);

    


}

// Now we run the main function...
fizzbuzz(300);

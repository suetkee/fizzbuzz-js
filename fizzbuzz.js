

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');
    // Put your code here...
     
    console.log('Hello World');

    for(let i=0; i<101; i++)
    {
       // console.log(i);
       if(i%11==0){
        console.log("Bong");
       } else if((i%7==0 && i%5==0) ||(i%7==0 && i%3==0)){
        console.log("FizzBang");
       } else if(i%7==0){
        console.log("Bang");
       } else if(i%3==0 && i%5==0){
        console.log('fizzbuzz');
       }   else if(i%3==0){
            console.log('fizz');

        } else if(i%5==0){
            console.log('buzz');
        }
         else {
            console.log(i);
        }
        

    }
    

    

    
}

// Now we run the main function...
fizzbuzz();

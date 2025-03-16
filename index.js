// Code your solutions in this file
function countDown(){
   // let writeCards = []; 
    for(let num=10;num >=0;num--){
        console.log(num)
     //   let writeCards = `${num} Thank you!`; 
     //   writeCards.push(message);  
   }
  // console.log(messages);
}



// New writeCards function to fix the error
function writeCards(names, event) {
    let messages = [];

    for (let i = 0; i <3; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return messages;
}
// Code your solutions in this file

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++){
//         console.log (`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }

//     return gifts;
// }

// wrapGifts(gifts);

// writeCards() returns an array of thank you messages for each name provided to the function



function writeCards(names, eventName) {
    let messages = []; // create a new, empty array to hold the messages

    for (let i = 0; i < names.length; i++) { // iterate through the input array
        let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`; // build out the 'thank you' message for each name
        messages.push(message); // add that message to the new array
    }

    return messages; // return the new array containing all the messages
}

const names = ["Guadalupe", "Ollie", "Aki"];
const eventName = "birthday"; //  event name, you can change it as needed

const thankYouMessages = writeCards(names, eventName); // call the function with the array of names and the event name
console.log(thankYouMessages); // print the array containing all the thank you messages

// function countDown
function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}


countDown(5); // This will count down from 5 to 0

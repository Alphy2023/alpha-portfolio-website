import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// function to greet
export const getGreeting = () =>{
  // greetings depending on time
  let greeting:string = "";
//   let greeting = document.getElementsByClassName(".home__greeting");

  const date = new Date();
  const hoursNow = date.getHours();

  if (hoursNow > 16) {
    //5pm to 6am
    greeting = "Hello Good Evening,";
  } else if (hoursNow > 11) {
    //12pm to 5pm
    greeting = "Hello Good Afternoon,";
  } else if (hoursNow > 5) {
    //12pm to 5pm
    greeting = "Hello Good Morning,";
  } else {
    greeting = "Hello Welcome,";
  }
  return greeting;
}

export const shortenText = (text?: string)=> {
  if (!text) return ""; // Return an empty string if text is undefined or null

  const maxLength = 60; // Set the maximum length of the shortened text
  if (text.length <= maxLength) {
    return text; // Return the original text if it's already shorter than the maximum length
  }

  return text.substring(0, maxLength - 3) + "..."; // Shorten the text and add an ellipsis
};

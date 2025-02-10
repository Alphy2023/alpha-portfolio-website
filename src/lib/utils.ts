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
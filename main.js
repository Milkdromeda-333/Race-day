let raceNumber = Math.floor(Math.random() * 1000);
/// Checks if the runner is registered
const registeredEarly = false;
const runnerAge = 18;
/// generates a race number for those who are adults and are registered early
if (runnerAge >= 18 && registeredEarly === true) {
raceNumber+=1000;
}
///Logs a message for the runner using the above statement to inform the runner
if (runnerAge > 18 && registeredEarly === true) {
  console.log(`Hey, runner! You race at 9:30 and your race number is ${raceNumber}.`);
} else if(runnerAge > 18 && registeredEarly !== true) {
  console.log(`Late adults run at 11:00 am and your race number is ${raceNumber}`);
} else if(runnerAge < 18) {
  console.log(`Youth registrants run at 12:30 pm, and your race number is ${raceNumber}`);
} else if(runnerAge === 18) {
  console.log("See the registration desk!");
}

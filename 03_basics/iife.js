// Immidiately Invoked Function Expression (IIFE)

(function chai() {
    // named iife
    console.log("db connected");
})(); // semicolon is important here

((name)=>{
    // unnamed iife
    console.log(`DB connected 02 ${name}`);
})(`rafi`);
const user = {
    username: "rafi",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome`);
        
    }
}

// user.welcomeMessage()
// user.username = "islam"
// user.welcomeMessage()

// +++++++++ basic syntax
// const addOne = () => {};



// implicit return
const addOne = num => num + 1
const returnObj = () => ({username: "user_01"})
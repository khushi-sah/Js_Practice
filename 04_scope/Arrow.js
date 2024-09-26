const user = {
    username:"khushi",
    price: 999,

    welcomeMessage: function(){
    // console.log(`${this.username}, welcome to website `);
    // console.log(this);
    }
}
    user.welcomeMessage()
    user.username = "shristi"
    user.welcomeMessage()

    //console.log(this);// op: {}empty
    

    function khushi(){
        let username = "Ram"
        //console.log(this.username);
        
    }
    khushi() // op: undefined

    // const khushi = function() {
    //     let username = "Ram"
    //     console.log(this.username);
    // }

    // khushi() // op: undefined

    const Chai = () => {
        let username = "Ram"
        // console.log(this.username);
    }
    Chai()//op: undefined

    // arrow function () => { } 
    //=================================

    // const sum = (num1, num2) => {
    //     return num1+ num2 
    // }

    // note: if we write {} curly braces then we have to write return (explicit return)
    
    // const sum = (num1, num2) => (num1 + num2) 
    // console.log(sum(8, 9));
    
    const display = () => ({username: "khushi"})    // object return
    console.log(display());

    const myArray = [2, 5, 3, 4, 6]
    //myArray.forEach (() => ())
//Immediately Invoked function expressions (IIFE)


//Named IIFE
(function Chai(){
    console.log(`DB Connected`);  
})();


//Simple IIFE
((name) => {
    console.log(`DB Connectd Two ${name}`);
} ) ('Khushi')
let month = 20

switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
        
    default:
        console.log("Please choose a valid month");
        break;
        
}

const userEmail = "test"

if(userEmail){
    console.log("Email is present");
} else {
    console.log("Email is not present");   
}

// ++++++++++
emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Empty obj");
} else {
    console.log("Non- empty");
    
}
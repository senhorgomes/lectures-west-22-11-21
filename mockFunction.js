const modifyArray = (array) => {
    //We need to create a new array
    const newArray = [];
    //Later we will return said new array

    //loop through the array
    for(let element of array){
    //modify(add 2) each of the numbers we are looping through the array
    //have these elements pushed into that new array
        // let modifiedElement = element += 2;
        // newArray.push(modifiedElement);
        //Checking to see if that type is string, if it is, convert it, add 2, then push
        if(typeof element === "string") {
            let convertedElement = Number(element)
            newArray.push(convertedElement += 2);
            continue;
        }
        newArray.push(element += 2);    
    }
    //return the modified array
    return newArray;
}

// const arrayWithABunchOfNumbers = [1,2,3,4,5];
//forEach method does NOT return anything
// const newArray = arrayWithABunchOfNumbers.forEach((element)=>element + 2)
//map method WILL return something, a new array
// const newArray = arrayWithABunchOfNumbers.map((element)=>element + 2)

// console.log('modified', arrayWithABunchOfNumbers.map((element)=>element + 2))
// console.log('original', arrayWithABunchOfNumbers)
// Mock call-> How would this function be called
console.log(modifyArray([1,2,3,4,5])) //-> should return [3,4,5,6,7]
// Convert the strings into numbers, and convert them if possible
console.log(modifyArray(["1","2",3,4,5]))  //-> should return [3,4,5,6,7]
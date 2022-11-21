# How to approach a problem
 - Break it down to smaller steps/problems
 - Pseudo code
 - Consider different outcomes
 - Reverse engineer/ work backwards -> Start at the end

# Coding problems

- Create a skeleton, using pseudo code


### Create a function that takes in an array, and adds two to each element in that array.

- Break down the problem
    - Create a function
        - Input/Output
    - Input
        - Array
    - Output
        - Array of the same length, but with modified elements
- Pseudo code
    - Create a skeleton
    ```javascript
    function modifyArray(array) {
        
    }
    const modifyArray = (array) => {
        //loop through the array
        for(const element of array){
        //modify(add 2) each of the numbers we are looping through the array
            element += 2;
        }
        //return the modified array
        return array;
    }

    // Mock call-> How would this function be called
    //Test one ->User inputs an array with numbers, and the function return a modified array
    modifyArray([1,2,3,4,5]) //-> should return [3,4,5,6,7]
    //Test two
    modifyArray(["1","2",3,4,5]) //-> should return [3,4,5,6,7]
    ```

When to use TDD?
 - Is my function being used for a larger application?

- Edge Cases - > Extremes
    - Happy cases
        - User inputs an array with numbers, and the function return a modified array
    - Sad cases (EVERYTHING BROKE)
        - What if we inputted strings instead of numbers. Check for only integers
            The main factor of what should be outputted, is how the rest of the application works
            - Convert the strings into numbers, and convert them if possible
            - Concatenate with a 2 after each number
            - Return an error "Hey, this array doesn't only have numbers"
        - What happens if you input an empty array
            - Write down your expected return
        - What if the numbers have spaces
        - What if someone passes in an objects

- Test Cases
- Possible Solutions
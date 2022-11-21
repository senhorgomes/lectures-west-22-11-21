# Starbucks Barista(Narrate each step, sort of like a tech interview)
//A drink order, and spits out a coffeeDrink
const coffeeDrink = {
    name:"String",
    size: "string",
    dairy: [],
    whipCream: true,
    syrups:[],
    iced: boolean,
    espressoShots: int
}

Take in a order, which our barista will create for us and it will return a coffeeDrink

# What does it mean

Taking in aan order
Deducting all parts of the order, and creating a drink

coffeeDrink needs to be an object
const coffeeDrink = {};

name needs to be a string Default value = "Stranger"
size needs to be an string Sizes should equal the same = (grande == medium/ tall == small)
dairy needs to be an array
whipcream needs to be an boolean
syrups needs to be an array
iced needs to be a boolean
espressoShots needs to an int

# Input and Outputs

Input - name, size, dairy, whipcream, syrups, iced, espressoShots
Output - is a coffeeDrink object

# How

Pseudo code

const barista = (name, size, dairy, whipcream, syrups, iced, espressoShots) => {

    //grab the everything from the order
    //a default object, with a standard drink blueprint
    //add each parameter to the corresponding key value pair
    //return that coffeeDrink

}

console.log("Order 1", barista("Noor", "Large", ["Oatmilk"], true, ["Mocha"], false, 5))
console.log("Order 2", barista("Ilia", "Large", ["Extra Goat Milk"], true, ["Cali Crunchy Caramel Drizzle"], false, 5))
console.log("order 3", barista("Justin", "Medium", ["Almond Milk"], true, ["Cali Caramel"], true, 3))
console.log("order 4", barista("Zak", "Medium", ["Whole Milk"], false, ["Pumpkin Spice"], false, 3))
console.log("order 5", barista("Jack", "Medium", ["Whole Milk"], false, ["Caramel"], iced, 2))

# Test cases

Happy Path
    - everyone gets their drink, and they are happy! :)


Sad Path
    - What happens if we pass in empty arguements
    - Incorrect types, every argument needs to match a specific type
    - What if they order something that we don't have? Ketchup? Mustard? Syrups = Mocha, Caramel, Hazelnut, Vanilla, Pumpkin Spice, Cali Caramel, Cali Crunchy Caramel Drizzle
    - Size that doesnt exist? Small, medium, and large. Extra-small, and extra-large it should fail


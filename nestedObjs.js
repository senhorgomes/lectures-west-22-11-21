const nestedObjects = {
    keyValue : {
        anotherDeepKeyValue1: {
            stringKey: "Hello",
        }
    },
    anotherKey: {
        anotherDeepKeyValue2: {
            stringKey2: "Hello again",
        }
    },
}
const nestedObjects2 = {
    keyValue : {
        anotherDeepKeyValue1: {
            stringKey: "Hello",
        }
    },
    anotherKey: {
        anotherDeepKeyValue2: {
            stringKey2: "Hello again",
        }
    },
}

nestedObjects[""]
assert.deepEquals(nestedObjects2.anotherKey.anotherDeepKeyValue2.stringKey2, nestedObjects1.anotherKey.anotherDeepKeyValue2.stringKey2)
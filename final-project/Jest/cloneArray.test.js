const cloneArray = require("./cloneArray");

test("It clone properly", ()=>{
    const x = [1,2,3]
    expect(cloneArray(x)).toEqual(x)
    expect(cloneArray(x)).not.toBe(x)
})
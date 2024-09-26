function versalerConventer(inputText){
    const a = inputText.toUpperCase();
    console.log(a);
    return a;
}

describe("Simple Jest test", () => {
    //Test case 1

    test("Test versaler", () => {
        
        myText = "Hello world!"
        const expectedOutput2 = "HELLO WORLD!"

        expect(versalerConventer(myText)).toBe(expectedOutput2);
    });
});
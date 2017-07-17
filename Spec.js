describe("Arithmetic Calculation In Operator Precedence For Given Expression", function () {
    var obj = new CalcPrecedence();
    var expression;

    describe("Checking for Null and undefined inputs", function () {
        it("Should throw error message", function () {
            expect(obj.inputExpr(expression)).toBe("NUll or Undefined Detected");
        })
    })
    
    describe("Checking program for multiple incorrect syntax", function () {
        it("Should throw error for *2+3*2/2", function () {
            expression = "*2+3*2/2";
            expect(obj.inputExpr(expression)).toBe("Syntax Error");
        })
        it("Should throw error for 2+3*2/2+", function () {
            expression = "2+3*2/2+";
            expect(obj.inputExpr(expression)).toBe("Syntax Error");
        })
        it("Should throw error for 2+3**2/2+", function () {
            expression = "2+3**2/2+";
            expect(obj.inputExpr(expression)).toBe("Syntax Error");
        })
        it("Should throw error for 2+3*(2/2))", function () {
            expression = "2+3*(2/2))";
            expect(obj.inputExpr(expression)).toBe("Syntax Error");
        })
        it("Should throw error for 2+((3*(2/2))", function () {
            expression = "2+((3*(2/2))";
            expect(obj.inputExpr(expression)).toBe("Syntax Error");
        })
        it("Should throw error for 2+*3*(2/2))", function () {
            expression = "2+*3*(2/2))";
            expect(obj.inputExpr(expression)).toBe("Syntax Error");
        })
    })
    describe("Checking program for multiple Outputs", function () {
        it("Should be able to return the result for 2+3*2/2", function () {
            expression = "2+3*2/2";
            expect(obj.inputExpr(expression)).toEqual("5");
        })
        it("Should be able to return the result for 2+(534/639+648)+3*2/2", function () {
            expression = "2+(534/639+648)+3*2/2";
            expect(obj.inputExpr(expression)).toEqual("653.8356807511738");
        })
        it("Should be able to return the result for -2+(534/639*(672-98*326)+648)+3*2/2", function () {
            expression = "-2+(534/639*(672-98*326)+648)+3*2/2";
            expect(obj.inputExpr(expression)).toEqual("-25487.75117370892");
        })
        it("Should be able to return the result for -2+(534/639*-(672-98*-326)+-648)+3*2/-2", function () {
            expression = "-2+(534/639*-(672-98*-326)+-648)+3*2/-2";
            expect(obj.inputExpr(expression)).toEqual("-27912.906103286383");
        })
        it("Should be able to return the result for 3*4+5*6-32/8+19/4*43+5-32+7-58/9+12*3-48/8-3/7+14/2+12*3+5", function () {
            expression = "3*4+5*6-32/8+19/4*43+5-32+7-58/9+12*3-48/8-3/7+14/2+12*3+5";
            expect(obj.inputExpr(expression)).toEqual("293.3769841269841");
        })
    })
})
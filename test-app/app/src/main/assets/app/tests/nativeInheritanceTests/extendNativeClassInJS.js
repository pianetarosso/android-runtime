describe("Test extending just classes in JS", function() {

    it("Extend non generic abstract Java class without implementing any interfaces in JS: Implement some of its abstract methods ", function() {
        var expectedMessage = "ErrorMessage";
        var noMethodExpectedMessage = "No Method!"
        var NonGenericAbstractClassBase = com.tns.sgbtestclasses.inheritance.classes.NonGenericAbstractClassBase.extend({
            workAbstract: function() {
                if (arguments.length == 2) {
                    var ErrorMessage = arguments[0] + arguments[1].toString()
                    throw new Error(ErrorMessage);
                }
                if (arguments.length == 1) {
                    throw new Error(arguments[0]);
                }
                if (arguments.length == 0) {
                    var ErrorMessage = noMethodExpectedMessage
                    throw new Error(ErrorMessage);
                }
            }
        });

        var nonGenericAbstractClassBase = new NonGenericAbstractClassBase();
        var nonGenericAbstractClassBaseHelper = new com.tns.sgbtestclasses.inheritance.classes.NonGenericAbstractClassBaseHelper()
        var value = "Not Working!"
        try {
            nonGenericAbstractClassBaseHelper.workAbstract(nonGenericAbstractClassBase, expectedMessage);
        } catch (e) {
            value = e.message;
        }
        expect(value).toBe(expectedMessage);
        try {
            nonGenericAbstractClassBaseHelper.workAbstract(nonGenericAbstractClassBase, expectedMessage, 4);
        } catch (e) {
            value = e.message;
        }
        var expectedValue = expectedMessage + "4";
        expect(value).toBe(expectedValue);
        try {
            nonGenericAbstractClassBaseHelper.workAbstract(nonGenericAbstractClassBase);
        } catch (e) {
            value = e.message;
        }
        expect(value).toBe(noMethodExpectedMessage);
        try {
            nonGenericAbstractClassBaseHelper.getStringAbstract(nonGenericAbstractClassBase);
        } catch (e) {
            value = e.message;
        }
        expect(value).toContain("Error: java.lang.AbstractMethodError: abstract method \"java.lang.String com.tns.sgbtestclasses.inheritance.classes.NonGenericAbstractClassBase.getStringAbstract()\"");
        try {
            nonGenericAbstractClassBaseHelper.getStringAbstract(nonGenericAbstractClassBase, expectedMessage);
        } catch (e) {
            value = e.message;
        }
        expect(value).toContain("Error: java.lang.AbstractMethodError: abstract method \"java.lang.String com.tns.sgbtestclasses.inheritance.classes.NonGenericAbstractClassBase.getStringAbstract(java.lang.String)\"");
        try {
            nonGenericAbstractClassBaseHelper.getStringAbstract(nonGenericAbstractClassBase, expectedMessage, 4);
        } catch (e) {
            value = e.message;
        }
        expect(value).toContain("Error: java.lang.AbstractMethodError: abstract method \"java.lang.String com.tns.sgbtestclasses.inheritance.classes.NonGenericAbstractClassBase.getStringAbstract(java.lang.String, int)\"");
        value = nonGenericAbstractClassBaseHelper.getString(nonGenericAbstractClassBase);
        expect(value).toBe("string");
        value = nonGenericAbstractClassBaseHelper.getString(nonGenericAbstractClassBase, expectedMessage);
        expect(value).toBe(expectedMessage);
        value = nonGenericAbstractClassBaseHelper.getString(nonGenericAbstractClassBase, expectedMessage, 4);
        expect(value).toBe(expectedMessage + "4");
    });

    it("Extend non generic abstract Java class without implementing any interfaces in JS: Implement all supported abstract methods ", function() {
        var expectedMessage = "ErrorMessage";
        var noMethodExpectedMessage = "No Method!"
        var NonGenericAbstractClassBase = com.tns.sgbtestclasses.inheritance.classes.NonGenericAbstractClassBase.extend({
            workAbstract: function() {
                if (arguments.length == 2) {
                    var ErrorMessage = arguments[0] + arguments[1].toString()
                    throw new Error(ErrorMessage);
                }
                if (arguments.length == 1) {
                    throw new Error(arguments[0]);
                }
                if (arguments.length == 0) {
                    throw new Error(expectedMessage);
                }
            },
            getStringAbstract: function() {
                if (arguments.length == 2) {
                    var ErrorMessage = arguments[0] + arguments[1].toString()
                    throw new Error(ErrorMessage);
                }
                if (arguments.length == 1) {
                    throw new Error(arguments[0]);
                }
                if (arguments.length == 0) {
                    throw new Error(expectedMessage);
                }
            },
            getString: function() {
                if (arguments.length == 2) {
                    var ErrorMessage = arguments[0] + arguments[1].toString()
                    throw new Error(ErrorMessage);
                }
                if (arguments.length == 1) {
                    throw new Error(arguments[0]);
                }
                if (arguments.length == 0) {
                    throw new Error(noMethodExpectedMessage);
                }
            }
        });

        var nonGenericAbstractClassBase = new NonGenericAbstractClassBase();
        var nonGenericAbstractClassBaseHelper = new com.tns.sgbtestclasses.inheritance.classes.NonGenericAbstractClassBaseHelper()
        var value = "Not Working!"
        try {
            nonGenericAbstractClassBaseHelper.workAbstract(nonGenericAbstractClassBase);
        } catch (e) {
            value = e.message;
        }
        expect(value).toBe(expectedMessage);
        try {

            nonGenericAbstractClassBaseHelper.workAbstract(nonGenericAbstractClassBase, expectedMessage);
        } catch (e) {
            value = e.message;
        }
        expect(value).toBe(expectedMessage);
        try {
            nonGenericAbstractClassBaseHelper.workAbstract(nonGenericAbstractClassBase, expectedMessage, 4);
        } catch (e) {
            value = e.message;
        }
        var expectedValue = expectedMessage + "4";
        expect(value).toBe(expectedValue);
        try {
            nonGenericAbstractClassBaseHelper.getStringAbstract(nonGenericAbstractClassBase);
        } catch (e) {
            value = e.message;
        }
        expect(value).toBe(expectedMessage);
        try {

            nonGenericAbstractClassBaseHelper.getStringAbstract(nonGenericAbstractClassBase, expectedMessage);
        } catch (e) {
            value = e.message;
        }
        expect(value).toBe(expectedMessage);
        try {
            nonGenericAbstractClassBaseHelper.getStringAbstract(nonGenericAbstractClassBase, expectedMessage, 4);
        } catch (e) {
            value = e.message;
        }
        var expectedValue = expectedMessage + "4";
        expect(value).toBe(expectedValue);
        try {
            nonGenericAbstractClassBaseHelper.getString(nonGenericAbstractClassBase);
        } catch (e) {
            value = e.message;
        }
        expect(value).toBe(noMethodExpectedMessage);
        try {
            nonGenericAbstractClassBaseHelper.getString(nonGenericAbstractClassBase, expectedMessage);
        } catch (e) {
            value = e.message;
        }
        expect(value).toBe(expectedMessage);
        try {
            nonGenericAbstractClassBaseHelper.getString(nonGenericAbstractClassBase, expectedMessage, 4);
        } catch (e) {
            value = e.message;
        }
        expect(value).toBe(expectedMessage + "4");
    });

    it("Extend non generic abstract Java class without implementing any interfaces in JS: Don’t implement any abstract methods ", function() {
        var expectedMessage = "ErrorMessage";
        var NonGenericAbstractClassBase = com.tns.sgbtestclasses.inheritance.classes.NonGenericAbstractClassBase.extend({});

        var nonGenericAbstractClassBase = new NonGenericAbstractClassBase();
        var nonGenericAbstractClassBaseHelper = new com.tns.sgbtestclasses.inheritance.classes.NonGenericAbstractClassBaseHelper()

        var value = "Not Working!"
        try {
            nonGenericAbstractClassBaseHelper.workAbstract(nonGenericAbstractClassBase);
        } catch (e) {
            value = e.message;
        }
        expect(value).toContain("Error: java.lang.AbstractMethodError: abstract method \"void com.tns.sgbtestclasses.inheritance.classes.NonGenericAbstractClassBase.workAbstract()\"");
        try {
            nonGenericAbstractClassBaseHelper.workAbstract(nonGenericAbstractClassBase, expectedMessage);
        } catch (e) {
            value = e.message;
        }
        expect(value).toContain("Error: java.lang.AbstractMethodError: abstract method \"void com.tns.sgbtestclasses.inheritance.classes.NonGenericAbstractClassBase.workAbstract(java.lang.String)\"");
        try {
            nonGenericAbstractClassBaseHelper.workAbstract(nonGenericAbstractClassBase, expectedMessage, 4);
        } catch (e) {
            value = e.message;
        }
        expect(value).toContain("Error: java.lang.AbstractMethodError: abstract method \"void com.tns.sgbtestclasses.inheritance.classes.NonGenericAbstractClassBase.workAbstract(java.lang.String, int)\"");
        try {
            nonGenericAbstractClassBaseHelper.getStringAbstract(nonGenericAbstractClassBase);
        } catch (e) {
            value = e.message;
        }
        expect(value).toContain("Error: java.lang.AbstractMethodError: abstract method \"java.lang.String com.tns.sgbtestclasses.inheritance.classes.NonGenericAbstractClassBase.getStringAbstract()\"");
        try {
            nonGenericAbstractClassBaseHelper.getStringAbstract(nonGenericAbstractClassBase, expectedMessage);
        } catch (e) {
            value = e.message;
        }
        expect(value).toContain("Error: java.lang.AbstractMethodError: abstract method \"java.lang.String com.tns.sgbtestclasses.inheritance.classes.NonGenericAbstractClassBase.getStringAbstract(java.lang.String)\"");
        try {
            nonGenericAbstractClassBaseHelper.getStringAbstract(nonGenericAbstractClassBase, expectedMessage, 4);
        } catch (e) {
            value = e.message;
        }
        expect(value).toContain("Error: java.lang.AbstractMethodError: abstract method \"java.lang.String com.tns.sgbtestclasses.inheritance.classes.NonGenericAbstractClassBase.getStringAbstract(java.lang.String, int)\"");

        value = nonGenericAbstractClassBaseHelper.getString(nonGenericAbstractClassBase);
        expect(value).toBe("string");
        value = nonGenericAbstractClassBaseHelper.getString(nonGenericAbstractClassBase, expectedMessage);
        expect(value).toBe(expectedMessage);
        value = nonGenericAbstractClassBaseHelper.getString(nonGenericAbstractClassBase, expectedMessage, 4);
        expect(value).toBe(expectedMessage + "4");
    });


    it("Extend non generic Java class without implementing any interfaces in JS: Override some of its method ", function() {
        var expectedMessage = "ErrorMessage";
        var noMethodExpectedMessage = "No Method!"
        var NonGenericSimpleClassBase = com.tns.sgbtestclasses.inheritance.classes.NonGenericSimpleClassBase.extend({
            work: function() {
                if (arguments.length == 2) {
                    var ErrorMessage = arguments[0] + arguments[1].toString()
                    throw new Error(ErrorMessage);
                }
                if (arguments.length == 1) {
                    throw new Error(arguments[0]);
                }
                if (arguments.length == 0) {
                    var ErrorMessage = noMethodExpectedMessage
                    throw new Error(ErrorMessage);
                }
            }
        });

        var nonGenericSimpleClassBase = new NonGenericSimpleClassBase();
        var nonGenericSimpleClassBaseHelper = new com.tns.sgbtestclasses.inheritance.classes.NonGenericSimpleClassBaseHelper()
        var value = "Not Working!"
        try {
            nonGenericSimpleClassBaseHelper.work(nonGenericSimpleClassBase, expectedMessage);
        } catch (e) {
            value = e.message;
        }
        expect(value).toBe(expectedMessage);
        try {
            nonGenericSimpleClassBaseHelper.work(nonGenericSimpleClassBase, expectedMessage, 4);
        } catch (e) {
            value = e.message;
        }
        var expectedValue = expectedMessage + "4";
        expect(value).toBe(expectedValue);
        try {
            nonGenericSimpleClassBaseHelper.work(nonGenericSimpleClassBase);
        } catch (e) {
            value = e.message;
        }
        expect(value).toBe(noMethodExpectedMessage);
        var value = nonGenericSimpleClassBaseHelper.getString(nonGenericSimpleClassBase);
        expect(value).toBe("string");
        value = nonGenericSimpleClassBaseHelper.getString(nonGenericSimpleClassBase, expectedMessage);
        expect(value).toBe(expectedMessage);
        value = nonGenericSimpleClassBaseHelper.getString(nonGenericSimpleClassBase, expectedMessage, 4);
        expect(value).toBe(expectedMessage + "4");
    });

    it("Extend non generic Java class without implementing any interfaces in JS: Override all supported methods ", function() {
        var expectedMessage = "ErrorMessage";
        var noMethodExpectedMessage = "No Method!"
        var NonGenericSimpleClassBase = com.tns.sgbtestclasses.inheritance.classes.NonGenericSimpleClassBase.extend({
            work: function() {
                if (arguments.length == 2) {
                    var ErrorMessage = arguments[0] + arguments[1].toString()
                    throw new Error(ErrorMessage);
                }
                if (arguments.length == 1) {
                    throw new Error(arguments[0]);
                }
                if (arguments.length == 0) {
                    throw new Error(noMethodExpectedMessage);
                }
            },
            getString: function() {
                if (arguments.length == 2) {
                    var ErrorMessage = arguments[0] + arguments[1].toString()
                    throw new Error(ErrorMessage);
                }
                if (arguments.length == 1) {
                    throw new Error(arguments[0]);
                }
                if (arguments.length == 0) {
                    throw new Error(noMethodExpectedMessage);
                }
            }
        });

        var nonGenericSimpleClassBase = new NonGenericSimpleClassBase();
        var nonGenericSimpleClassBaseHelper = new com.tns.sgbtestclasses.inheritance.classes.NonGenericSimpleClassBaseHelper()
        var value = "Not Working!"
        try {
            nonGenericSimpleClassBaseHelper.work(nonGenericSimpleClassBase, expectedMessage);
        } catch (e) {
            value = e.message;
        }
        expect(value).toBe(expectedMessage);
        try {
            nonGenericSimpleClassBaseHelper.work(nonGenericSimpleClassBase, expectedMessage, 4);
        } catch (e) {
            value = e.message;
        }
        var expectedValue = expectedMessage + "4";
        expect(value).toBe(expectedValue);
        try {
            nonGenericSimpleClassBaseHelper.work(nonGenericSimpleClassBase);
        } catch (e) {
            value = e.message;
        }
        expect(value).toBe(noMethodExpectedMessage);
        try {
            nonGenericSimpleClassBaseHelper.getString(nonGenericSimpleClassBase);
        } catch (e) {
            value = e.message;
        }
        expect(value).toBe(noMethodExpectedMessage);
        try {
            nonGenericSimpleClassBaseHelper.getString(nonGenericSimpleClassBase, expectedMessage);
        } catch (e) {
            value = e.message;
        }
        expect(value).toBe(expectedMessage);
        try {
            nonGenericSimpleClassBaseHelper.getString(nonGenericSimpleClassBase, expectedMessage, 4);
        } catch (e) {
            value = e.message;
        }
        expect(value).toBe(expectedMessage + "4");
    });

    it("Extend non generic Java class without implementing any interfaces in JS: Don’t override any methods ", function() {
        var expectedMessage = "ErrorMessage";
        var noMethodExpectedMessage = "No Method!"
        var NonGenericSimpleClassBase = com.tns.sgbtestclasses.inheritance.classes.NonGenericSimpleClassBase.extend({});

        var nonGenericSimpleClassBase = new NonGenericSimpleClassBase();
        var nonGenericSimpleClassBaseHelper = new com.tns.sgbtestclasses.inheritance.classes.NonGenericSimpleClassBaseHelper()
        var value = "Not Working!"
        nonGenericSimpleClassBaseHelper.work(nonGenericSimpleClassBase, expectedMessage);
        nonGenericSimpleClassBaseHelper.work(nonGenericSimpleClassBase, expectedMessage, 4);
        nonGenericSimpleClassBaseHelper.work(nonGenericSimpleClassBase);
        value = nonGenericSimpleClassBaseHelper.getString(nonGenericSimpleClassBase);
        expect(value).toBe("string");
        value = nonGenericSimpleClassBaseHelper.getString(nonGenericSimpleClassBase, expectedMessage);
        expect(value).toBe(expectedMessage);
        value = nonGenericSimpleClassBaseHelper.getString(nonGenericSimpleClassBase, expectedMessage, 4);
        expect(value).toBe(expectedMessage + "4");
    });


});
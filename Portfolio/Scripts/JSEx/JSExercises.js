$(document).ready(function () {
    //ex.1
    $("#numbers-calc").submit(function (e) {
        e.preventDefault();
        let inp1NumCalc = parseInt($("#input1-numbers").val());
        let inp2NumCalc = parseInt($("#input2-numbers").val());
        let inp3NumCalc = parseInt($("#input3-numbers").val());
        let inp4NumCalc = parseInt($("#input4-numbers").val());
        let inp5NumCalc = parseInt($("#input5-numbers").val());

        if (!inp1NumCalc || !inp2NumCalc || !inp3NumCalc || !inp4NumCalc || !inp5NumCalc) {
            $("#rslt-least").text("All fields should be filled, just numbers are accepted!");
        } else {
            let sum = inp1NumCalc + inp2NumCalc + inp3NumCalc + inp4NumCalc + inp5NumCalc;
            //least number
            $("#rslt-least").text("Least number is: " + Math.min(inp1NumCalc, inp2NumCalc, inp3NumCalc, inp4NumCalc, inp5NumCalc));
            //greatest number
            $("#rslt-greatest").text("Greatest number is: " + Math.max(inp1NumCalc, inp2NumCalc, inp3NumCalc, inp4NumCalc, inp5NumCalc));
            //the sum of the numbers
            $("#rslt-sum").text("The sum of the numbers is: " + sum);
            //the mean of the numbers
            $("#rslt-mean").text("The mean of the numbers is: " + sum / 5);
            //the product of the numbers
            $("#rslt-product").text("The product of the numbers is: " + (inp1NumCalc * inp2NumCalc * inp3NumCalc * inp4NumCalc * inp5NumCalc));
        }
    })
    $("#btn-ex1-code").click(function () {
        $("#ex1-code").toggle();
        $(this).text() == "Show code" ? $(this).text("Hide code") : $(this).text("Show code"); 
    })
    //ex.2
    $("#factorial-calc").submit(function (e) {
        e.preventDefault();
        if (!parseInt($("#inp-factorial").val())) {
            $("#rslt-factorial").text("The field should be filled, just a number is accepted!");
        } else {
            let result = 1;
            for (i = parseInt($("#inp-factorial").val()); i > 1; i--) {
                result *= i;
            }
            $("#rslt-factorial").text(`Factorial is: ${result}`);
        }
    })
    $("#btn-ex2-code").click(function () {
        $("#ex2-code").toggle();
        $(this).text() == "Show code" ? $(this).text("Hide code") : $(this).text("Show code");
    })
    //ex3
    $("#fb-calc").submit(function (e) {
        e.preventDefault();
        let input1Multiples = parseInt($("#inp1-fb").val());
        let input2Multiples = parseInt($("#inp2-fb").val());
        if (!input1Multiples || !input2Multiples) {
            alert("All fields should be filled, just numbers are accepted!");
        } else {
            let allNumbers = [];
            for (i = 1; i <= 100; i++) {
                if (!(i % input1Multiples) && !(i % input2Multiples)) {
                    allNumbers.push("FizzBuzz");
                } else if (!(i % input1Multiples)) {
                    allNumbers.push("Fizz");
                } else if (!(i % input2Multiples)) {
                    allNumbers.push("Buzz");
                } else {
                    allNumbers.push(i);
                }
            }
            let newString = allNumbers.join(', ');
            $("#rslt-fb").text(newString);
        }
    })
    $("#btn-ex3-code").click(function () {
        $("#ex3-code").toggle();
        $(this).text() == "Show code" ? $(this).text("Hide code") : $(this).text("Show code");
    })
    //ex4
    $("#polidrome-calc").submit(function (e) {
        e.preventDefault();
        let initialString = $("#inp-polidrome").val();
        let reverseString = initialString.split("").reverse().join("");
        if (typeof initialString !== "string") {
            alert("Just a word is accepted!");
        } else {
            if (initialString === reverseString) {
                $("#rslt-polidrome").text(`Your word is a Palindrome. Reverse string is "${reverseString}"`);
            } else {
                $("#rslt-polidrome").text(`Your word is NOT a Palindrome. Reverse string is "${reverseString}"`);
            }
        }

    })
    $("#btn-ex4-code").click(function () {
        $("#ex4-code").toggle();
        $(this).text() == "Show code" ? $(this).text("Hide code") : $(this).text("Show code");
    })
})       
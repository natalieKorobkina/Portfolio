$(document).ready(function () {
    //Ex.1
    $("#numbers-calc").submit(function (e) {
        e.preventDefault();
        let arrInputs = [];
        arrInputs[0] = parseInt($("#input1-numbers").val());
        arrInputs[1] = parseInt($("#input2-numbers").val());
        arrInputs[2] = parseInt($("#input3-numbers").val());
        arrInputs[3] = parseInt($("#input4-numbers").val());
        arrInputs[4] = parseInt($("#input5-numbers").val());

        if (!arrInputs[0] || !arrInputs[1] || !arrInputs[2] || !arrInputs[3] || !arrInputs[4]) {
            $("#rslt-least").text("All fields should be filled, just numbers are accepted!");
            $("#rslt-greatest").text("");
            $("#rslt-sum").text("");
            $("#rslt-mean").text("");
            $("#rslt-product").text("");
        } else {
            let sum = arrInputs.reduce(function (total, num) {
                return total + num;
            });
            //least number
            $("#rslt-least").text("Least number is: " + Math.min(...arrInputs));
            //greatest number
            $("#rslt-greatest").text("Greatest number is: " + Math.max(...arrInputs));
            //the sum of the numbers
            $("#rslt-sum").text("The sum of the numbers is: " + sum);
            //the mean of the numbers
            $("#rslt-mean").text("The mean of the numbers is: " + sum / 5);
            //the product of the numbers
            $("#rslt-product").text("The product of the numbers is: " + (arrInputs.reduce(function (total, num) {
                return total * num
            })));
        }
    });
    //Toggle code button label ex.1
    $("#btn-ex1-code").click(function () {
        $("#ex1-code").toggle();
        $(this).text() == "Show code" ? $(this).text("Hide code") : $(this).text("Show code");
    });
    //Ex.2
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
    });
    //Toggle code button label ex.2
    $("#btn-ex2-code").click(function () {
        $("#ex2-code").toggle();
        $(this).text() == "Show code" ? $(this).text("Hide code") : $(this).text("Show code");
    });
    //Ex.3
    $("#fb-calc").submit(function (e) {
        e.preventDefault();
        let input1Multiples = parseInt($("#inp1-fb").val());
        let input2Multiples = parseInt($("#inp2-fb").val());
        if (!input1Multiples || !input2Multiples) {
            $("#rslt-fb").text("All fields should be filled, just numbers are accepted!");
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
    });
    //Toggle code button label ex.3
    $("#btn-ex3-code").click(function () {
        $("#ex3-code").toggle();
        $(this).text() == "Show code" ? $(this).text("Hide code") : $(this).text("Show code");
    });
    //Ex.4
    $("#polidrome-calc").submit(function (e) {
        e.preventDefault();
        let initialString = $("#inp-polidrome").val().toLowerCase();
        let reverseString = initialString.split("").reverse().join("");
        if (!isNaN(initialString) || initialString === "") {
            $("#rslt-polidrome").text("The field should be filled. Just a word is accepted!");
        } else {
            if (initialString === reverseString) {
                $("#rslt-polidrome").text(`Your word is a Palindrome. Reverse string is "${reverseString}"`);
            } else {
                $("#rslt-polidrome").text(`Your word is NOT a Palindrome. Reverse string is "${reverseString}"`);
            }
        }
    });
    //Toggle code button label ex.4
    $("#btn-ex4-code").click(function () {
        $("#ex4-code").toggle();
        $(this).text() == "Show code" ? $(this).text("Hide code") : $(this).text("Show code");
    });
    //Modal popups on hover
    $('[data-toggle="popover"]').popover({
        placement: 'top',
        trigger: 'hover',
        container: 'body'
    });
});       
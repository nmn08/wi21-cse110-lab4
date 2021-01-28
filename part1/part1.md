1. Line 11: 3 because even *i* is declared inside for-loop, it's declared as var which has no block scope.
2. Line 12: 150 because even *discounterPrice* is declared inside for-loop, it's declared as var which has no block scope.
3. Line 13: 150 because *finalPrice* declared as var and it's used in the scope it's declared
4. 50, 100, 150. For each price in prices, it will calculate the discounted price equals to the current price multiple with (1-discount), then round it to the second decimal place. Then pushing it back to discounted.
5. Line 11: Nothing will be printed because the variable *i* is declared as let which can be used only inside the scope for-loop. When *i* is used in Line 11, it will throw an error and end the function call.
6. Line 12: Nothing will be printed because the variable *discountedPrice* is declared as let which can be used only inside the scope for-loop. When *discountedPrice* is used in Line 12, it will throw an error.
7. Line 13: 150 because *finalPrice* is used in the scope it's declared
8. 50, 100, 150. For each price in prices, it will calculate the discounted price equals to the current price multiple with (1-discount), then round it to the second decimal place. Then pushing it back to discounted.
9. Line 11: Nothing will be printed because the variable *i* is declared as let which can be used only inside the scope for-loop. When *i* is used in Line 11, it will thrwo an error and end the function call.
10. Line 12: Nothing will be printed because the variable *discountedPrice* is declared as const but in line 6, it tries to change the value which will throw an error.
11. Line 13: Nothing will be printed because the variable *finalprice* is declared as const but in line 7, it tries to change the value which will throw an error.
12. Nothing will be returned ([]) because the variable *discounted* is declared as const but in line 8, it tries to push the new the value which will throw.
13. The notation:
    a. Accessing the value of the name property in the student object: student.name
    b. Accessing the value of the Grad Year property in the student object: student['Grade Year']
    c. Calling the function for the greeting property in the student object: student.greeting()
    d. Accessing the name property of the object in the Favorite Teacher property in student: student['Favorite Teacher'].name
    e. Access the first index in the array of the courseLoad property of the student object: student.courseLoad[0]
14. Arithmetric:
    a. 32: '3' is a string then plus sign '+' treated 2 as a string and do concatenation so '3' + 2 = '3' + '2' = '32'
    b. 1: '3' evals to 3 because of using minus sign '-', so '3' - 2 = 3 - 2 = 1
    c. 3: null evals to 0 because before '+' sign is a numeric data type, so 3 + null = 3 + 0 = 3
    d. 3null: null evals to 'null' because before '+' sign is a string data type, so '3' + null = '3' + 'null' = '3null'
    e. 4: true evals to 1 so true + 3 = 1 + 3 = 4
    f. 0: false evals to 0 and null evals to 0 so false + null = 0 + 0 = 0
    g. 3undefined: undefined evals to 'undefined' so "3" + undefined = "3" + "undefined" = "3undefined"
    h. NaN: because of using minus sign '-' it will evals "3" to 3 so "3" - undefined = 3 - undefined = NaN
15. Comparison
    a. true: '2' evals to 2 because it compares to a numeric data type, so 2 > 1 is true
    b. false: compare string with a string and '2' is bigger than the first character '1' in '12'
    c. true: '2' evals to 2 because it compares to a numeric data type, so 2 == 2 is true
    d. false: === is strict equality which require both value and type are the same, '2' and 2 are different data type
    e. false: true evals to 1, so true == 2 <=> 1 == 2 which is false
    f. true: Boolean(2) return true, so true === true is true
16. === is strict equality, this means both type and value are the same. While == only need value to be the same.
17. Print: "How are you?". Because in the first condition, it treat true as 1, then 2 == true will return false. In the second condition, everything not 0 will be treated as true, therefore this if-else statement will be executed.
18. [part1-question18.js](part1-question18.js)
19. [6,8,10], doSomething is passed as the first callback function. In the line 4, newArr will be pushed the value return from: 
    doSomething(array[i], function(x) {
        return x * 2 ;
    });
    which will increase array[i] by 2 as line 12, then return function(arr[i] + 2).
    Therefore, each value of the array will be increased by 2 before multiply by 2.
20. [part1-question20.js](part1-question20.js)
21. 
1
4
3
2

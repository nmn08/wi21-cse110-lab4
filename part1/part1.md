1. Line 11: 3 because even *i* is declared inside for-loop, it's declared as var which has no block scope.
2. Line 12: 150 because even *discounterPrice* is declared inside for-loop, it's declared as var which has no block scope.
3. Line 13: 150 because *finalPrice* declared as var but it's used in the scope it's declared
4. 50, 100, 150. For each price in prices, it will calculate the discounted price equals to the current price multiple with (1-discount), then round it to the second decimal place. Then pushing it back to discounted.
5. Line 11: Nothing will be printed because the variable *i* is declared as let which can be used only inside the scope for-loop. When *i* is used in Line 11, it will cause an error and end the function call.
6. Line 12: Nothing will be printed because the variable *i* is declared as let which can be used only inside the scope for-loop. When *i* is used in Line 11, it will cause an error and end the function call.
7. Line 13: Nothing will be printed because the variable *i* is declared as let which can be used only inside the scope for-loop. When *i* is used in Line 11, it will cause an error and end the function call.
8. Nothing will be returned because the variable *i* is declared as let which can be used only inside the scope for-loop. When *i* is used in Line 11, it will cause an error and end the function call.
9. Line 11: Nothing will be printed because the variable *finalprice* is declared as const but in line 7, it tries to change the value which will cause an error and stop the function right away.
10. Line 12: Nothing will be printed because the variable *finalprice* is declared as const but in line 7, it tries to change the value which will cause an error and stop the function right away.
11. Line 13: Nothing will be printed because the variable *finalprice* is declared as const but in line 7, it tries to change the value which will cause an error and stop the function right away.
12. Nothing will be returned because the variable *finalprice* is declared as const but in line 7, it tries to change the value which will cause an error and stop the function right away.
13. The notation:
    a. Accessing the value of the name property in the student object: student.name
    b. Accessing the value of the Grad Year property in the student object: student['Grade Year']
    c. Calling the function for the greeting property in the student object: student.greeting()
    d. Accessing the name property of the object in the Favorite Teacher property in student: student['Favorite Teacher'].name
    e. Access the first index in the array of the courseLoad property of the student object: student.courseLoad[0]
14. Arithmetric:
    a. 32: '3' is a string then plus sign '+' treated 2 as a string and do concatenation
    b. 1
    c. 3
    d. 3null
    e. 4
    f. 0
    g. 3undefined
    h. NaN
15. Comparison
    a. true
    b. false
    c. true
    d. false
    e. false
    f. true
16. === is strict equality, this means both type and value are the same. While == only need value to be the same.
17. Print: "How are you?". Because in the first condition, it treat true as 1, then 2 == true will return false. In the second condition, everything not 0 will be treated as true, therefore this if-else statement will be executed.
18. 
19. [6,8,10], doSomething is passed as the first callback function. In the line 4, newArr will be pushed the value return from: 
    doSomething(array[i], function(x) {
        return x * 2 ;
    });
    which will increase array[i] by 2 as line 12, then return function(arr[i] + 2).
    Therefore, each value of the array will be increased by 2 before multiply by 2.
20. 
21. 
1
4
3
2

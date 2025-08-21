/* #include <stdio.h>
#include <stdlib.h>
 int main(int argc, char *argv[]) {
    printf("Number of arguments: %d\n", argc);
    int num1 , num2;
    num1 = atoi(argv[1]);
    num2 = atoi(argv[2]);

    int sum;
    sum = num1 + num2;
    printf ("%d", sum);
    return 0;
 }
 */

 #include <stdio.h>
 void modifyValue(int a) {
    a = 10; // Only modifies the local copy of a
    printf("Value of a: %d\n", a);
 }
 int main() {
    int x = 5;
    modifyValue(x); // Function call
    printf("Value of x: %d\n", x); // Output: 5 (unchanged)
    return 0;
 }
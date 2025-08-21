#include <stdio.h>

int main () {

    int age = 10;
    int *pAge = &age;

    printf("Address of age: %p\n" , &age);
    printf("address of pAge: %p\n" , pAge);

    printf("Value of age: %d\n", age);
    printf("Value of pAge: %d\n", *pAge);

    printf("Size of age: %d\n", sizeof(age));
    printf("Size of pAge: %d\n", sizeof(pAge));

}
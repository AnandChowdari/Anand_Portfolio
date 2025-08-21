#include <stdio.h>
#include <string.h>
int main () {

    char s[100], a[50];
    int i , j;

    printf ("Enter Your String : ");
    gets (s);

    printf ("Other String : ");
    gets (a);

    strcat (s, a);

    printf ("%s" , s);

    return 0; 
} 
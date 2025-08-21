#include <stdio.h>
int main () {
    int i , j , n;

    printf ("Enter Your Number of Rows: ");
    scanf ("%d", &n);

    for (i = 1 ; i<=n ; i ++) {

        for (j = 1 ; j <= i ; j++) {
            printf ("%d" , j);
        }

        for (j = 1 ; j <= (n - i)*2 - 1 ; j ++){
            printf (" ");
        }

        for (j = i ; j >= 1 ; j--) {
            if (j != n)
            printf ("%d", j);
        } printf("\n");
    }

    return 0;    
    }
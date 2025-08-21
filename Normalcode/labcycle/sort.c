#include <stdio.h>
#include <stdlib.h>
int i , j ;
void bubble(int* a , int n) {
    int temp;

    for (i = 0 ; i < n - 1 ; i++) {
        for ( j = 0 ; j < n- i - 1 ; j++) {
            if (a[j] > a [j+1]) {
                temp = a[j];
                a [j] = a [j + 1];
                a [j + 1] = temp;
            }
        }
    }
    printf ("Sorted Using Bubble Sort\n");
    for ( i = 0 ; i < n ; i++) {
        printf ("%d\n" , a[i]);
    }
    
}

void insertion(int* a , int n) {
    int key;

    for (i = 1 ; i < n ; i++) {
       
        key = a[i];
        j = i - 1;

        while ( j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            j = j - 1;
        }
        a[j + 1] = key;
    }
    printf ("Sorted Using Insertion Sort\n");

    for ( i = 0 ; i < n ; i++) {
        printf ("%d\n" , a[i]);
    }
}

int main () {
    int n , o;
    int *a;
    
    printf ("Enter Number of Elements in list\n");
    scanf ("%d" , &n);

    a = (int *)malloc(n * sizeof(int));

    if (a == NULL) {
    printf ( "Memory Allocation Failed:\n");
    }

    printf ( "Enter Your Elements:\n");
    for ( i = 0 ; i< n ; i ++) {
        scanf ("%d" , &a[i]);
    }
    do {
        printf ("...MENU...\n");
    printf ("1.Bubble Sort\n2. Insertion Sort\n3. Exit\n");
    scanf ("%d" , &o);

    switch (o) {

    case 1:
    bubble (a , n);
    break;

    case 2:
    insertion (a , n);
    break;

    case 3:
    printf ("Exiting... Mingeyy\n");
    break;

    default :
    printf ("Invalid Option");
    break;
    }
    } while (o != 3);

    return 0;
}
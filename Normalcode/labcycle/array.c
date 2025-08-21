#include <stdio.h>
#define MAX 100

int main () {
    int i , j , k ;
    int count = 0;
    int a[MAX];
    do {
    printf ("Enter Your Option:\n");
    printf ("\n...MENU...\n1. Insert\n2. Delete\n3. Sort\n4. Print\n5. Exit\n");
    scanf ("%d" , &k);

    if ( k == 1) {
        if (count < MAX) {
            printf("Enter Your Number : \n");
            scanf ("%d" , &a[count]);
            count++;
        }
        else 
        printf ("List is Full\n");

    }

    else if (k == 2) {
        int o;
        int found = 0;
        printf ("Enter Your Number to Delete\n");
        scanf ("%d" , &o);

        for ( i = 0 ; i < count ; i ++) {
            if ( o == a[i]) {
                found = 1;
                break;
            }
        }
        if (found) {
            for (j = i ; j < count ; j++) {
                a[j] = a[j+1];
            }
            count--;
            printf ("Number Deleted Successfully\n");
        }
        else {
            printf ("Number not found\n");
        }

    }

    else if ( k == 3) {
        int temp;
        
        for (i = 0 ; i < count - 1 ; i++){
            for ( j = 0 ; j < count - i - 1 ; j++) {
                if (a [j] > a[j+1]){
                    temp = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = temp;
                }
            }
        }
        printf ("Sorted List of Numbers:\n");
        for (i = 0 ; i < count ; i++) {
            printf ("%d \n" , &a[i]);
        }
    }

    else if ( k == 4) {
        for ( i = 0 ; i < count ; i ++) {
        printf ("%d\n" , a[i]);
       }
    }

    else if ( k == 5) {
        printf ("Exiting... Mingey\n");
    }

    else {
        printf ("Invalid Option\n");
    }

    }while (k != 5);

    return 0;

}
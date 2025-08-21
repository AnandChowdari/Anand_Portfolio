#include <stdio.h>
int i , j , k;

void linearSearch(int a[] , int *count , int k) {

    int found = 0;

    for (i = 0 ; i < *count ; i++) {
        
        if (a[i] == k) {
            found = 1;
            break;
        }
    }
        if (found) {
            printf ("Your Element Found at index %d \n" , i);
        }
        else {
            printf ("Not Found\n");
        }
    
}

void binarySearch(int a[] , int *count , int k){
    int l , r , n;
    l = 0;
    r = *count;
    3
    
    int found = 0;

    while (l <= r) {
        n = (l + r)/2;
        if (a[n] < k){
        l = n + 1;
        }

        else if (a[n] > k) {
        r = n - 1;
        }

        else if (a[n] == k) {
        found = 1;
        break;
        }
    }

    if(found) {
        printf ("Your Target found at Index %d\n" , n);
    }
    else {
        printf ("Your Target is not fond in Elements\n");
    }
}

int main () {
    int a[100];
    int count = 0;
    int o;
    

    printf ("Enter Your Numbers in list\n");

    for (i = 0 ; i < 100 ; i++) {
       if(scanf ("%d" , &a[i]) != 1) break;
        count++;
    }
    getchar();

    printf ("Enter Your Target :\n");
    scanf ("%d" , &k);

    do {
        printf ("...MENU...\n");
    printf ("1.Linear Search\n2. Binary Search\n3. Exit\n");
    scanf ("%d" , &o);

    switch (o) {

    case 1:
    linearSearch (a , &count , k);
    break;

    case 2:
    binarySearch (a , &count , k);
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
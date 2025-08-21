#include <stdio.h>
int i , j , k;
int a[10][10] , b[10][10];
void add (int a[10][10] , int b[10][10] , int r , int c) {
        int ad[r][c];

        for (i = 0; i < r; i++) {
            for (j = 0 ; j < c; j++) {
                ad[i][j] = a[i][j] + b[i][j];
            }
        }
        
        for (i = 0; i < r; i++) {
            for (j = 0 ; j < c; j++) {
               printf ("%d" , ad[i][j]);
            }
        printf ("\n");
        }
    }


void mul (int a[10][10] , int b[10][10] , int r1 , int c1 , int r2 , int c2) {
    int m[r1][c2];
    for ( i = 0 ; i < r1 ; i++) {
     for (j = 0; j< c2; j++) {
        m[i][j] = 0;
        for (k = 0 ; k < c1 ; k++) {
            m[i][j] += a[i][k] * b[k][j];
        }
     }
     printf ("/n");
    }
    printf("Result of Multiplication:\n"); 
    for (i = 0; i < r1; i++) { 
        for (j = 0; j < c2; j++) { 
            printf("%d ", m[i][j]); 
        } 
            printf("\n"); 
    }
}

void tra (int a[10][10] , int r , int c) {
    int trans[c][r];
    for (i = 0 ; i < r ; i ++) {
        for (j = 0 ; j < c ; j++) {
            trans[j][i] = a[i][j];
        }
    }
    for (i = 0 ; i < c ; i ++) {
        for (j = 0 ; j < r ; j++) {
            printf ("%d" , trans[i][j]);
        }
        printf ("\n");
    }
}

int main () {
    int r1 , r2 , c1 , c2;
    int n , o;

    printf ("Enter Your number of rows in A and B: \n");
    scanf ("%d %d", &r1 , &r2);
    printf ("Enter Your number of coloumns in A and B: \n");
    scanf ("%d %d", &c1 , &c2);

    printf ("Enter Your elements in Matrix A: \n");
     for (i = 0 ; i < r1 ; i ++) {
        for (j = 0 ; j < c1 ; j++) {
            scanf("%d" , &a[i][j]);
        }
    }
    printf ("Enter Your elements in Matrix B: \n");
     for (i = 0 ; i < r2 ; i ++) {
        for (j = 0 ; j < c2 ; j++) {
            scanf("%d" , &b[i][j]);
        }
    }
    
    do {
         printf ("...MENU... \n");
         printf ("1.Addition\n2. Multiplication\n3. Transpose\n4. Exit\n");
         scanf ("%d", &n);

         switch (n) {
            case 1: 
            if (r1 == r2 && c1==c2) {
                add (a , b , r1 , c2 );
            }
            else {
                printf ("Addition is Not Possible for following Matrices\n");
            }
            break;

            case 2:
            if (c1 == r2 && r1 == c2) {
                mul (a , b , r1 , c1 , r2 , c2);
            }
            else {
                printf ("Multiplication is Not Possible for following Matrices\n");
            }
            break;

            case 3: 
            
            printf ("Enter Your Matrix\n");
            printf ("1. A\n2. B\n");
            scanf ("%d", &o);

            switch (o) {
                case 1: 
                tra (a , r1 , c1);
                break;

                case 2:
                tra (b , r2 , c2);
                break;

                default : 
                printf ("Invalid Option\n");
            }
            break;

            case 4:
            printf ("Exiting.. Mingey\n");


         }
          
    }while (n != 4);

    return 0;

}
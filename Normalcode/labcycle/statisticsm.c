#include <stdio.h>
#include <math.h>
float mean(int n , int a[]) {

int sum = 0 ;
for (int i = 0 ; i< n ; i++){

sum += a[i];
}

float mean = (float)sum / n;
printf ("Mean of the Given Elements : %2.f " , mean);
return mean;
}

void median (int n , int a[]) {
    int temp;
    for (int i = 0 ; i < n-1 ; i++){
        for (int j = i+1 ; j < n ; j ++) {

            if (a[i] > a[j]){
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        } 
    }
}       
    float median;
    if (n%2 == 0) {
    median = (a[n/2 - 1]  + a[n/2]) / 2.0;
    }
    else { 
    median = a[n/2]; 
    }
        printf ("Median of the elements : %2.f\n " , median );
    
}

float variance(int n , int a[]) {

    float sum = 0 ;
    float m = mean(n , a);

    for (int i = 0 ; i < n ; i++) {

        sum += (a[i] - m)*(a[i] - m) ;
    }

    float variance = sum/ n;

    printf( "Variance of the elements : %.2f\n " , variance); 
    return variance;
}

void sd (int n , int a[]) {
    

    float var = variance(n , a);
    float stddev = sqrt (var);


    printf ("Standard Deviation of Elements: %.2f\n", stddev);

}

int main (){
    int n ;
    printf ("Enter No of Elements:\n ");
    scanf ("%d", &n);
    int a[n];
    printf("Enter Your elements : \n");
    for (int i = 0 ; i< n ; i++) {
        
        scanf ("%d", &a[i]);
    
    }
    int o;
do {
    printf ("You can do These Calculations:\n");
    printf ("1. Mean\n2. Median\n3. Variance\n4. Standard Deviation\n5. Exit\n");
    scanf ("%d", &o);

    switch(o){

    case 1: 
    mean (n , a);
    break;

    case 2:
    median (n , a);
    break;

    case 3:
    variance (n , a);
    break;

    case 4:
    sd (n , a);
    break;

    case 5: 
    printf ("Exiting...\n");
    break;

    default :
    printf ("Invalid Option");
    }
}while (o != 5);

    return 0;
}
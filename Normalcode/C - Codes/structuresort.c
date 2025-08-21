#include <stdio.h>
#include <string.h>
#include <stdlib.h>
struct emp {
    int eid;
    char name[50];
    char des[50];
    int sal;
};

void sortbySalary (struct emp a [] , int n) {
    struct emp t;
    int i , j , x;
    x = n - 1;
    

    for (i = 0 ; i < n - 1 ; i ++) {
        for (j = i + 1; j < n ; j++) {
            if (a[i].sal < a[j].sal)
            t = a[i] ;
            a[i] = a[j];
            a[j]= t;
        }
    }

    for (i = 0; i < n; i++) { 
        printf("EID: %d, Name: %s, Designation: %s, Salary: %d\n", a[i].eid, a[i].name, a[i].des, a[i].sal); }
}

int main () {

    struct emp c[10];
    int i , n;

    printf ("Enter No of Employee: ");
    scanf ("%d" , &n);

    for (i = 0 ; i < n ; i ++){
        
        printf ("enter Your Employee ID :");
        scanf ("%d", &c[i].eid);
        printf ("enter Your Employee Name :");
        fgets (c[i].name , sizeof (c[i].name) , stdin) ;
        printf ("enter Your Employee Designation :");
        fgets (c[i].des , sizeof (c[i].des) , stdin) ;
        printf ("enter Your Employee Salary :");
        scanf ("%d", c[i].sal);
    }
    sortbySalary (c , n);

    return 0;

}


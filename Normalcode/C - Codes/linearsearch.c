#include<stdio.h>
#include<stdlib.h>

int i , j;
void linearsearch(int arr , , int n, int key){
    for (i= 0 ; i < n; i++){
        if(arr[i] == key){
            printf("%d is found %d index", key , i);
            break;
        }
    }

}
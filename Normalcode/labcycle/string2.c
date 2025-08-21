#include <stdio.h>
#include <string.h>
#include <stdlib.h>

/*  
7.   A menu driven program with options (using Two-dimensional Character arrays) 
(i)   To insert a student name 
(ii) To delete a name 
(iii) To sort names in alphabetical order 
(iv) To print list of names */
#define MAX 100
#define Name_len 50
int i , j;
void insert (char **names , int *count ) {
    if (*count < MAX) {
        names[*count] = (char *)malloc(Name_len*sizeof(char));
        if (names == NULL) {
        printf ("Memory Allocation Failed:\n"); 
        return;
        }
    printf ("Enter Your Name to Insert: \n");
    
    fgets (names[*count] , Name_len , stdin);
    names[*count][strcspn(names[*count] , "\n")] = '\0';

    (*count)++;
    }
    else {
        printf ("List if Full\n");
    }
}

void delete (char **names , int *count) {
    char nametoDelete[Name_len];
    int found = 0;

    printf ("Enter Your Name to Delete: \n");
    getchar();
    fgets (nametoDelete , Name_len , stdin);
    nametoDelete[strcspn(nametoDelete , "\n")] = '\0';
    
    for (i = 0 ; i < *count ; i++ ) {
        if (strcmp (names[i] , nametoDelete) == 0) {
            found = 1;
            free (names[i]);
              break;
        }
    }
        if (found){
            for (j = i ; j < *count - 1; j++) {
                strcpy (names [j] , names [j + 1]);
            }
            printf ("Name has been deleted successfully\n");
        (*count)--;
        }
        else {
            printf ("Unable to Find Your required Name\n");
        }   
}

void ToSort (char **names , int count) {
    if (count > 1) {
        
        for (i = 0 ; i < count - 1 ; i++){
            for ( j = i+ 1; j < count ; j++) {
        if (strcmp (names [i] , names[j]) > 0 ) {
             char *temp = names[i];
             names[i] = names[j];
             names[j] = temp;
        }

      }
    } 
    printf("Names have been sorted successfully\n");
    }
    
  else {
    printf ("Not enough names to sort\n");
  }
}

void printList (char **names , int count ) {
    if (count > 0) {
        for (i = 0 ; i < count ; i++) {
        printf ("%s\n", names[i]);
    }
}
}

int main () {
    char *names [MAX];
    int count = 0;
    int o;
    
    
    do {
    
    printf ("...MENU...\n");
    printf ("1. Insert a Name\n2. Delete a Name\n3. Sort Names\n4. Print List\n5. Exit\n");
    scanf ("%d" , &o);
    getchar ();

    switch (o) {
        case 1:
        insert (names , &count);
        break;

        case 2:
        delete (names , &count);
        break;

        case 3:
        ToSort (names , count);
        break;

        case 4:
        printList (names , count);
        break;

        case 5:
        printf ("Exiting...\n");
        for ( i = 0 ; i < count ; i++){
            free(names[i]);
        }
        break;

        default : printf ("Invalid Option\n");
     }
 }while (o != 5);

 return 0;


} 
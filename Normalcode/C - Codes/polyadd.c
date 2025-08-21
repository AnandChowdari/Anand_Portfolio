#include <stdio.h>
#include <stdlib.h>

struct node {
    int pow;
    int coef;
    struct node*next;
};

struct node *createnode(int coef , int pow){
    struct node* newnode = (struct node*)malloc(sizeof(struct node));
    newnode->coef = coef;
    newnode->pow = pow;
    newnode->next = NULL;
    return newnode;
}

struct node* addpoly (struct node* poly1 , struct node* poly2) {
    struct node* result = NULL;
    struct node** lastref = &result;

    while (poly1!= NULL && poly2!=NULL) {
        struct node* newnode = (struct node*)malloc(sizeof(struct node));
        newnode->next = NULL;
        if (poly1->pow > poly2->pow) {
            newnode->coef = poly1->coef;
            newnode->pow = poly1->pow;
            poly1 = poly1->next;
        }

        else if (poly1->pow < poly2->pow) {
            newnode->coef = poly2->coef;
            newnode->pow = poly2->pow;
            poly2 = poly2->next;
            }
        
        else{
            newnode->coef = poly1->coef + poly2->coef;
            newnode->pow = poly1->pow;
            poly2 = poly2->next;
            poly1 = poly1->next;
        }
        *lastref = newnode;
        lastref = &(newnode->next);

    }

    while (poly1!=NULL || poly2!=NULL) {
        struct node* newnode = (struct node*)malloc(sizeof(struct node));
        newnode->next = NULL;
        if (poly1!=NULL){
            newnode->coef = poly1->coef;
            newnode->pow = poly1->pow;
            poly1 = poly1->next;
        }
        else{
            newnode->coef = poly2->coef;
            newnode->pow = poly2->pow;
            poly2 = poly2->next;
        }
        *lastref = newnode;
        lastref = &(newnode->next);
    }
    return result;
}

void printpolynomial (struct node* head){
    while(head!=NULL) {
        printf("%dx^%d" , head->coef , head->pow);
        if(head->next != NULL)
            printf(" + ");
        
        head = head->next;
    }
    printf("\n");
}

int main () {
    struct node* poly1 =createnode(2 , 2);
    poly1->next = createnode(5 , 1);
    poly1->next->next = createnode(10 , 0);

    struct node* poly2 =createnode(4 , 3);
    poly2->next = createnode(5 , 1);
    poly2->next->next = createnode(10 , 0);

    printpolynomial(poly1);
    printpolynomial(poly2);

    struct node* result = addpoly(poly1 , poly2); 
    printpolynomial(result);

    free(struct node);


}
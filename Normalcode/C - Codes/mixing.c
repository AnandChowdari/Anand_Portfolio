#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

typedef struct node {
    int data;
    struct node* next;
}node;

node* createnode (int data) {
    node* newnode = (node*)malloc(sizeof(node));
    newnode->data = node->data;
    newnode->next = NULL;
};

void intatbeg (node **head){
    int data;
    printf("Enter Your Value to add in Linked List: ");
    scanf ("%d", &data);
    node *newnode = createnode(data);
    newnode->next = *head;
    *head = newnode;
}

void listadd (node **head1, node **head2){
    node* temp = *head1;
    while(temp->next != NULL){
        temp = temp->next;
    }
    temp->next = *head2;
}

void union_lists(node* l1 , node* l2){
    node l3;
    node* temp = &l3;
    l3.next = NULL;

    while (l1 && l2) {
        if(l1->data < l2->data) {
            temp->next = createnode(l1->data);
            l1 = l1->next;
        }
        else if(l1->data > l2->data) {
            temp->next = createnode(l2->data);
            l2 = l2->next;
        }
        else{
            temp->next = createnode(l1->data);
            l1 = l1->next;
            l2= l2->next;
        }
        tail = tail->next;
    }

    while(l1) {
        temp->next = createnode(l1->data);
        l1 = l1->next;
        temp = temp->next;
    }
    while(l2) {
        temp->next = createnode(l2->data);
        l2= l2->nexttemp;
        temp->next;
    }

    return l3.next;
}
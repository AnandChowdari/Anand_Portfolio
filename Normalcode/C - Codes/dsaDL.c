#include <stdio.h>
#include <stdlib.h>

typedef struct node {
    int data;
    struct node* next;
    struct node* prev;
}node;

struct createnode(int data){
    node *newnode = (node*)malloc(sizeof(node));
    newnode->data = data;
    newnode->next = NULL;
    newnode->prev = NULL;
}

void insertatbeg(node** head, int data){
    node* newnode = createnode(data);
    newnode->next = *head;
    if(*head != NULL){
    (*head)->prev = newnode;
    }
    *head = newnode;
}

void insertatend(node** head, int data){
    node* newnode= createnode(data);
    
    if(*head== NULL){
       *head = newnode;
        return;
    } 

    node* temp = *head;
    while(temp->next!=NULL){
        temp = temp->next;
    }
    newnode->prev = temp;
    temp->next = newnode;
}

//Add item at a given location 
void insertatpos(node** head, int key , int data){
    node* newnode = createnode(data);
    node* temp = *head;

    for(int i = 0 ; i<key-1 && temp!=NULL ; i++){
        temp =temp->next;
    }
    if(temp==NULL){
        printf("Invalid Position");
        return;
    }
    newnode->next = temp->next;  
    if (temp->next != NULL) {  // Ensure temp->next is valid before updating prev
        temp->next->prev = newnode;
    }
    newnode->prev = temp;  
    temp->next = newnode;
}

void delatbeg(node** head){
    if(*head== NULL){
        printf("List is Empty");
        return;
    }
    node* temp = *head;
    *head = (*head)->next;
    if(*head!= NULL)
    (*head)->prev = NULL;
    
    free(temp);
}

void deleteatend(node** head){
    if((*head) == NULL){
        printf("List is Empty\n");
        return;
    }
    if(temp->next == NULL){
        free(*head);
        *head = NULL;
        return;
    }
    node* temp = *head;
    while(temp->next!= NULL){
        temp= temp->next;
    }
    free(temp->next);
    temp->next = NULL;
}

void fdisplay(node* head){
    node *temp = head;
    while(temp!= NULL){
        printf("%d->", temp->data);
        temp= temp->next;
    }
    printf("NULL\n");
}

void rdisplay(node* head){
    node* temp = head;
    while(temp->next!=NULL){
        temp = temp->next;
    }
    while(temp!=NULL){
        printf("%d->", temp->data);
        temp = temp->prev;
    }
    printf("NULL\n");
}

void deleteNode(node** head, int key) {
    if (*head == NULL) {
        printf("List is empty.\n");
        return;
    }

    node* temp = *head;
    while (temp != NULL && temp->data != key) {
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Element %d not found.\n", key);
        return;
    }

    if (temp == *head) {
        *head = temp->next;
    }

    if (temp->next != NULL) {
        temp->next->prev = temp->prev;
    }

    if (temp->prev != NULL) {
        temp->prev->next = temp->next;
    }

    free(temp);
    printf("Element %d deleted successfully.\n", key);
}

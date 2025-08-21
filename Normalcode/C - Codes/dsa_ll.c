#include <stdio.h>
#include <stdlib.h>

struct node {
    int data;
    struct node* next;
};

struct node* createnode (int value) {
    struct node* newnode = (struct node*)malloc(sizeof(struct node));
    newnode->data = value;
    newnode->next = NULL;
    return newnode;
}

void insertatBeg(struct node** head , int newdata){
    struct node* newnode = createnode(newdata);
    newnode->next = *head;
    *head = newnode;
}

void insertatlast(struct node**head , int newdata){
    struct node *newnode = createnode(newdata);
    if (*head == NULL) {
        *head = newnode;
        return;
    }
    struct node* temp = *head;
    while(temp->next != NULL){
        temp = temp->next;
    }
        temp->next = newnode;
}

void insert(struct node **head , int newdata , int key){
    struct node* newnode = createnode(newdata);
    if (key == 1) {
        newNode->next = *head;
        *head = newNode;
        return;
    }

    int i = 1;
    struct node* temp = *head;
    while(temp!=NULL && i < key - 1) {
        temp = temp->next;
        i++;

        if (temp!= NULL){
            newnode->next = temp->next;
            temp->next = newnode;
            
        }
    }

}

void printlist (struct node* Node) {
    while(Node!= NULL){
        printf("%d->", Node->data );\
        Node= Node->next;
    }
    printf("NULL\n");
}

int main (){
    struct node* head = NULL;
    insertatBeg(&head , 10);
    insertatBeg(&head , 20);
    insertatBeg(&head , 40);
    insertatlast(&head , 225);
    insert (&head , 34 , 3);

    printlist(head);
    return 0;
}
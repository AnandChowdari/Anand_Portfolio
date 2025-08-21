#include <stdio.h>
#include <stdlib.h>

typedef struct node {
    int data;
    struct node* next;
} node;

// Function to create a new node
node* createnode(int data) {
    node* newnode = (node*)malloc(sizeof(node));
    newnode->data = data;
    newnode->next = NULL;
    return newnode;
}

// Insert at beginning
void inatbeg(node** head, int data) {
    node* newnode = createnode(data);
    newnode->next = *head;
    *head = newnode;
}

// Insert at end
void intatend(node** head, int data) {
    node* newnode = createnode(data);
    if (*head == NULL) {
        *head = newnode;
        return;
    }
    node* temp = *head;
    while (temp->next != NULL) {
        temp = temp->next;
    }
    temp->next = newnode;
}

// Insert at a specific position (0-based index)
void intatpos(node** head, int data, int pos) {
    if (pos == 0) {
        inatbeg(head, data);
        return;
    }

    node* temp = *head;
    for (int i = 0; temp != NULL && i < pos - 1; i++) {
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Invalid position.\n");
        return;
    }

    node* newnode = createnode(data);
    newnode->next = temp->next;
    temp->next = newnode;
}

// Delete from beginning
void delatbeg(node** head) {
    if (*head == NULL) {
        printf("List is empty.\n");
        return;
    }
    node* temp = *head;
    *head = (*head)->next;
    free(temp);
}

// Delete from end
void delatend(node** head) {
    if (*head == NULL) {
        printf("List is empty.\n");
        return;
    }
    if ((*head)->next == NULL) {
        free(*head);
        *head = NULL;
        return;
    }

    node* temp = *head;
    while (temp->next->next != NULL) {
        temp = temp->next;
    }
    free(temp->next);
    temp->next = NULL;
}

// Delete at a specific position
void delatpos(node** head, int pos) {
    if (*head == NULL) {
        printf("List is empty.\n");
        return;
    }
    if (pos == 0) {
        delatbeg(head);
        return;
    }

    node* temp = *head;
    for (int i = 0; temp != NULL && i < pos - 1; i++) {
        temp = temp->next;
    }

    if (temp == NULL || temp->next == NULL) {
        printf("Invalid position.\n");
        return;
    }

    node* todel = temp->next;
    temp->next = temp->next->next;
    free(todel);
}

// Search element
void search(node** head, int key) {
    node* temp = *head;
    int pos = 0;
    while (temp != NULL) {
        if (temp->data == key) {
            printf("Element %d found at position %d\n", key, pos);
            return;
        }
        temp = temp->next;
        pos++;
    }
    printf("Element %d not found.\n", key);
}

// Count elements
void count(node** head) {
    node* temp = *head;
    int c = 0;
    while (temp != NULL) {
        c++;
        temp = temp->next;
    }
    printf("Number of elements in the list: %d\n", c);
}

// Sort list in ascending order
void sort(node** head) {
    if (*head == NULL) return;

    int swapped;
    node *ptr1, *lptr = NULL;

    do {
        swapped = 0;
        ptr1 = *head;

        while (ptr1->next != lptr) {
            if (ptr1->data > ptr1->next->data) {
                int t = ptr1->data;
                ptr1->data = ptr1->next->data;
                ptr1->next->data = t;
                swapped = 1;
            }
            ptr1 = ptr1->next;
        }
        lptr = ptr1;
    } while (swapped);

    printf("List sorted in ascending order.\n");
}

// Find maximum
void maxi(node** head) {
    if (*head == NULL) {
        printf("List is empty.\n");
        return;
    }
    node* temp = *head;
    int max = temp->data;
    while (temp != NULL) {
        if (temp->data > max)
            max = temp->data;
        temp = temp->next;
    }
    printf("Max in list: %d\n", max);
}

// Find minimum
void mini(node** head) {
    if (*head == NULL) {
        printf("List is empty.\n");
        return;
    }
    node* temp = *head;
    int min = temp->data;
    while (temp != NULL) {
        if (temp->data < min)
            min = temp->data;
        temp = temp->next;
    }
    printf("Min in list: %d\n", min);
}

// Remove duplicate elements
void removeDup(node** head) {
    node *curr = *head;
    while (curr != NULL && curr->next != NULL) {
        node *prev = curr;
        node *temp = curr->next;
        while (temp != NULL) {
            if (curr->data == temp->data) {
                prev->next = temp->next;
                free(temp);
                temp = prev->next;
            } else {
                prev = temp;
                temp = temp->next;
            }
        }
        curr = curr->next;
    }
    printf("Duplicates removed.\n");
}

// Display list
void display(node* head) {
    if (head == NULL) {
        printf("List is empty.\n");
        return;
    }
    printf("List: ");
    while (head != NULL) {
        printf("%d -> ", head->data);
        head = head->next;
    }
    printf("NULL\n");
}

// Reverse linked list
void reverseList(node** head) {
    node* prev = NULL;
    node* current = *head;
    node* next = NULL;

    while (current != NULL) {
        next = current->next;  // Store next node
        current->next = prev;  // Reverse the link
        prev = current;        // Move prev forward
        current = next;        // Move current forward
    }

    *head = prev;  // Update head to the new first node
}

// Modify the menu to include reversal option
void displayMenu() {
    printf("\n----- Linked List Operations Menu -----\n");
    printf("1. Insert at beginning\n");
    printf("2. Insert at end\n");
    printf("3. Insert at position\n");
    printf("4. Delete at beginning\n");
    printf("5. Delete at end\n");
    printf("6. Delete at position\n");
    printf("7. Search element\n");
    printf("8. Count elements\n");
    printf("9. Sort list\n");
    printf("10. Find max element\n");
    printf("11. Find min element\n");
    printf("12. Remove duplicate elements\n");
    printf("13. Display list\n");
    printf("14. Reverse list\n"); // Added option for reversal
    printf("15. Exit\n");
    printf("--------------------------------------\n");
    printf("Enter your choice: ");
}

// Modify the main function to include reversal option
int main() {
    node* head = NULL;
    int choice, data, pos;

    do {
        displayMenu();
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter data: ");
                scanf("%d", &data);
                inatbeg(&head, data);
                break;
            case 2:
                printf("Enter data: ");
                scanf("%d", &data);
                intatend(&head, data);
                break;
            case 3:
                printf("Enter data and position: ");
                scanf("%d %d", &data, &pos);
                intatpos(&head, data, pos);
                break;
            case 4:
                delatbeg(&head);
                break;
            case 5:
                delatend(&head);
                break;
            case 6:
                printf("Enter position to delete: ");
                scanf("%d", &pos);
                delatpos(&head, pos);
                break;
            case 7:
                printf("Enter element to search: ");
                scanf("%d", &data);
                search(&head, data);
                break;
            case 8:
                count(&head);
                break;
            case 9:
                sort(&head);
                break;
            case 10:
                maxi(&head);
                break;
            case 11:
                mini(&head);
                break;
            case 12:
                removeDup(&head);
                break;
            case 13:
                display(head);
                break;
            case 14:
                reverseList(&head);
                printf("List reversed successfully.\n");
                break;
            case 15:
                printf("Exiting program...\n");
                break;
            default:
                printf("Invalid choice. Try again.\n");
        }

    } while (choice != 15);

    return 0;
}
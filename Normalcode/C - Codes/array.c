#include <stdio.h>

void insertElement(int arr[], int *n, int element, int position) {
    for (int i = *n; i > position; i--) {
        arr[i] = arr[i - 1];
    }
    arr[position] = element;
    (*n)++;
}

void deleteElement(int arr[], int *n, int position) {
    for (int i = position; i < *n - 1; i++) {
        arr[i] = arr[i + 1];
    }
    (*n)--;
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

void removeDuplicates(int arr[], int *n) {
    int temp[*n];
    int j = 0;
    for (int i = 0; i < *n; i++) {
        int k;
        for (k = 0; k < j; k++) {
            if (arr[i] == temp[k])
                break;
        }
        if (k == j) {
            temp[j++] = arr[i];
        }
    }
    for (int i = 0; i < j; i++) {
        arr[i] = temp[i];
    }
    *n = j;
}

int main() {
    int n = 5, arr[10] = {1, 2, 3, 4, 5};
    int choice, element, position;

    do {
        printf("Menu:\n");
        printf("1. Insert element\n");
        printf("2. Delete element\n");
        printf("3. Print elements\n");
        printf("4. Remove duplicates\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter element to insert and position: ");
                scanf("%d %d", &element, &position);
                if (position >= 0 && position <= n) {
                    insertElement(arr, &n, element, position);
                } else {
                    printf("Invalid position!\n");
                }
                break;
            case 2:
                printf("Enter position to delete: ");
                scanf("%d", &position);
                if (position >= 0 && position < n) {
                    deleteElement(arr, &n, position);
                } else {
                    printf("Invalid position!\n");
                }
                break;
            case 3:
                printArray(arr, n);
                break;
            case 4:
                removeDuplicates(arr, &n);
                break;
            case 5:
                printf("Exiting...\n");
                break;
            default:
                printf("Invalid choice.\n");
        }
    } while (choice != 5);

    return 0;
}

#include <stdio.h>

void insertionSort(int arr[], int n) {
    int i, j, key;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        // Move elements that are greater than key one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }

    // Print sorted array
    printf("Sorted array (Insertion Sort): ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

void selectionSort(int arr[], int n) {
    int i, j, minindex, temp;

    for (i = 0; i < n - 1; i++) {
        minindex = i;
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[minindex]) {
                minindex = j;
            }
        }

        if (minindex != i) {
            temp = arr[i];
            arr[i] = arr[minindex];
            arr[minindex] = temp;
        }
    }

    // Print sorted array
    printf("Sorted array (Selection Sort): ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main() {
    int n;
    printf("Enter your array size: ");
    scanf("%d", &n);

    int arr[n], choice;
    printf("Enter your elements in array:\n");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    while (1) {
        printf("\n1. Insertion Sort\n2. Selection Sort\nEnter your choice: ");
        scanf("%d", &choice);

        if (choice == 1) {
            insertionSort(arr, n);
            break;
        } else if (choice == 2) {
            selectionSort(arr, n);
            break;
        } else {
            printf("Invalid option. Please try again.\n");
        }
    }

    return 0;
}

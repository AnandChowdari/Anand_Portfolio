#include <stdio.h>

#define TABLE_SIZE 7

int hashTable[TABLE_SIZE] = {0}; // Initialize all slots to 0

int hashFunction(int key) {
    return key % TABLE_SIZE;
}

void insertLinear(int key) {
    int index = hashFunction(key);
    int i = 0;

    while (hashTable[(index + i) % TABLE_SIZE] != 0) {
        i++;
        if (i == TABLE_SIZE) {
            printf("Table Full! Cannot Insert %d\n", key);
            return;
        }
    }
    hashTable[(index + i) % TABLE_SIZE] = key;
}

void insertquad(int key) {
    int index = hashfunction(key);
    int i = 0;

    while(hashtable[(index + i*i)% TABLE_SIZE]){
          i++;
        if(i==TABLE_SIZE){
            printf("Table Full! Cannot Insert %d\n", key);
            return;
        }
    }
    hashtable[(index + i*i)% TABLE_SIZE] = key;
}

void displayTable() {
    for (int i = 0; i < TABLE_SIZE; i++) {
        if (hashTable[i] == 0)
            printf("Slot %d: Empty\n", i);
        else
            printf("Slot %d: %d\n", i, hashTable[i]);
    }
}

int main() {
    int keys[] = {50, 51, 64, 29, 99};
    for (int i = 0; i < 5; i++) {
        insertLinear(keys[i]);
    }

        printf("Hash Table using Linear Probing:\n");
    displayTable();

     for (int i = 0; i < 5; i++) {
        insertquad(keys[i]);
    }
    
    
    printf("Hash Table using Quad Probing:\n");
    displayTable();
    
    return 0;
}

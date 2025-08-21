#include<stdio.h>

int factorial(int n) {
    int f = 1;
    while (n) {
        f *= n;
        n--;
    }
    return f;
}

int ncr(int n, int r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

int main() {
    int n, r;
    printf("Enter values for n and r: ");
    scanf("%d %d", &n, &r);
    
    int result = ncr(n, r);
    printf("nCr = %d\n", result);
    
    return 0;
}

#include <stdio.h>
#include <stdlib.h>

void polynomialAddition(int* poly1, int* poly2, int* result, int degree1, int degree2) {
    int maxdegree = (degree1 > degree2) ? degree1 : degree2;
    
    for (int i = 0; i <= maxdegree; i++) {
        result[i] = 0;
        if (i <= degree1) result[i] += poly1[i];
        if (i <= degree2) result[i] += poly2[i];
    }
}

void polynomialMultiply(int* poly1, int* poly2, int* result, int degree1, int degree2) {
    for (int i = 0; i <= degree1 + degree2; i++) {
        result[i] = 0;
    }
    for (int i = 0; i <= degree1; i++) {
        for (int j = 0; j <= degree2; j++) {
            result[i + j] += poly1[i] * poly2[j];
        }
    }
}

void display(int* poly, int degree) {
    for (int i = degree; i >= 0; i--) {
        printf("%dx^%d", poly[i], i);
        if (i > 0) printf(" + ");
    }
    printf("\n");
}

int main() {
    int degree1, degree2;
    printf("Enter the highest degree of polynomials 1 and 2:\n ");
    scanf("%d %d", &degree1, &degree2);
    
    int maxdegree = degree1 + degree2;
    
    int* poly1 = (int*)malloc((degree1 + 1) * sizeof(int));
    int* poly2 = (int*)malloc((degree2 + 1) * sizeof(int));
    int* result_add = (int*)malloc((maxdegree + 1) * sizeof(int));
    int* result_mul = (int*)malloc((maxdegree + 1) * sizeof(int));

    if (!poly1 || !poly2 || !result_add || !result_mul) {
        printf("Memory allocation failed.\n");
        return 1;
    }

    printf("Enter the coefficients of polynomial 1 in descending order:\n");
    for (int i = 0; i <= degree1; i++) {
        scanf("%d", &poly1[i]);
    }

    printf("Enter the coefficients of polynomial 2 in descending order:\n");
    for (int i = 0; i <= degree2; i++) {
        scanf("%d", &poly2[i]);
    }

    polynomialAddition(poly1, poly2, result_add, degree1, degree2);
    printf("Addition result:\n");
    display(result_add, (degree1 > degree2) ? degree1 : degree2);

    polynomialMultiply(poly1, poly2, result_mul, degree1, degree2);
    printf("Multiplication result:\n");
    display(result_mul, degree1 + degree2);

    free(poly1);
    free(poly2);
    free(result_add);
    free(result_mul);

    return 0;
} 
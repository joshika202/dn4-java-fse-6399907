package com.example;
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public int multiply(int a, int b) {
        return a * b;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println("Addition: " + calc.add(4, 5));
        System.out.println("Multiplication: " + calc.multiply(3, 2));
    }
}

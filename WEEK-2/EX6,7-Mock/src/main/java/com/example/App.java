package com.example;

public class App {

    // Simple method to check if a number is positive
    public boolean isPositive(int number) {
        return number > 0;
    }

    // Optional main method for manual testing
    public static void main(String[] args) {
        App app = new App();
        System.out.println("5 is positive: " + app.isPositive(5));
        System.out.println("-2 is positive: " + app.isPositive(-2));
    }
}

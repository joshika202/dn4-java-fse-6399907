package com.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorAAATest {

    private Calculator calc;

    // Arrange: Run before each test
    @Before
    public void setUp() {
        calc = new Calculator();
        System.out.println("Setup done.");
    }

    // Act & Assert: Each test case
    @Test
    public void testAdd() {
        // Act
        int result = calc.add(4, 5);

        // Assert
        assertEquals(9, result);
    }

    @Test
    public void testMultiply() {
        // Act
        int result = calc.multiply(3, 2);

        // Assert
        assertEquals(6, result);
    }

    // Teardown: Run after each test
    @After
    public void tearDown() {
        System.out.println("Teardown done.");
    }
}

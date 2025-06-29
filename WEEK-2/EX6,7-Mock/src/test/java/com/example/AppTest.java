package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class AppTest {

    @Test
    public void testIsPositive() {
        App app = new App();

        assertTrue(app.isPositive(10));   // should return true
        assertFalse(app.isPositive(-5));  // should return false
        assertFalse(app.isPositive(0));   // edge case
        
    }
}



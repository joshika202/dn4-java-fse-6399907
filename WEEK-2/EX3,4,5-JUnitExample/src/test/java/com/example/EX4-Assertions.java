package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // assertEquals: check if two values are equal
        assertEquals(5, 2 + 3);

        // assertTrue: check if condition is true
        assertTrue(10 > 1);

        // assertFalse: check if condition is false
        assertFalse(2 > 5);

        // assertNull: check if object is null
        Object obj1 = null;
        assertNull(obj1);

        // assertNotNull: check if object is not null
        Object obj2 = new Object();
        assertNotNull(obj2);
    }
}


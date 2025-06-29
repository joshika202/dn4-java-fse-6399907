package com.example;

import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // 1. Mock the ExternalApi
        ExternalApi mockApi = mock(ExternalApi.class);

        // 2. Inject mock into MyService
        MyService service = new MyService(mockApi);

        // 3. Call method that uses the mock
        service.fetchData();

        // 4. Verify interaction
        verify(mockApi).getData();  // ✅ Test passes only if getData() was called
    }
}

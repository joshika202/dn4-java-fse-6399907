

public class SingletonTest {
    public static void main(String[] args) {
        // Get Logger instance twice
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        // Check if both references point to the same instance
        if (logger1 == logger2) {
            System.out.println("✅ Both logger instances are the same (Singleton works).");
        } else {
            System.out.println("❌ Logger instances are different (Singleton failed).");
        }

        // Use the logger
        logger1.log("This is the first log message.");
        logger2.log("This is the second log message.");
    }
}

public class Logger {
    private static Logger instance;

    // Private constructor
    private Logger() {
        System.out.println("Logger instance created.");
    }

    // Public method to access the instance
    public static Logger getInstance() {
        if (instance == null) {
            synchronized (Logger.class) {
                if (instance == null) {
                    instance = new Logger();
                }
            }
        }
        return instance;
    }

    // Log method
    public void log(String message) {
        System.out.println("LOG: " + message);
    }
}

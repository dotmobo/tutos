/**
 * Main/test/client class.
 */
public class Main {
    public static void main(String[] args) {
        CommandFactory cf = CommandFactory.init();
        cf.executeCommand("Light on");
        cf.listCommands();
    }
}
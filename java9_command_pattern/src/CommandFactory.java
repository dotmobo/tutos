/**
 * The CommandFactory class.<br/>
 */

import java.util.HashMap;

public class CommandFactory {
    private final HashMap<String, Command> commands;

    private CommandFactory() {
        this.commands = new HashMap<>();
    }

    public void addCommand(String name, Command command) {
        this.commands.put(name, command);
    }

    public void executeCommand(String name) {
        if (this.commands.containsKey(name)) {
            this.commands.get(name).apply();
        }
    }

    public void listCommands() {
        // using stream (Java 8)
        System.out.println("Commands enabled :");
        this.commands.keySet().stream().forEach(System.out::println);
    }

    /* Factory pattern */
    public static CommandFactory init() {
        CommandFactory cf = new CommandFactory();
        // commands are added here using lambda. It also possible to dynamically add commands without editing code.
        cf.addCommand("Light on", () -> System.out.println("Light turned on"));
        cf.addCommand("Light off", () -> {
            System.out.println("Light turned off");
        });
        return cf;
    }
}



/**
 * 2 player Pokemon battle game with GUI pop-ups for moves and rounds
 * @author Viransh Shah
 * @version 29.October.2020
 * @since 21.October.2020
 */

//Imports used in the program
import java.util.ArrayList;//ArrayList methods
import java.util.Random;//Randomizing
import java.util.Scanner;//User Input
import java.util.concurrent.TimeUnit;//Program Sleep
import java.io.File;//File Reading
import javax.swing.*;//GUI
import java.awt.*;//Color, Fonts, etc.
import java.net.MalformedURLException;//URL broken exception
import java.net.URL;//Using URL in GUI

public class PokemonGo {

    /**
     * @param args
     * @throws java.io.FileNotFoundException might occur in main
     */
    public static void main(String[] args) throws java.io.FileNotFoundException {
        File file1 = new File("Pokemon_Class-Grade_12_Project\\PokemonGo.java");
        Scanner file = new Scanner(file1);
        Scanner in = new Scanner(System.in);
        String pokemonName = "";
        ArrayList<Pokemon> pokemons = new ArrayList<>();
        for (int i = 0; i < 6; i++) {
            ArrayList<String> arr = new ArrayList<>();
            for (int j = 1; j <= 8; j++) {
                if (j == 1) {
                    pokemonName = file.nextLine();
                } else {
                    String check = file.nextLine();
                    arr.add(check);
                }
            }
            if (i < 5) {
                file.nextLine();
            }
            String[] numStrengths = arr.get(4).split(",");
            //HP set between the number of strengths times 20 and 10 with the starting value 200
            int HP = (int) (Math.random() * (numStrengths.length * 20 - 10 + 1) + 200);
            Pokemon pokemon = new Pokemon(pokemonName, arr.get(0), HP, arr.get(1), arr.get(2), arr.get(3), arr.get(4), arr.get(5), arr.get(6));
            pokemons.add(pokemon);
        }
        file.close();
        // ASCII
        System.out.println("                                  ,'\\");
        System.out.println("    _.----.        ____         ,'  _\\   ___    ___     ____");
        System.out.println("_,-'       `.     |    |  /`.   \\,-'    |   \\  /   |   |    \\  |`.");
        System.out.println("\\      __    \\    '-.  | /   `.  ___    |    \\/    |   '-.   \\ |  |");
        System.out.println(" \\.    \\ \\   |  __  |  |/    ,','_  `.  |          | __  |    \\|  |");
        System.out.println("   \\    \\/   /,' _`.|      ,' / / / /   |          ,' _`.|     |  |");
        System.out.println("    \\     ,-'/  /   \\    ,'   | \\/ / ,`.|         /  /   \\  |     |");
        System.out.println("     \\    \\ |   \\_/  |   `-.  \\    `'  /|  |    ||   \\_/  | |\\    |");
        System.out.println("      \\    \\ \\      /       `-.`.___,-' |  |\\  /| \\      /  | |   |");
        System.out.println("       \\    \\ `.__,'|  |`-._    `|      |__| \\/ |  `.__,'|  | |   |");
        System.out.println("        \\_.-'       |__|    `-._ |              '-.|     '-.| |   |");
        System.out.println("                                `'                            '-._|");
        // Intro
        wait(2);// Program sleeps for n seconds when method is called
        System.out.println("Welcome to the world of Pokemon");
        wait(1);
        System.out.println();
        System.out
                .println("This is a 2 player game with many amazing Pokemon and many different moves of each Pokemon.");
        wait(2);
        System.out.println();
        System.out.println("Each move also having a unique type.");
        wait(1);
        System.out.println();
        System.out.println("During the entire game type -1 to end the game.");
        wait(1);
        System.out.println();
        System.out.println("Let's Get Started:");
        wait(1);
        System.out.println();
        System.out.print("Enter Player 1's name: ");
        String name1 = in.nextLine();
        wait(1);
        System.out.println();
        System.out.print("Enter Player 2's name: ");
        String name2 = in.nextLine();
        wait(1);
        System.out.println();
        ArrayList<Pokemon> pokemons1 = new ArrayList<>();
        ArrayList<Pokemon> pokemons2 = new ArrayList<>();
        printPokemon(pokemons);
        ArrayList<Integer> chosen = new ArrayList<>();
        System.out.println("Players will choose their own Pokemon in turns.");
        wait(1);
        System.out.println();
        System.out.println("There are a total of " + Pokemon.numPokemon + " Pokemon to choose from.");
        wait(1);
        // Choosing pokemon from the number of Pokemon available
        for (int i = 0; i < Pokemon.numPokemon; i++) {
            System.out.println();
            // Player 1's turn
            if (i % 2 == 0) {
                System.out.print(name1 + "'s turn to choose: ");
                int num = 0;
                // Tries to turn the String input to an Integer
                try {
                    num = Integer.parseInt(in.nextLine());
                    quit(num);
                } catch (NumberFormatException e) {
                    // Catches Number Format Exception which occurs when a string can't be turned to an Integer
                    System.out.println();
                    // When caught prints
                    System.out.println("Invalid Input.\nPlease enter an integer.");
                }
                if (num > 0 && num <= Pokemon.numPokemon) {
                    // If checkChosen return true we can add Pokemon
                    if (checkChosen(num, chosen)) {
                        pokemons1.add(pokemons.get(num - 1));
                        // Pokemon is added with that Pokemon number added to chosen list
                        chosen.add(num);
                    } else {
                        System.out.println();
                        System.out.println("That pokemon is already chosen.");
                        i--;// To try again and so the loop doesn't go out of bounds
                    }
                } else {
                    System.out.println();
                    System.out.println("Invalid Pokemon number entered.");
                    i--;
                }
            } else { // Player's turn
                System.out.print(name2 + "'s turn to choose: ");
                int num = 0;
                try {
                    num = Integer.parseInt(in.nextLine());
                    quit(num);
                } catch (NumberFormatException e) {
                    System.out.println();
                    System.out.println("Invalid Input.\nPlease enter an integer.");
                }
                if (num > 0 && num <= Pokemon.numPokemon) {
                    if (checkChosen(num, chosen)) {
                        pokemons2.add(pokemons.get(num - 1));
                        chosen.add(num);
                    } else {
                        System.out.println();
                        System.out.println("That pokemon is already chosen.");
                        i--;
                    }
                } else {
                    System.out.println();
                    System.out.println("Invalid Pokemon number entered.");
                    i--;
                }
            }
        }
        wait(1);
        System.out.println();
        System.out.println();
        // Player objects created with names and ArrayList of Pokemon
        Player player1 = new Player(name1, pokemons1);
        Player player2 = new Player(name2, pokemons2);
        // Method calls for choosingPokemon for each Player
        // Return values of the methods and others are passed as arguments       
        playingPokemon(player1, player2, choosingPokemon(player1), choosingPokemon(player2), 1);
    }

    /**
     * Allows a player to choose a Pokemon from their List of Pokemon
     * 
     * @param player Player object
     * @return Pokemon object chosen
     */
    public static Pokemon choosingPokemon(Player player) {
        System.out.println(player.getName() + " you have " + player.getPokemons().size() + " Pokemon to choose from.");
        System.out.println();
        Scanner in = new Scanner(System.in);
        int num = 0;
        wait(1);
        while (num > Integer.MIN_VALUE) {
            printPokemon(player.getPokemons());
            System.out.print(player.getName() + " choose a Pokemon to battle: ");
            try {
                num = Integer.parseInt(in.nextLine());
                wait(1);
                quit(num);
            } catch (NumberFormatException e) {
                System.out.println();
                System.out.println("Invalid Input.\nPlease enter an integer.");
            }
            System.out.println();
            if (num > 0 && num <= player.getPokemons().size()) {
                return player.getPokemons().get(num - 1);
            } else {
                System.out.println("Invalid Pokemon number entered.");
                System.out.println();
            }
        }       
        return null;
    }

    /**
     * Allowing each player to choose a move of their Pokemon and deal damage to
     * another Checking if a pokemon should be replaced or not.
     * 
     * @param p1,p2               Player objects battling each other with their
     *                            Pokemon
     * @param pokemonP1,pokemonP2 Pokemon objects battling each other
     * @param i                   Round number of the current recursion
     */
    public static void playingPokemon(Player p1, Player p2, Pokemon pokemonP1, Pokemon pokemonP2, int i) {
        Scanner in = new Scanner(System.in);
        int check = 0;
        String name1 = pokemonP1.getName();
        String name2 = pokemonP2.getName();
        while (pokemonP1.getHPLeft() > 0 && pokemonP2.getHPLeft() > 0) {
            System.out.println();
            if (i % 2 != 0) {
                System.out.println("ROUND: " + i);
                wait(1);
                System.out.println();
                System.out.println(name1 + " V.S. " + name2);
                System.out.println();
                wait(1);
                // Tries calling method and catches MalformedURLException which the method might
                // throw
                // MalformedURLException is where the url is broken, not valid, etc.
                try {
                    roundGUI(pokemonP1, pokemonP2, i);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
                System.out.println(p1.getName() + " choose a move of " + name1 + "'s");
                wait(1);
                printMoves(pokemonP1);
                int moveNum = 0;
                try {
                    moveNum = Integer.parseInt(in.nextLine());
                    quit(moveNum);
                } catch (NumberFormatException e) {
                    System.out.println();
                    System.out.println("Invalid Input.\nPlease enter an integer.");
                }
                System.out.println();
                // Moves num has to be an actual move number
                if (moveNum > 0 && moveNum <= pokemonP1.getMoves().length) {
                    // Reduces number of moves for the move chosen
                    // Checks if moves left or not
                    if (pokemonP1.reduceNumMoves(moveNum - 1)) {
                        // Gets move, moveUrl GIF, and moveType
                        String move = pokemonP1.getMoves()[moveNum - 1];
                        String moveType = pokemonP1.getMoveTypes()[moveNum - 1];
                        System.out.println(name1 + " used " + move + " on " + name2);
                        String moveUrl = pokemonP1.getMoveUrl()[moveNum - 1];
                        wait(2);
                        try {
                            moveGUI(move, moveUrl);
                        } catch (MalformedURLException e) {
                            e.printStackTrace();
                        }
                        // Player 2's pokemonP2 is attacked by move and moveType
                        p2.attacked(pokemonP2, move, moveType);
                        // If the pokemon attacked dodged it will show a GUI dodged GIF of that Pokemon
                        if (pokemonP2.isDodge()) {
                            moveUrl = pokemonP2.getMoveUrl()[pokemonP2.getMoveUrl().length - 1];
                            move = pokemonP2.getName() + " Dodged";
                            wait(1);
                            try {
                                moveGUI(move, moveUrl);
                            } catch (MalformedURLException e) {
                                e.printStackTrace();
                            }
                        }
                        i++;
                    } else {
                        // No more moves left alert
                        // Other Pokemon automatically wins
                        wait(1);
                        System.out.println("No more " + pokemonP1.getMoves()[moveNum - 1] + " moves left");
                        if (pokemonP1.getSumNumMoves() <= 0) {
                            pokemonP1.setHPLeft(0);
                        }
                        wait(1);
                    }
                } else {
                    System.out.println("Invalid move number entered.");
                }
            } else {
                System.out.println("ROUND: " + i);
                wait(1);
                System.out.println();
                System.out.println(name2 + " V.S. " + name1);
                System.out.println();
                wait(1);
                try {
                    roundGUI(pokemonP2, pokemonP1, i);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
                System.out.println(p2.getName() + " choose a move of " + name2 + "'s");
                wait(1);
                printMoves(pokemonP2);
                int moveNum = 0;
                try {
                    moveNum = Integer.parseInt(in.nextLine());
                    quit(moveNum);
                } catch (NumberFormatException e) {
                    System.out.println();
                    System.out.println("Invalid Input.\nPlease enter an integer.");
                }
                System.out.println();
                if (moveNum > 0 && moveNum <= pokemonP2.getMoves().length) {
                    if (pokemonP2.reduceNumMoves(moveNum - 1)) {
                        String move = pokemonP2.getMoves()[moveNum - 1];
                        String moveType = pokemonP2.getMoveTypes()[moveNum - 1];
                        System.out.println(name2 + " used " + move + " on " + name1);
                        String moveUrl = pokemonP2.getMoveUrl()[moveNum - 1];
                        wait(2);
                        try {
                            moveGUI(move, moveUrl);
                        } catch (MalformedURLException e) {
                            e.printStackTrace();
                        }
                        p1.attacked(pokemonP1, move, moveType);
                        if (pokemonP1.isDodge()) {
                            moveUrl = pokemonP1.getMoveUrl()[pokemonP1.getMoveUrl().length - 1];
                            move = pokemonP1.getName() + " Dodged";
                            wait(1);
                            try {
                                moveGUI(move, moveUrl);
                            } catch (MalformedURLException e) {
                                e.printStackTrace();
                            }
                        }
                        i++;
                    } else {
                        wait(1);
                        System.out.println("No more " + pokemonP2.getMoves()[moveNum - 1] + " moves left");
                        if (pokemonP2.getSumNumMoves() <= 0) {
                            pokemonP2.setHPLeft(0);
                        }
                        wait(1);
                    }
                } else {
                    System.out.println("Invalid move number entered.");
                }
            }
            // Calls method whoWon and gets to know who won.
            check = whoWon(p1, p2, pokemonP1, pokemonP2);
        }

        // If both Players still have Pokemon the Player who lost choose a new Pokemon
        if (!p1.getPokemons().isEmpty() && !p2.getPokemons().isEmpty()) {
            if (check == 1) {
                wait(1);
                playingPokemon(p1, p2, choosingPokemon(p1), pokemonP2, i);
            } else if (check == 2) {
                wait(1);
                playingPokemon(p1, p2, pokemonP1, choosingPokemon(p2), i);
            }
        } else if (p1.getPokemons().isEmpty() || p2.getPokemons().isEmpty()) {
            // Checks which Player has no more Pokemon so the other player can win
            if (p1.getPokemons().isEmpty()) {
                wait(1);
                p2.removePokemonsAll();
                System.out.println(p2.getName() + " WON THE CHAMPIONSHIP!!!");
                wait(2);
                try {
                    champion(p2);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
                // Exits system with code 0.
                System.exit(0);
            } else {
                wait(1);
                p1.removePokemonsAll();
                System.out.println(p1.getName() + " WON THE CHAMPIONSHIP!!!");
                wait(2);
                try {
                    champion(p1);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
                System.exit(0);
            }
        }       
    }

    /**
     * Checks which players pokemon won and if a pokemon has any more moves left
     * 
     * @param p1,p2               Player objects
     * @param pokemonP1,pokemonP2 Pokemon objects that were playing
     * @return int Player 1, 2 or none won yet
     */
    public static int whoWon(Player p1, Player p2, Pokemon pokemonP1, Pokemon pokemonP2) {
        if (pokemonP1.getSumNumMoves() <= 0 && pokemonP2.getHPLeft() > 0) {
            pokemonP1.setHPLeft(0);
            wait(1);
            System.out.println();
            System.out.println(pokemonP1.getName() + " has no more moves left.");
            wait(2);
        } else if (pokemonP2.getSumNumMoves() <= 0 && pokemonP1.getHPLeft() > 0) {
            pokemonP2.setHPLeft(0);
            wait(1);
            System.out.println();
            System.out.println(pokemonP2.getName() + " has no more moves left.");
            wait(2);
        }
        if (pokemonP1.getHPLeft() <= 0) {
            wait(1);
            System.out.println();
            System.out.println(pokemonP2.getName() + " WON THE BATTLE!!");
            wait(2);
            try {
                won(pokemonP2);
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }
            System.out.println();
            p1.removePokemons(pokemonP1);
            return 1;
        } else if (pokemonP2.getHPLeft() <= 0) {
            wait(1);
            System.out.println();
            System.out.println(pokemonP1.getName() + " WON THE BATTLE!!");
            wait(2);
            try {
                won(pokemonP1);
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }
            System.out.println();
            p2.removePokemons(pokemonP2);
            return 2;
        }
        return 0;
    }

    /**
     * GUI Frame display of the player name and their Pokemon that are champions
     * 
     * @param player Player object that won
     * @throws MalformedURLException might occur in this method
     */
    public static void champion(Player player) throws MalformedURLException {
        JFrame frame = new JFrame();
        // Frame created
        frame.setPreferredSize(new Dimension(1450, 700));
        // Size of Frame with new Dimension of width and height
        frame.setLayout(new FlowLayout());
        // Layout for left to right display
        Color frames = getRandomColor();
        // Frame color is set to random
        frame.getContentPane().setBackground(frames);
        JPanel panel = new JPanel();
        // Panel Created
        panel.setLayout(new FlowLayout());
        Icon image = new ImageIcon(new URL(player.getInjured().get(2).getUrl()));
        // Image icon of the pokemon set
        Icon image1 = new ImageIcon(new URL(player.getInjured().get(1).getUrl()));
        Icon image2 = new ImageIcon(new URL(player.getInjured().get(0).getUrl()));
        JPanel jPanel = new JPanel();
        jPanel.setPreferredSize(new Dimension(1400, 60));
        JLabel jLabel = new JLabel(player.getName() + " WON THE CHAMPIONSHIP!!!");
        jLabel.setBorder(BorderFactory.createEmptyBorder(0, 20, 20, 20));
        jLabel.setForeground(getRandomColor());
        jLabel.setFont(new Font("Roboto", Font.ITALIC + Font.BOLD, 60));
        // Label font and size set
        jPanel.add(jLabel, JLabel.CENTER);
        // Label is added to panel in Center
        frame.add(jPanel);// Panel added to frame
        JPanel panel2 = new JPanel();
        panel2.setPreferredSize(new Dimension(1000, 30));
        panel2.setBackground(frames);
        // Panel background set as the same one as frame
        frame.add(panel2);
        jPanel.setBackground(frames);
        JLabel label = new JLabel(player.getInjured().get(2).getName(), image, JLabel.CENTER);
        JLabel label1 = new JLabel(player.getInjured().get(1).getName(), image1, JLabel.CENTER);
        JLabel label2 = new JLabel(player.getInjured().get(0).getName(), image2, JLabel.CENTER);
        // Labels with images and text created
        label.setVerticalTextPosition(JLabel.TOP);
        // Text Position on top vertically and center horizontally
        label.setHorizontalTextPosition(JLabel.CENTER);
        label1.setVerticalTextPosition(JLabel.TOP);
        label1.setHorizontalTextPosition(JLabel.CENTER);
        label2.setVerticalTextPosition(JLabel.TOP);
        label2.setHorizontalTextPosition(JLabel.CENTER);
        // A gap of 6 units between image and text
        label.setIconTextGap(6);
        label1.setIconTextGap(6);
        label2.setIconTextGap(6);
        label.setFont(new Font("Roboto", Font.ITALIC + Font.BOLD, 40));
        label1.setFont(new Font("Roboto", Font.ITALIC + Font.BOLD, 40));
        label2.setFont(new Font("Roboto", Font.ITALIC + Font.BOLD, 40));
        // Color of the label words set
        Color labelsColor = getRandomColor();
        label.setForeground(labelsColor);
        label1.setForeground(labelsColor);
        label2.setForeground(labelsColor);
        panel.setBackground(frames);
        panel.add(label);
        panel.add(label1);
        panel.add(label2);
        frame.add(panel);
        // Packs the whole frame to fit the perfect size of the contents
        frame.pack();
        // Shows Frame in center of the Display for the user
        Dimension dimension = Toolkit.getDefaultToolkit().getScreenSize();
        int x = (int) ((dimension.getWidth() - frame.getWidth()) / 2);
        int y = (int) ((dimension.getHeight() - frame.getHeight()) / 2);
        frame.setLocation(x, y);
        // Is always on top of other windows
        frame.setAlwaysOnTop(true);
        // Visible to user or not
        frame.setVisible(true);
        wait(5);
        frame.setVisible(false);
    }

    /**
     * GUI Frame display move name and GIF of move from url
     * 
     * @param move    Name of move
     * @param moveUrl GIF url of move
     * @throws MalformedURLException might occur in this method
     */
    public static void moveGUI(String move, String moveUrl) throws MalformedURLException {
        JFrame frame = new JFrame();
        Icon image = new ImageIcon(new URL(moveUrl));
        JLabel label = new JLabel(move, image, JLabel.CENTER);
        // Image in center of the label
        frame.getContentPane().setBackground(getRandomColor());
        label.setVerticalTextPosition(JLabel.TOP);
        label.setHorizontalTextPosition(JLabel.CENTER);
        label.setIconTextGap(6);
        label.setFont(new Font("Roboto", Font.ITALIC + Font.BOLD, 40));
        label.setForeground(getRandomColor());
        frame.add(label);
        frame.pack();
        Dimension dimension = Toolkit.getDefaultToolkit().getScreenSize();
        int x = (int) ((dimension.getWidth() - frame.getWidth()) / 2);
        int y = (int) ((dimension.getHeight() - frame.getHeight()) / 2);
        frame.setLocation(x, y);
        frame.setAlwaysOnTop(true);
        frame.setVisible(true);
        wait(5);
        frame.setVisible(false);
    }

    /**
     * GUI Frame display of which Pokemon won the battle
     * 
     * @param pokemon Pokemon object which is the winner
     * @throws MalformedURLException might occur in this method
     */
    public static void won(Pokemon pokemon) throws MalformedURLException {
        JFrame frame = new JFrame();
        Icon image = new ImageIcon(new URL(pokemon.getUrl()));
        JLabel won = new JLabel(pokemon.getName() + " WON THE BATTLE!!", image, JLabel.CENTER);
        won.setForeground(getRandomColor());
        won.setFont(new Font("Roboto", Font.ITALIC + Font.BOLD, 60));
        frame.getContentPane().setBackground(getRandomColor());
        won.setVerticalTextPosition(JLabel.TOP);
        won.setHorizontalTextPosition(JLabel.CENTER);
        won.setIconTextGap(6);
        frame.add(won);
        frame.pack();
        Dimension dimension = Toolkit.getDefaultToolkit().getScreenSize();
        int x = (int) ((dimension.getWidth() - frame.getWidth()) / 2);
        int y = (int) ((dimension.getHeight() - frame.getHeight()) / 2);
        frame.setLocation(x, y);
        frame.setAlwaysOnTop(true);
        frame.setVisible(true);
        wait(5);
        frame.setVisible(false);
    }

    /**
     * GUI Frame display of round number and one pokemon VS another images with
     * their respective health bars
     * 
     * @param pokemon1 First Pokemon object to display
     * @param pokemon2 Second Pokemon object to display
     * @param round    Current round number
     * @throws MalformedURLException might occur in this method
     */
    public static void roundGUI(Pokemon pokemon1, Pokemon pokemon2, int round) throws MalformedURLException {
        JFrame frame = new JFrame();
        frame.setSize(1400, 700);
        frame.setLayout(new FlowLayout());
        frame.setAlwaysOnTop(true);
        Color frames = getRandomColor();
        frame.getContentPane().setBackground(frames);
        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout());
        // Image icon created
        Icon image1 = new ImageIcon(new URL(pokemon1.getUrl()));
        Icon image2 = new ImageIcon(new URL(pokemon2.getUrl()));
        Icon image3 = new ImageIcon(PokemonGo.class.getResource("VS.gif"));

        // Round Heading
        JPanel jPanel = new JPanel();
        jPanel.setPreferredSize(new Dimension(1400, 60));
        JLabel jLabel = new JLabel("Round " + round);
        // The heading was getting cut so this creates empty border around it
        jLabel.setBorder(BorderFactory.createEmptyBorder(0, 20, 20, 20));
        jLabel.setForeground(getRandomColor());
        jLabel.setFont(new Font("Roboto", Font.ITALIC + Font.BOLD, 50));
        jPanel.add(jLabel, JLabel.CENTER);
        frame.add(jPanel, JFrame.TOP_ALIGNMENT);
        jPanel.setBackground(frames);

        JLabel label = new JLabel(pokemon1.getName(), image1, JLabel.CENTER);
        label.setFont(new Font("Roboto", Font.ITALIC + Font.BOLD, 40));
        Color labels = getRandomColor();
        label.setForeground(labels);
        label.setVerticalTextPosition(JLabel.TOP);
        label.setHorizontalTextPosition(JLabel.CENTER);
        label.setIconTextGap(0);// No icon and text gap
        panel.add(label);

        JLabel label2 = new JLabel(image3, JLabel.CENTER);
        panel.add(label2);

        JLabel label1 = new JLabel(pokemon2.getName(), image2, JLabel.CENTER);
        label1.setFont(new Font("Roboto", Font.ITALIC + Font.BOLD, 40));
        label1.setForeground(labels);
        label1.setVerticalTextPosition(JLabel.TOP);
        label1.setHorizontalTextPosition(JLabel.CENTER);
        label1.setIconTextGap(0);
        panel.add(label1);

        panel.setBackground(frames);

        frame.add(panel);

        // Panels to go behind progress bar as a border
        JPanel jPanel1 = new JPanel();
        jPanel1.setLayout(new FlowLayout());
        jPanel1.setBackground(frames);

        JPanel jPanel2 = new JPanel();
        jPanel2.setSize(200, 30);
        Color panels = getRandomColor();
        jPanel2.setBackground(panels);

        // Progress bar's horizontal size can be set which it sets to the current health
        // of Pokemon
        JProgressBar health = new JProgressBar(0, pokemon1.getHP());
        health.setPreferredSize(new Dimension(200, 30));
        Color healths = getRandomColor();
        health.setForeground(healths);
        health.setValue(pokemon1.getHPLeft());// Sets health

        // Progress bar added to its panel which is added to main panel
        jPanel2.add(health);

        jPanel1.add(jPanel2);

        // Extra Panel to separate the health bars
        JPanel jPanel4 = new JPanel();
        jPanel4.setPreferredSize(new Dimension(725, 30));
        jPanel4.setBackground(frames);

        jPanel1.add(jPanel4, JPanel.CENTER_ALIGNMENT);

        JPanel jPanel3 = new JPanel();
        jPanel3.setSize(200, 30);
        jPanel3.setBackground(panels);

        JProgressBar health1 = new JProgressBar(0, pokemon2.getHP());
        health1.setPreferredSize(new Dimension(200, 30));
        health1.setForeground(healths);
        health1.setValue(pokemon2.getHPLeft());

        jPanel3.add(health1);

        jPanel1.add(jPanel3);

        // Main panel with 2 Health bar Panels with an extra panel between the two is
        // added
        frame.add(jPanel1);

        Dimension dimension = Toolkit.getDefaultToolkit().getScreenSize();
        int x = (int) ((dimension.getWidth() - frame.getWidth()) / 2);
        int y = (int) ((dimension.getHeight() - frame.getHeight()) / 2);
        frame.setLocation(x, y);

        frame.setVisible(true);

        wait(5);

        frame.setVisible(false);
    }

    /**
     * Checks if the a pokemon number is chosen or not
     * 
     * @param num    Number chosen by the user
     * @param chosen The ArrayList of chosen numbers
     * @return boolean Allowed to choose that num or not
     */
    public static boolean checkChosen(int num, ArrayList<Integer> chosen) {
        for (int number : chosen) {
            if (number == num) {
                return false;
            }
        }
        return true;
    }

    /**
     * Prints pokemon objects with their respective numbers starting from 1
     * 
     * @param pokemons Pokemon ArrayList
     */
    public static void printPokemon(ArrayList<Pokemon> pokemons) {
        int i = 1;
        for (Pokemon pokemon : pokemons) {
            System.out.println(i + ") " + pokemon);
            wait(1);
            i++;
        }
    }

    /**
     * Prints the moves of the Pokemon from parameter
     * 
     * @param pokemon A Pokemon object
     */
    public static void printMoves(Pokemon pokemon) {
        int i = 1;
        wait(1);
        System.out.println();
        System.out.println("Format: Move Number. [Move Name](Number of Moves)");
        for (String move : pokemon.getMoves()) {
            // Prints as the format above
            System.out.print("\n" + i + ". " + "[" + move + "]" + "(" + pokemon.getNumMoves()[i - 1] + ")");
            i++;
        }
        wait(1);
        System.out.print("\n\nChoose a Move Number: ");
    }

    /**
     * Sets the program to sleep for
     * 
     * @param num seconds
     */
    public static void wait(int num) {
        // Tries this and catches Interrupted Exception, which is printed if caught
        try {
            TimeUnit.SECONDS.sleep(num);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    /**
     * Asks the user against if they want to quit or not for sure
     * 
     * @param num
     */
    public static void quit(int num) {
        if (num == -1) {
            Scanner in = new Scanner(System.in);
            System.out.println();
            wait(1);
            System.out.println("Are you sure you want to quit? (Y or N): ");
            String check = in.next();
            if (check.equals("Y")) {
                System.exit(0);
                System.out.println("Thank you for playing the Pokemon game");
            } else if (check.equals("N")) {
                wait(1);
                System.out.println("Changed your mind?\n\nGame too fun to stop?\n\nWe welcome you back.");
            } else {
                wait(1);
                System.out.println("Either type Y or N");
                // Recursion to give user another change to enter the right String
                quit(-1);
            }           
        }
    }

    /**
     * @return Color which is random
     */
    public static Color getRandomColor() {
        Random rand = new Random();
        float r = rand.nextFloat();
        float g = rand.nextFloat();
        float b = rand.nextFloat();
        return new Color(r, g, b);
    }
}
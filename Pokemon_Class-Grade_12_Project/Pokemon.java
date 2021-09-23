/**
 * A Pokemon and its attributes that are used for game mechanics
 * @author Viransh Shah
 * @version 29.October.2020
 * @since 21.October.2020
 */

//Imports Arrays methods
import java.util.Arrays;

public class Pokemon {

    // Instance variables
    private String name;
    private String[] type;
    private int HP;
    private int HPLeft;
    private String[] moves;
    private String[] moveTypes;
    private String[] weakness;
    private String[] strengths;
    private String url;
    private int[] numMoves;
    private String[] moveUrl;
    private int sumNumMoves;
    private boolean dodge;
    public static int numPokemon = 0;

    /**
     * Empty Constructor Sets to default values
     */
    public Pokemon() {
    }

    /**
     * Constructor sets values of parameters to some instance variables
     * 
     * @param name      Pokemon name
     * @param type      Pokemon type(s)
     * @param HP        Pokemon total HP
     * @param moves     Pokemon move names
     * @param moveTypes Pokemon types of each move
     * @param weakness  Pokemon weak against which types
     * @param strengths Pokemon strong against which types
     * @param url       Pokemon image url
     * @param moveUrl   Pokemon each move url with dodging url
     */
    public Pokemon(String name, String type, int HP, String moves, String moveTypes, String weakness, String strengths,
            String url, String moveUrl) {
        this.name = name;
        // Sets a new String to array at position i for every ", "
        this.type = type.split(", ");
        this.HP = HP;
        this.HPLeft = this.HP;
        this.moves = moves.split(", ");
        this.moveTypes = moveTypes.split(", ");
        this.weakness = weakness.split(", ");
        this.strengths = strengths.split(", ");
        this.moveUrl = moveUrl.split(", ");
        this.url = url;
        // Size of num moves based on how many moves
        this.numMoves = new int[this.moves.length];
        setNumMoves(); // numMoves setter is called
        // Static variable increased by one due to one more pokemon
        numPokemon++;
    }

    // Setters and Getters for instance variables

    /**
     * @return String name
     */
    public String getName() {
        return this.name;
    }

    /**
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return String[] type
     */
    public String[] getType() {
        return this.type;
    }

    /**
     * @param type
     */
    public void setType(String[] type) {
        // System method which allows to copy one array to another by allowing to change
        // length
        // Also, allows to choose at position of the source to which position of
        // destination
        System.arraycopy(type, 0, this.type, 0, type.length);
    }

    /**
     * @return int HP
     */
    public int getHP() {
        return this.HP;
    }

    /**
     * @param HP
     */
    public void setHP(int HP) {
        this.HP = HP;
    }

    /**
     * @return int HPLeft
     */
    public int getHPLeft() {
        return this.HPLeft;
    }

    /**
     * @param HPLeft
     */
    public void setHPLeft(int HPLeft) {
        this.HPLeft = HPLeft;
    }

    /**
     * @return String[] moves
     */
    public String[] getMoves() {
        return this.moves;
    }

    /**
     * @param moves
     */
    public void setMoves(String[] moves) {
        System.arraycopy(moves, 0, this.moves, 0, moves.length);
    }

    /**
     * @return String[] moveTypes
     */
    public String[] getMoveTypes() {
        return this.moveTypes;
    }

    /**
     * @param moveTypes
     */
    public void setMoveTypes(String[] moveTypes) {
        System.arraycopy(moveTypes, 0, this.moveTypes, 0, moveTypes.length);
    }

    /**
     * @return String[] weakness
     */
    public String[] getWeakness() {
        return weakness;
    }

    /**
     * @param weakness
     */
    public void setWeakness(String[] weakness) {
        System.arraycopy(weakness, 0, this.weakness, 0, weakness.length);
    }

    /**
     * @return String[] strengths
     */
    public String[] getStrengths() {
        return this.strengths;
    }

    /**
     * @param strengths
     */
    public void setStrengths(String[] strengths) {
        System.arraycopy(strengths, 0, this.strengths, 0, strengths.length);
    }

    /**
     * @param numPokemon
     */
    public static void setNumPokemon(int numPokemon) {
        Pokemon.numPokemon = numPokemon;
    }

    /**
     * @return int numPokemon
     */
    public static int getNumPokemon() {
        return numPokemon;
    }

    /**
     * @return String url
     */
    public String getUrl() {
        return url;
    }

    /**
     * @param url
     */
    public void setUrl(String url) {
        this.url = url;
    }

    /**
     * @return int[] numMoves
     */
    public int[] getNumMoves() {
        return this.numMoves;
    }

    /**
     * @return int sumNumMoves
     */
    public int getSumNumMoves() {
        return sumNumMoves;
    }

    public void setSumNumMoves() {
        for (int num : this.numMoves) {
            this.sumNumMoves += num;
        }
    }

    /**
     * @return String[] moveUrl
     */
    public String[] getMoveUrl() {
        return this.moveUrl;
    }

    /**
     * @param moveUrl
     */
    public void setMoveUrl(String[] moveUrl) {
        System.arraycopy(moveUrl, 0, this.moveUrl, 0, moveUrl.length);
    }

    /**
     * @return boolean dodge
     */
    public boolean isDodge() {
        return this.dodge;
    }

    /**
     * @param dodge
     */
    public void setDodge(boolean dodge) {
        this.dodge = dodge;
    }

    /**
     * Generates random number of moves between the range of 4 to 1 inclusive Sets
     * it to i position of numMoves array
     */
    public void setNumMoves() {
        for (int i = 0; i < this.numMoves.length; i++) {
            this.numMoves[i] = (int) (Math.random() * (4) + 1);
        }
        setSumNumMoves();
    }

    /**
     * Damages the HPLeft of the pokemon
     * 
     * @param damageTimes  how many times to multiply the damage
     * @param damageString if the move has no, less, strong effect on pokemon
     * @param damage       how much damage caused
     */
    public void damage(double damageTimes, String damageString, int damage) {
        if ((int) (Math.random() * (10) + 1) == 5) {
            System.out.println();
            PokemonGo.wait(2);
            System.out.println(this.name + " dodged the attack.");
            PokemonGo.wait(2);
            this.dodge = true;
        } else {
            this.dodge = false;
            HPLeft -= damage * damageTimes;
            if (HPLeft < 0) {
                this.HPLeft = 0;
            }
            if (damageString.length() != 0) {
                System.out.println();
                PokemonGo.wait(2);
                System.out.println(damageString);
            }
        }
    }

    /**
     * Reduces the number of moves at the location of
     * 
     * @param i which is equivalent to the location of the move referenced
     * @return boolean whether the numMoves[i] is decreased or not
     */
    public boolean reduceNumMoves(int i) {
        if (this.numMoves[i] <= 0) {
            this.numMoves[i] = 0;
            return false;
        } else {
            this.numMoves[i] -= 1;
            this.sumNumMoves--;
            return true;
        }
    }

    /**
     * @return String
     */
    public String toString() {
        return "Pokemon: " + name + "\nType: " + Arrays.toString(type).replace(", ", ",") + "\nTotal HP: " + HP + "\n";
    }
}
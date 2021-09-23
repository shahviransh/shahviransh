/**
 * Players that play the game with their name and own List of Pokemon
 * @author Viransh Shah
 * @version 29.October.2020
 * @since 21.October.2020
 */

// Imports Arrays and ArrayList methods
import java.util.ArrayList;
import java.util.Arrays;

public class Player {

    // Instance variables
    private String name;
    private ArrayList<Pokemon> pokemons = new ArrayList<>();
    private ArrayList<Pokemon> injured = new ArrayList<>();

    /**
     * Empty Constructor Sets to default values
     */
    public Player() {
    }

    /**
     * Constructor sets values of parameters to some instance variables
     * 
     * @param name     Player's name
     * @param pokemons List of Pokemons
     */
    public Player(String name, ArrayList<Pokemon> pokemons) {
        this.name = name;
        // Pokemon adding setter called
        addPokemons(pokemons);
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
     * @return ArrayList<Pokemon> pokemons
     */
    public ArrayList<Pokemon> getPokemons() {
        return this.pokemons;
    }

    /**
     * @param pokemons
     */
    public void addPokemons(ArrayList<Pokemon> pokemons) {
        this.pokemons.addAll(pokemons);
    }

    /**
     * @param pokemons
     */
    public void setPokemons(ArrayList<Pokemon> pokemons) {
        for (int i = 0; i < this.pokemons.size(); i++) {
            this.pokemons.set(i, pokemons.get(i));
        }
    }

    /**
     * @return ArrayList<Pokemon> injured
     */
    public ArrayList<Pokemon> getInjured() {
        return this.injured;
    }

    /**
     * @param injured
     */
    public void addInjured(Pokemon injured) {
        this.injured.add(injured);
    }

    /**
     * @param injured
     */
    public void setInjured(ArrayList<Pokemon> injured) {
        for (int i = 0; i < this.injured.size(); i++) {
            this.injured.set(i, injured.get(i));
        }
    }

    /**
     * @return String of all Pokemon objects
     */
    public String getPokemonString() {
        return this.pokemons.toString().replace("[", "").replace("]", "").replace(", P", "\nP");
    }

    /**
     * Removes Pokemon given and adds to injured ArrayList
     * 
     * @param pokemon Pokemon object to remove
     */
    public void removePokemons(Pokemon pokemon) {
        int i = 0;
        for (Pokemon pokemon2 : this.pokemons) {
            if (pokemon2.equals(pokemon)) {
                break;
            }
            i++;
        }
        addInjured(this.pokemons.remove(i));
    }

    /**
     * Removes all Pokemon and adds as injured ArrayList
     * 
     * @param index at which to remove the Pokemon from the ArrayList
     */
    public void removePokemonsAll() {
        for (int i = 0; i < pokemons.size(); i++) {
            addInjured(this.pokemons.remove(i));
        }
    }

    /**
     * Checked if attacked Pokemon is the player's If true then iterates through
     * weakness and strengths
     * 
     * @param pokemon  Pokemon which was attacked
     * @param move     Move name of which pokemon was attacked with
     * @param moveType Type of the move which pokemon was attacked with
     */
    public void attacked(Pokemon pokemon, String move, String moveType) {
        boolean check = false;
        for (Pokemon pokemon2 : this.pokemons) {
            if (pokemon2.equals(pokemon)) {
                check = true;
                break;
            }
        }
        if (check) {
            String[] arr = new String[pokemon.getWeakness().length];
            System.arraycopy(pokemon.getWeakness(), 0, arr, 0, arr.length);
            String[] arr1 = new String[pokemon.getStrengths().length];
            System.arraycopy(pokemon.getStrengths(), 0, arr1, 0, arr1.length);
            double damageTimes = 1;
            String damageString = "";
            for (String s : arr) {
                // moveType is in weakness then the damageTimes is 2 with damageString "very
                // effective"
                if (s.equals(moveType)) {
                    damageTimes = 2;
                    damageString = moveType + " type move is very effective against a "
                            + Arrays.toString(pokemon.getType()) + " type Pokemon";
                    // Arrays toString method
                    break;
                }
            }
            for (String s : arr1) {
                if (s.equals(moveType)) {
                    // If moveType is ground and pokemon type is flying then the damageTimes is 0
                    // with damageString "no effect"
                    if (moveType.equals("Ground") && typeFlying(pokemon)) {
                        damageTimes = 0;
                        damageString = ("Ground type move has no effect against Flying type Pokemon");
                        break;
                    }
                    // moveType is in strengths then the damageTimes is 0.5 with damageString "not
                    // very effective"
                    damageTimes = 0.5;
                    damageString = moveType + " type move is not very effective against a "
                            + Arrays.toString(pokemon.getType()) + " type Pokemon";
                    break;
                }
            }
            int length = move.length();
            // Damage is between max = length of move times 10 and min = 10 inclusive
            int damage = (int) (Math.random() * ((10 * length) - 10 + 1) + 10);
            // Calls pokemon object method to decrease HPLeft
            pokemon.damage(damageTimes, damageString, damage);
            // Only prints how much HP is damaged is the pokemon didn't dodge
            if (!pokemon.isDodge()) {
                PokemonGo.wait(2);
                System.out.println();
                System.out.println(
                        move + " caused " + (int) (damage * damageTimes) + " HP damage to " + pokemon.getName());
                PokemonGo.wait(2);
            }
        }
    }

    /**
     * Checks where the Pokemon is a Flying type or not
     * 
     * @param pokemon Pokemon object that is attacked
     * @return boolean true or false
     */
    public boolean typeFlying(Pokemon pokemon) {
        for (String type : pokemon.getType()) {
            if (type.toLowerCase().equals("flying")) {
                return true;
            }
        }
        return false;
    }

    /**
     * @return String
     */
    public String toString() {
        return name + "'s Pokemons:\n\n" + getPokemonString();
    }
}
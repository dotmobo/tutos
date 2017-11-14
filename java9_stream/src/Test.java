import java.util.List;

// Test de l'api stream

public class Test {

    public static void main(String[] args) {

        // En une seule instruction
        // On crée une liste de commandes
        Long i = List.of(
                new Commande("20140509", 113.12),
                new Commande("20140508", 113.07),
                new Commande("20140507", 356.03),
                new Commande("20140512", 78.94),
                new Commande("20140409", 163.23),
                new Commande("20140429", 982.34),
                new Commande("20140508", 172.89)
        ).stream()
                // On filtre sur les commandes commençant par 201405
                .filter(x -> x.numero.startsWith("201405"))
                // On arrondit tous les montants
                .map(x -> Math.round(x.montant))
                // On trie du plus petit au plus grand
                .sorted()
                // On enlève les montant égaux
                .distinct()
                // On fait la somme de ce qui reste
                .reduce((x, y) -> x + y)
                // On récupère le chiffre
                .get();

        System.out.println(i);
    }
}


import java.util.Scanner;

public class Activity1 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Email: ");
        String email = sc.nextLine();
        if (email.contains("@")) {
            int atIndex = email.indexOf("@");
            int dotIndex = email.indexOf(".", atIndex);
            if (dotIndex > atIndex + 1) {
                String userName = email.substring(0, atIndex);
                String domainName = email.substring((atIndex + 1));
                System.out.println("Valid Email");
                System.out.println("User Name: " + userName);
                System.out.println("Domain Name: " + domainName);
            } else {
                System.out.println("Invalid email: missing '.' in domain part");
            }
        } else {
            System.out.println("Invalid email: missing '@' Symbol");
        }
    }
}

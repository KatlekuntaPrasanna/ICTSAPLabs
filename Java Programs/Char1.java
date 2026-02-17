
import java.util.*;

public class Char1 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter String:");
        String s = sc.nextLine();
        System.out.println("Enter the index to print character: ");
        int n = sc.nextInt();
        sc.nextLine();
        System.out.println("Character: " + s.charAt(n));
        System.out.println("Enter Substring to check their presence: ");
        String s1 = sc.nextLine();
        System.out.println("Is Sequence of Characters Present: " + s.contains(s1));
        System.out.println("Enter Character to replace with other: ");
        System.out.println("Enter replacing character: ");
        char ch2 = sc.nextLine().charAt(0);
        System.out.println("Enter Character that is to be replaced: ");
        char ch3 = sc.nextLine().charAt(0);
        s = s.replace(ch2, ch3);
        System.out.println("String After replacing: " + s);
        String str = "prasanna";
        String str2 = "prasanna";
        System.out.println(str.equals(str2));
        System.out.println(str.equalsIgnoreCase(str2));
    }
}

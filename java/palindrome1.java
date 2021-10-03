import java.util.Scanner;
public class palindrome1 {
    public static void main(String[]args)
    {
    String original,reverse="";
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter String or number");
    int length;
    original = sc.nextLine();
    length = original.length();

    for(int i = length -1;i>=0;i--)
    {
        reverse = reverse + original.charAt(i);
    }
        System.out.println("reverse is:" + reverse);
        
    if(original.equals(reverse))
    {
        System.out.println("THis is palindrome");
    }
    else
    {
         System.out.println("THis is not a palindrome");
    }
}
}
import java.util.Scanner;
public class duplicate 
{
    public static void main(String[]args)
    {
        String str;
        System.out.println("Enter String to find duplicates:");
        Scanner sc = new Scanner(System.in);
        str = sc.nextLine();
        int count = 0;
        System.out.println("The dupicate Character in String are:");
        char[] inp = str.toCharArray();
        
        for(int i = 0;i<str.length(); i++)
        {
           for(int j = i+1;j<str.length(); j++)
           {
               if(inp[i] == inp[j])
               {
                   System.out.println(inp[j]);
                   count++;
                   break;
               }
           }
        }
    }
}
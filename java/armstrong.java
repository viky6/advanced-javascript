import java.util.Scanner;
public class armstrong 
{
    public static void main(String[]args)
    {
        int c = 0,a,temp;
        int n;
        System.out.println("Enter the number to find armstrong:");
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();//used to find armstrong
        temp = n;
        
        while(n != 0)
        {
            a = n%10;
            n = n/10;
            c = c+(a*a*a);
        }
        if(temp==c)
        {
            System.out.println("Armstrong number");
        }
        else
        {
            System.out.println("Not Armstrong number");
        }
    }
}
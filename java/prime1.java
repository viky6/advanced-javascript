public class prime1 {
        public static void main(String[]args)
        {
            int num = 2;
            boolean prime = false;
            
            for (int i = 2; i<= num / 2; ++i)
            {
                if(num%i==0)
                {
                    prime = true;
                    break;
                }
            }
            
        if (!prime)
        {
            System.out.println(num + " " + "prime number");
        }
        else
        {
            System.out.println(num + " " +"not prime number");
        }
    }
    }
        
    


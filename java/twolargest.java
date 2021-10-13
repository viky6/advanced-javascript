public class twolargest 
{
    public static void main(String[]args)
    {
       int arr[] = { 100,14, 46, 47, 94, 94, 52, 86, 36, 94, 89 };
       int largest = 0;
       int secondlargest = 0;
       
       System.out.println("The given array integer is:");
       
       for(int i = 0;i<arr.length;i++)
       {
           System.out.println(arr[i]+"\t");
       }
       for(int i = 0;i<arr.length;i++)
       {
           if(arr[i]>largest)
           {
           secondlargest = largest;
           largest = arr[i];
       }
       else if(arr[i]>secondlargest)
       {
           secondlargest = arr[i];
       }
       }
       System.out.println("The largest number is:" + " "+ largest);
       System.out.println("The secondlargest number is:" + " "+ secondlargest);
    }
}
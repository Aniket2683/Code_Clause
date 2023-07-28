import java.util.Random;

public class passGenerator{
   public static void main(String[] args) {
      System.out.print("Generated Password is : ");
      System.out.println(generatePassword(8));
   }

   private static char[] generatePassword(int length) {
      String capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      String lowerLetters = "abcdefghijklmnopqrstuvwxyz";
      String specialChar = "!@#$";
      String numbs = "1234567890";
      String combinedChars = capitalLetters + lowerLetters + specialChar + numbs;
      Random random = new Random();
      char[] password = new char[length];

      password[0] = lowerLetters.charAt(random.nextInt(lowerLetters.length()));
      password[1] = capitalLetters.charAt(random.nextInt(capitalLetters.length()));
      password[2] = specialChar.charAt(random.nextInt(specialChar.length()));
      password[3] = numbs.charAt(random.nextInt(numbs.length()));
   
      for(int i = 4; i< length ; i++) {
         password[i] = combinedChars.charAt(random.nextInt(combinedChars.length()));
      }
      return password;
   }
}
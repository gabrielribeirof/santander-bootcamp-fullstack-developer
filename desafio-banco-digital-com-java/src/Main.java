package src;

public class Main {
  public static void main(String[] args) {
    System.out.println("testDeposit: " + testDeposit());
    System.out.println("testWithdraw: " + testWithdraw());
    System.out.println("testTransfer: " + testTransfer());
  }

  public static boolean testDeposit() {
    Client client = new Client("John Doe");
    Account account = new Account(6754, 0777, "100.00", client);

    try {
      account.deposit(100.0F);

      return account.getBalance().equals("200.00");
    } catch (Exception error) {
      return false;
    }
  }

  public static boolean testWithdraw() {
    Client client = new Client("John Doe");
    Account account = new Account(6754, 0777, "200.00", client);

    try {
      account.withdraw(100.0F);

      return account.getBalance().equals("100.00");
    } catch (Exception error) {
      return false;
    }
  }

  public static boolean testTransfer() {
    Client client = new Client("John Doe");
    Client destinationClient = new Client("Jane Doe");

    Account account = new Account(6754, 0777, "300.00", client);
    Account destinationAccount = new Account(9918, 0777, "100.00", destinationClient);

    try {
      account.transfer(100, destinationAccount);

      return 
        account.getBalance().equals("200.00") &&
        destinationAccount.getBalance().equals("200.00");
    } catch (Exception error) {
      return false;
    }
  }
}
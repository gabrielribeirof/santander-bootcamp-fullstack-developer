package src.errors;

public class InsufficientBalanceException extends Exception {
  public int accountId;

  public InsufficientBalanceException(int accountId) {
    this.accountId = accountId;
  }
}

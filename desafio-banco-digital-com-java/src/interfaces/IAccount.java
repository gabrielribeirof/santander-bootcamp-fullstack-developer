package src.interfaces;

public interface IAccount {
  void deposit(float value) throws Exception;
  void withdraw(float value) throws Exception;
  void transfer(float value, IAccount destinationAccount) throws Exception;;
}

package src;

import java.util.Locale;

import src.interfaces.IAccount;
import src.utils.ValueGuard;

import src.errors.ForbiddenValueException;
import src.errors.InsufficientBalanceException;

public class Account implements IAccount {
  private int id;
  private int agency;
  private float balance;
  private Client client;

  public int getId() {
    return this.id;
  }

  public int getAgency() {
    return this.agency;
  }

  public String getBalance() {
    return String.format(Locale.ROOT, "%.2f", this.balance);
  }

  public Client getClient() {
    return this.client;
  }

  public Account(int id, int agency, String balance, Client client) {
    this.id = id;
    this.agency = agency;
    this.balance = Float.parseFloat(balance);
    this.client = client;
  }

  @Override
  public void deposit(float value) throws Exception {
    if (!ValueGuard.isMonetary(value)) {
      throw new ForbiddenValueException(value);
    }

    this.balance += value;
  }

  @Override
  public void withdraw(float value) throws Exception {
    if (!ValueGuard.isMonetary(value)) {
      throw new ForbiddenValueException(value);
    }

    if (this.balance < value) {
      throw new InsufficientBalanceException(id);
    }

    this.balance -= value;
  }

  @Override
  public void transfer(float value, IAccount destinationAccount) throws Exception {
    this.withdraw(value);

    destinationAccount.deposit(value);
  }
}
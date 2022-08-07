package src.errors;

public class ForbiddenValueException extends Exception {
  public float value;

  public ForbiddenValueException(float value) {
    this.value = value;
  }
}

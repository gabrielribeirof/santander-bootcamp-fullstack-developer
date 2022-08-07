package src.utils;

public final class ValueGuard {
  public static boolean isMonetary(float value) {
    String stringValue = Float.toString(value);
    int digitsAfterDot = stringValue.length()-stringValue.indexOf(".")-1;

    if (digitsAfterDot > 2) return false;

    return true;
  }
}
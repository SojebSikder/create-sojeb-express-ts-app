/**
 * StringHelper
 * @class StringHelper
 * @author Sojeb Sikder <sojebsikder@gmail.com>
 */
export class StringHelper {
  /**
   * Capitalize the first letter of a string.
   * @param string
   * @returns
   */
  public static cfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * Uncapitalize the first letter of a string.
   * @param string
   * @returns
   */
  public static ucfirst(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
}

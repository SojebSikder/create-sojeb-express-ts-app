/**
 * Module decorator.
 * @author Sojeb Sikder <sojebsikder@gmail.com>
 * @param param
 * @returns
 */
export function Module({
  imports,
  controllers,
}: {
  imports?;
  controllers;
}): Function {
  return function (object: Object, methodName: string) {};
}

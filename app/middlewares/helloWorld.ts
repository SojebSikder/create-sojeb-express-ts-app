/**
 * simple middleware example
 */
export function helloWorld(name: string) {
  return function (req, res, next) {
    console.log(`Worked! ${name}`);
    next();
  };
}

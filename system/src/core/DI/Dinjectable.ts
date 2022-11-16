import "reflect-metadata";
import { injectable } from "tsyringe";

/**
 * Dependency injectable decorator abstraction
 * @returns
 */
export function Dinjectable(): Function {
  return injectable();
}

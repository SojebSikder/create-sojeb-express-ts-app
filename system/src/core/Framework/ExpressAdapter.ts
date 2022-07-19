import express from "express";
import { IFAdapter } from "./IFAdapter";

/**
 * Express framework adapter.
 */
export class ExpressAdapter implements IFAdapter {
  instance() {
    return express;
  }
  app() {
    return express();
  }
}

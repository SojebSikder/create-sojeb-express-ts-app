import express from "express";
import { IFAdapter } from "./IFAdapter";

/**
 * Fastify framework adapter.
 */
export class FastifyAdapter implements IFAdapter {
  instance() {
    return express;
  }
  app() {
    return express();
  }
}

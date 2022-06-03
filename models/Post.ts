import { ORM } from "../system/core/ORM";

export class Post extends ORM {
  constructor() {
    // define table name
    super(Post.name);
  }
}

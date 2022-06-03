import { ORM } from "../system/core/ORM/ORM";

export class Post extends ORM {
  constructor() {
    // define table name
    super(Post.name);
  }
}

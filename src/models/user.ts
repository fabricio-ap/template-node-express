export class User {
  id: number;
  email: string;

  private static _id = 1;

  constructor(email: string) {
    this.id = User._id++;
    this.email = email;
  }
}

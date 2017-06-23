export class Message {
  public Type: string;
  public Text: string;

  constructor(msgObj?: any) {
    if (msgObj) {
      this.Type = msgObj['Type'];
      this.Text = msgObj['Text'];
    }
  }
}
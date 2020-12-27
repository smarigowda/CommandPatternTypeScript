import { Command } from "../interface/command";

export class SimpleRemoteControl {
  constructor(private cmd: Command) {}
  setCommand(cmd: Command) {
    this.cmd = cmd;
  }
  pressButton() {
    this.cmd.execute();
  }
}

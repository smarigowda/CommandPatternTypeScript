import { Light } from "../devices/light";
import { Command } from "../interface/command";

export class LightONCommand implements Command {
  constructor(private light: Light) {}
  execute(): void {
    this.light.on();
  }
}

export class LightOFFCommand implements Command {
  constructor(private light: Light) {}
  execute(): void {
    this.light.off();
  }
}

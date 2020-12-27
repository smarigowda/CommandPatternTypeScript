import { DefaultCommand } from "./commands/defaultCommand";
import { LightOFFCommand, LightONCommand } from "./commands/LightCommands";
import { Light } from "./devices/light";
import { Command } from "./interface/command";
import { SimpleRemoteControl } from "./remote/simpleRemote";

console.log("Hello, welcome to Command Pattern !");

// A device
const light: Light = new Light();

// Encapsulate the device inside a Command object
const lightONCommand: Command = new LightONCommand(light);
const lightOFFCommand: Command = new LightOFFCommand(light);

// A Simple Remote
const simpleRemote = new SimpleRemoteControl(new DefaultCommand());

// load the command and press button
simpleRemote.setCommand(lightONCommand);
simpleRemote.pressButton();

// load the command and press button
simpleRemote.setCommand(lightOFFCommand);
simpleRemote.pressButton();

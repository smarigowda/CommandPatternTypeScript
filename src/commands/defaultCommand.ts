import { Command } from "../interface/command";

export class DefaultCommand implements Command {
    execute() {
        console.log('no operation');
    }
} 
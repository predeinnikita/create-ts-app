#!/usr/bin/env node
import {exec, ExecException} from "child_process";

const templateRepo = 'ts-project-initializer-template';
const templateVersion = 1;

const commands = [
    `git clone git@github.com:predeinnikita/${templateRepo}.git`,
    `cp ${templateRepo}/template-${templateVersion}/. . -R`,
    `rm ${templateRepo} -R`,
];

function showMessage(error: ExecException | null, stdout: string, stderr: string) {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
}

function runCommands(commands: string[], commandIndex: number = 0): void {
    exec(commands[commandIndex], (error, stdout, stderr) => {
        showMessage(error, stdout, stderr);
        if (commandIndex !== commands.length - 1) {
            runCommands(commands, commandIndex + 1)
        }
    });
}

runCommands(commands);
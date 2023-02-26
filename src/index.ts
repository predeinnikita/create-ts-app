#!/usr/bin/env node
import { ExecException } from "child_process";
import * as child_process from "child_process";
import * as fse from 'fs-extra'

const templateRepo = 'create-ts-app-template';
const templateVersion = 1;
main().then();

async function main(): Promise<void> {
    await runCommands([
        `git clone https://github.com/predeinnikita/${templateRepo}.git`,
    ]);
    fse.copySync(`${templateRepo}/template-${templateVersion}/.`, './')
    fse.removeSync(`${templateRepo}`);
}

async function runCommands(commands: string[], commandIndex: number = 0): Promise<void> {
    for (let command of commands) {
        await runCommand(command);
    }
}

function runCommand(command: string): Promise<void> {
    return new Promise<void>(resolve => {
        child_process.exec(command, (error: ExecException | null, stdout: string, stderr: string) => {
            resolve();
        });
    })
}

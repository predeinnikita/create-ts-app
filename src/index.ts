#!/usr/bin/env node
import * as fse from 'fs-extra';
import { runCommands } from "./utils/run-command";
import { getInputArguments } from "./utils/get-input-arguments";

main().then();

async function main(): Promise<void> {
    const { templateRepo, templateVersion } = getInputArguments();

    await runCommands([
        `git clone https://github.com/predeinnikita/${templateRepo}.git`,
    ]);

    const templateExists = await fse.exists(`${templateRepo}/template-${templateVersion}/.`);
    if (templateExists) {
        fse.copySync(`${templateRepo}/template-${templateVersion}/.`, './')
    } else {
        console.log('ERROR! Incorrect template version');
    }

    fse.removeSync(`${templateRepo}`);
}


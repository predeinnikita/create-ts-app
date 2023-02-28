#!/usr/bin/env node
import * as fse from 'fs-extra';
import { runCommands } from "./utils/run-command";
import { getInputArguments } from "./utils/get-input-arguments";

main().then();

async function main(): Promise<void> {
    const { templateRepo, templateId } = getInputArguments();

    await runCommands([
        `git clone https://github.com/predeinnikita/${templateRepo}.git`,
    ]);

    const templatePath = `${templateRepo}/template-${templateId}/.`;
    const templateExists = await fse.exists(templatePath);
    if (templateExists) {
        fse.copySync(templatePath, './')
    } else {
        console.error('ERROR! Incorrect template ID!');
    }

    fse.removeSync(`${templateRepo}`);
}

import child_process, { ExecException } from "child_process";

export async function runCommands(commands: string[]): Promise<void> {
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

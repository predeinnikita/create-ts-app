export interface IInputArguments {
    templateRepo: string;
    templateId: string;
}

export function getInputArguments(): IInputArguments {
    const input = process.argv;
    if (input.length < 2 || input.length > 3) {
        console.error('ERROR! Expected one argument!');
        process.exit(1);
    }

    const templateRepo = 'create-ts-app-template';
    const templateId = input.length === 3? input[2]: '1';

    return {
        templateRepo,
        templateId
    }
}

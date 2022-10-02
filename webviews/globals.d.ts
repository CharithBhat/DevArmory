import * as _vscode from "vscode";

declare global {

    const tsvscode: {
        postMessage: ({
            type: String, value: any
        }) => void;

        getState: () => any;
        setState: (state: any) => void;


    };
    
     export function runHelloWorld(): void {
        await _vscode.commands.executeCommand('devarmory.helloWorld');
      }
    
}


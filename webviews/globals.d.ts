import * as _vscode from "vscode";

export {};

declare global {

    const tsvscode: {
        postMessage: ({
            type: String, value: any
        }) => void;

        getState: () => any;
        setState: (state: any) => void;
    };

    
}




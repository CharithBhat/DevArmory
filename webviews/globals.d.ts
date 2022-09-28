import * as _vscode from "vscode";

declare global {
    const tsvscode: {
        postMessage: ({
            type: String, value: any
        }) => void;
    };
}
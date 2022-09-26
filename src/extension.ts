
import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWordPanel';

export function activate(context: vscode.ExtensionContext) {


	console.log('Congratulations, your extension "devarmory" is now active!');


	context.subscriptions.push(
		vscode.commands.registerCommand('devarmory.helloWorld', () => {
			HelloWorldPanel.createOrShow(context.extensionUri);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('devarmory.askQuestion', async () => {
			const answer = await vscode.window.showInformationMessage('How was your day?', 'Good', 'Bad');
			if(answer === 'Good'){
				vscode.window.showInformationMessage('Thats awesome!');
			}
			else{
				console.log('Well sorry to hear that, Hope we can make it better :)');
			}
		})
	);
}

export function deactivate() { }

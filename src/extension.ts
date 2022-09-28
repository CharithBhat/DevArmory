
import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWordPanel';
import { SidebarProvider } from './SidebarProvider';

export function activate(context: vscode.ExtensionContext) {


	const sidebarProvider = new SidebarProvider(context.extensionUri);
	context.subscriptions.push(
	  vscode.window.registerWebviewViewProvider(
		"devarmory-sidebar",
		sidebarProvider
	  )
	);


	context.subscriptions.push(
		vscode.commands.registerCommand('devarmory.helloWorld', () => {
			HelloWorldPanel.createOrShow(context.extensionUri);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('devarmory.refresh', async () => {
			// HelloWorldPanel.kill();
			// HelloWorldPanel.createOrShow(context.extensionUri);
			await vscode.commands.executeCommand("workbench.action.closeSidebar");
			await vscode.commands.executeCommand("workbench.view.extension.devarmory-sidebar-view");
			// setTimeout(() => {
			// 	vscode.commands.executeCommand("workbench.action.webview.openDeveloperTools");
			// }, 500);
			
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

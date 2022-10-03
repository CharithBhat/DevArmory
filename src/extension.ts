
import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWordPanel';
import { SidebarProvider } from './SidebarProvider';

export function activate(context: vscode.ExtensionContext) {


	const sidebarProvider = new SidebarProvider(context.extensionUri);

	// need to remove this before shipping
	const item = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
	item.text = "$(beaker) Add Todo";
	item.command = 'devarmory.addTodo';
	item.show();

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(
			"devarmory-sidebar",
			sidebarProvider
		)
	);

	// need to remove this later
	context.subscriptions.push(
		vscode.commands.registerCommand('devarmory.addTodo', () => {
			const { activeTextEditor } = vscode.window;

			if (!activeTextEditor) {
				vscode.window.showInformationMessage("No active text editor");
				return;
			}

			const text = activeTextEditor.document.getText(activeTextEditor.selection);
			
			sidebarProvider._view?.webview.postMessage({
				type: 'new-todo',
				value: text,
			});
		})
	);
	
	// maybe change this later
	context.subscriptions.push(
		vscode.commands.registerCommand('devarmory.helloWorld', () => {
			HelloWorldPanel.createOrShow(context.extensionUri);
		})
	);
	
	// this is intersting
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
	
	// remove this later
	context.subscriptions.push(
		vscode.commands.registerCommand('devarmory.askQuestion', async () => {
			const answer = await vscode.window.showInformationMessage('How was your day?', 'Good', 'Bad');
			if (answer === 'Good') {
				vscode.window.showInformationMessage('Thats awesome!');
			}
			else {
				console.log('Well sorry to hear that, Hope we can make it better :)');
			}
		})
	);
}

export function deactivate() { }


import * as vscode from 'vscode';
import { Base64Panel } from './Base64Panel';
import { SidebarProvider } from './SidebarProvider';

export function activate(context: vscode.ExtensionContext) {


	const sidebarProvider = new SidebarProvider(context.extensionUri);



	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(
			"devarmory-sidebar",
			sidebarProvider
		)
	);

}

export function deactivate() { }

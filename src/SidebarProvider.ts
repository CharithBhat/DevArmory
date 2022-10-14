import * as vscode from "vscode";
import { Base64Panel } from "./Base64Panel";
import { getNonce } from "./getNonce";
import { HtmlPanel } from "./HtmlPanel";
import { JsonFormatterPanel } from "./JsonFormatterPanel";
import { SqlFormatterPanel } from "./SqlFormatterPanel";
import { XmlFormatterPanel } from "./XmlFormatterPanel";
import { UrlPanel } from "./UrlPanel";
import { UuidGeneratorPanel } from "./UuidGeneratorPanel";
import { LoremIpsumPanel } from "./LoremIpsumPanel";
import { TextCaseConverterPanel } from "./TextCaseConverterPanel";
import { TextEscaperPanel } from "./TextEscaperPanel";



export class SidebarProvider implements vscode.WebviewViewProvider {
  _view?: vscode.WebviewView;
  _doc?: vscode.TextDocument;

  constructor(private readonly _extensionUri: vscode.Uri) { }

  public resolveWebviewView(webviewView: vscode.WebviewView) {
    this._view = webviewView;

    webviewView.webview.options = {
      // Allow scripts in the webview
      enableScripts: true,
      // localResourceRoots: [this._extensionUri],
        localResourceRoots: [
          vscode.Uri.joinPath(this._extensionUri, "media"),
          vscode.Uri.joinPath(this._extensionUri, "out/compiled"),
      ],
    };

    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

    webviewView.webview.onDidReceiveMessage(async (data) => {
      switch (data.type) {


        case "onInfo": {
          if (!data.value) {
            return;
          }
          vscode.window.showInformationMessage(data.value);
          break;
        }
        case "onError": {
          if (!data.value) {
            return;
          }
          vscode.window.showErrorMessage(data.value);
          break;
        }

        case "onHTML": {

          HtmlPanel.createOrShow(this._extensionUri);

          break;
        }

        case "onBase64": {

          Base64Panel.createOrShow(this._extensionUri);

          break;
        }

        case "onURL": {

          UrlPanel.createOrShow(this._extensionUri);

          break;
        }

        case "onJsonFormatter": {

          JsonFormatterPanel.createOrShow(this._extensionUri);

          break;
        }

        case "onSqlFormatter": {

          SqlFormatterPanel.createOrShow(this._extensionUri);

          break;
        }

        case "onXmlFormatter": {

          XmlFormatterPanel.createOrShow(this._extensionUri);

          break;
        }

        case "onUuidGenerator": {

          UuidGeneratorPanel.createOrShow(this._extensionUri);

          break;
        }

        case "onLoremIpsumGenerator": {

          LoremIpsumPanel.createOrShow(this._extensionUri);

          break;
        }

        case "onTextCaseConverter": {

          TextCaseConverterPanel.createOrShow(this._extensionUri);

          break;
        }

        case "onTextEscaper": {

          TextEscaperPanel.createOrShow(this._extensionUri);

          break;
        }
      }
    });
  }

  public revive(panel: vscode.WebviewView) {
    this._view = panel;
  }

  private _getHtmlForWebview(webview: vscode.Webview) {
    // default css that your need to add to all the webviews
    const styleResetUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "reset.css")
    );
    // default css that your need to add to all the webviews
    const styleVSCodeUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "vscode.css")
    );
    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "out", "compiled/sidebar.js")
    );
    const styleMainUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "out", "compiled/sidebar.css")
    );

    // images

    const homeUrl: string = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "home-hallow.svg")
    ).toString();


    // console.log(homeUrl);
    




    //img-src https: data:; style-src 'unsafe-inline'
    // Use a nonce to only allow a specific script to be run.


    // <meta http-equiv="Content-Security-Policy" content="img-src https: data:; style-src 'unsafe-inline' ${webview. cspSource
    // }; script-src 'nonce-${nonce}';">
    const nonce = getNonce();

    return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<!--
					Use a content security policy to only allow loading images from https or from our extension directory,
					and only allow scripts that have a specific nonce.
        -->
        <meta http-equiv="Content-Security-Policy" content="default-src ${webview.cspSource} ; img-src ${webview.cspSource} https:; style-src 'unsafe-inline' ${webview.cspSource
      }; script-src 'nonce-${nonce}';">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link href="${styleResetUri}" rel="stylesheet">
				<link href="${styleVSCodeUri}" rel="stylesheet">
        <link href="${styleMainUri}" rel="stylesheet">
        <script nonce="${nonce}">
          const tsvscode = acquireVsCodeApi();
          const homeSvg = 

        </script>
			</head>
      <body style="background-color: var(--vscode-sidebar-background);">
      <img
      class="sidebar-icons"
      style="vertical-align: middle;"
      src={homeUrl}
      alt="damn"
  />
			</body>
      <script src="${scriptUri}" nonce="${nonce}">
			</html>`;
  }
}

// style="background-color:#21222c;"
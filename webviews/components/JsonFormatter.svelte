<script lang="ts">
    let regularText: string = tsvscode.getState()?.regularText || "";
    let convertedText: string = tsvscode.getState()?.convertedText || "";

    function onAddingSource(e: any): void {
        regularText = (e.target as HTMLInputElement).value;
        try {
            convertedText =
                JSON.stringify(JSON.parse(regularText), null, 4) || "";
        } catch (e) {
            convertedText = "";
            console.log(e);
        }
        tsvscode.setState({ regularText, convertedText });
    }

    function copyBase64() {
        let textarea = document.getElementById(
            "base64-textarea"
        ) as HTMLInputElement;
        textarea!.select()!;
        document.execCommand("copy");
        document!.getSelection()!.removeAllRanges();
        document!.getSelection()!.addRange(document.createRange());
    }

    function clearRegularText() {
        regularText = "";
        let textarea = document.getElementById(
            "source-textarea"
        ) as HTMLInputElement;
        textarea.select()!;
        convertedText = "";
        tsvscode.setState({ regularText, convertedText });
    }
</script>

<div class="padding-for-whole-page">
    <h1>Json Formatter</h1>
    <br />

    <div class="grid-container">
        <div class="small">
            <button
                class="short-button margin-for-textarea-below margin-right"
                on:click={clearRegularText}>Clear</button
            >
            <p class="padding-for-textarea-below">JSON (Input)</p>
        </div>
        <div class="small" />
        <div class="small">
            <button
                class="short-button margin-for-textarea-below margin-right"
                on:click={copyBase64}>Copy</button
            >
            <p class="padding-for-textarea-below">Formated JSON (Output)</p>
        </div>

        <textarea
            class="large-area large-area--input"
            id="source-textarea"
            placeholder="Enter your JSON here..."
            value={regularText}
            on:input={onAddingSource}
        />

        <div class="controls" />

        <textarea
            readonly
            id="base64-textarea"
            class="large-area large-area--output"
            placeholder="Your formated JSON will appear here..."
            value={convertedText}
        />
    </div>
</div>

<style>
    textarea {
        padding: 10px;
        outline-style: solid;
        outline-color: #191a21;
        outline-width: 1px;
        border-radius: 5px;
    }
    .padding-for-whole-page {
        margin: 40px;
    }
    .margin-for-textarea-below {
        margin-bottom: 8px;
    }
    .padding-for-textarea-below {
        padding-top: 10px;
        display: inline-block;
    }

    .short-button {
        width: 60px;
        margin-left: 10px;
        float: right;
        border-radius: 5px;
    }

    .grid-container {
        display: grid;
        grid-template-columns: 1fr 50px 1fr;
        grid-template-rows: 40px 1fr;
        align-items: center;
        height: 80vh;
        box-sizing: border-box;
        min-width: 600px;
    }

    .large-area {
        height: 100%;
        padding: 20px;
        font-family: monospace;
    }
</style>

<script lang="ts">
    let regularText: string = tsvscode.getState()?.regularText || "";
    let convertedText: string = tsvscode.getState()?.convertedText || "";

    function onAddingSource(e: any): void {
        regularText = (e.target as HTMLInputElement).value;
        convertedText = addslashes(regularText);
        function addslashes(str: string) {
            return (str + "")
                .replace(/[\\"']/g, "\\$&")
                .replace(/\u0000/g, "\\0");
        }
        tsvscode.setState({ regularText, convertedText });
    }

    function onAddingBase64(e: any): void {
        convertedText = (e.target as HTMLInputElement).value;
        regularText = convertedText.replace('\\','');
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

    function copySource() {
        let textarea = document.getElementById(
            "source-textarea"
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
        tsvscode.setState({ regularText, convertedText });
    }

    function clearConvertedText() {
        convertedText = "";
        let textarea = document.getElementById(
            "base64-textarea"
        ) as HTMLInputElement;
        textarea.select()!;
        tsvscode.setState({ regularText, convertedText });
    }
</script>


<div class="padding-for-whole-page">
    <h1>Text Escaper/Unescaper</h1>
    <br />

    <p class="padding-for-textarea-below">Plain Text (Input/Output)</p>

    <button
        class="short-button margin-for-textarea-below margin-right"
        on:click={clearRegularText}>Clear</button
    >
    <button class="short-button margin-for-textarea-below" on:click={copySource}
        >Copy</button
    >
    <textarea
        placeholder="what's up?"
        name="yo?"
        id="source-textarea"
        cols="5"
        rows="10"
        type="text"
        value={regularText}
        on:input={onAddingSource}
    />
    <br />

    <p class="padding-for-textarea-below">Escaped Text (Input/Output)</p>

    <button
        class="short-button margin-for-textarea-below margin-right"
        on:click={clearConvertedText}>Clear</button
    >

    <button class="short-button margin-for-textarea-below" on:click={copyBase64}
        >Copy</button
    >

    <textarea
        placeholder="what\'s up?"
        name="hoe"
        id="base64-textarea"
        cols="30"
        rows="10"
        type="text"
        value={convertedText}
        on:input={onAddingBase64}
    />
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
</style>

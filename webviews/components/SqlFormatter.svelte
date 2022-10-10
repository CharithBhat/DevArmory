<script lang="ts">
    import { format } from "sql-formatter";

    let regularText: string = tsvscode.getState()?.regularText || "";
    let convertedText: string = tsvscode.getState()?.convertedText || "";

    function onAddingSource(e: any): void {
        regularText = (e.target as HTMLInputElement).value;
        convertedText = format(regularText);
        tsvscode.setState({ regularText, convertedText });
    }

    function minify() {
        // convertedText = JSON.stringify(JSON.parse(regularText));
        // convertedText = util.inspect(object, showHidden=false, depth=2, colorize=true);
        tsvscode.setState({ regularText, convertedText });
    }

    // function onAddingBase64(e: any): void {
    //     convertedText = (e.target as HTMLInputElement).value;
    //     regularText = atob(convertedText);
    //     tsvscode.setState({ regularText, convertedText });
    // }

    function copyBase64() {
        let textarea = document.getElementById(
            "base64-textarea"
        ) as HTMLInputElement;
        textarea!.select()!;
        document.execCommand("copy");
        document!.getSelection()!.removeAllRanges();
        document!.getSelection()!.addRange(document.createRange());
    }

    // function copySource() {
    //     let textarea = document.getElementById(
    //         "source-textarea"
    //     ) as HTMLInputElement;
    //     textarea!.select()!;
    //     document.execCommand("copy");
    //     document!.getSelection()!.removeAllRanges();
    //     document!.getSelection()!.addRange(document.createRange());
    // }

    function clearRegularText() {
        regularText = "";
        let textarea = document.getElementById(
            "source-textarea"
        ) as HTMLInputElement;
        textarea.select()!;
        convertedText = "";
        tsvscode.setState({ regularText, convertedText });
    }

    // function clearConvertedText(){
    //     convertedText = '';
    //     let textarea = document.getElementById(
    //         "base64-textarea"
    //     ) as HTMLInputElement;
    //     textarea.select()!;
    //     tsvscode.setState({ regularText, convertedText });
    // }
</script>

<!-- HEY!!!!! If you plan to create a new svelte page. then try adding the below command in your package json as subscript -->
<!-- --config ./build/node-extension.webpack.config.js  -->

<!-- HEY!!!! this is for text escaping -->
<!-- function addslashes( str ) {
    return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
} -->

<div class="padding-for-whole-page">
    <h1>Sql Formatter</h1>
    <br />

    <div class="grid-container">
        <div class="small">
            <button
                class="short-button margin-for-textarea-below margin-right"
                on:click={clearRegularText}>Clear</button
            >
            <!-- <button    
                class="short-button margin-for-textarea-below"
                on:click={onAddingSource}>Copy</button
            > -->
            <p class="padding-for-textarea-below">SQL (Input)</p>
        </div>
        <div class="small" />
        <div class="small">
            <!-- <button
                class="short-button margin-for-textarea-below margin-right"
                on:click={onAddingSource}>Clear</button
            > -->
            <button
                class="short-button margin-for-textarea-below margin-right"
                on:click={copyBase64}>Copy</button
            >
            <p class="padding-for-textarea-below">Formated SQL (Output)</p>
        </div>

        <textarea
            class="large-area large-area--input"
            id="source-textarea"
            placeholder="Enter your JSON here..."
            value={regularText}
            on:input={onAddingSource}
        />

        <div class="controls">
            <!-- <button
                    type="button"
                    class="controls__button controls__button--format"
                    on:click={onAddingSource}>Format</button
                >
                <button
                    type="button"
                    class="controls__button controls__button--minify"
                    on:click={startprocess}>Minify</button
                > -->
        </div>

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
        /* padding: 20px; */
        min-width: 600px;
        /* gap: 20px; */
    }

    .large-area {
        height: 100%;
        padding: 20px;
        font-family: monospace;
    }

    /* .large-area:hover,
    .large-area:focus {
        background: #4a4a4a;
    }

    .large-area:focus {
        color: #eeeeee;
    } */

    /* .controls__button {
        padding: 8px 14px;
        width: 100%;
        margin-bottom: 10px;
        border-radius: 5px;
        border: none;
        outline: none;
        cursor: pointer;
        background: #009578;
        color: #ffffff;
        font-weight: bold;
        font-family: "Roboto";
    }

    .controls__button:active {
        background: #00705a;
    } */
</style>

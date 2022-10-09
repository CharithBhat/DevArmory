<script lang="ts">
    let regularText: string = tsvscode.getState()?.regularText || "";
    let convertedText: string = tsvscode.getState()?.convertedText || "";
    // // $: {
    // //     convertedText = regularText.toLocaleUpperCase();
    // //     tsvscode.setState({ regularText, convertedText });
    // // }
    function onAddingSource(e: any): void {
        regularText = (e.target as HTMLInputElement).value;
        convertedText = JSON.stringify(JSON.parse(regularText), null, 4);
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

    // function copyBase64() {
    //     let textarea = document.getElementById(
    //         "base64-textarea"
    //     ) as HTMLInputElement;
    //     textarea!.select()!;
    //     document.execCommand("copy");
    //     document!.getSelection()!.removeAllRanges();
    //     document!.getSelection()!.addRange(document.createRange());
    // }

    // function copySource() {
    //     let textarea = document.getElementById(
    //         "source-textarea"
    //     ) as HTMLInputElement;
    //     textarea!.select()!;
    //     document.execCommand("copy");
    //     document!.getSelection()!.removeAllRanges();
    //     document!.getSelection()!.addRange(document.createRange());
    // }

    // function clearRegularText(){
    //     regularText = '';
    //     let textarea = document.getElementById(
    //         "source-textarea"
    //     ) as HTMLInputElement;
    //     textarea.select()!;
    //     tsvscode.setState({ regularText, convertedText });
    // }

    // function clearConvertedText(){
    //     convertedText = '';
    //     let textarea = document.getElementById(
    //         "base64-textarea"
    //     ) as HTMLInputElement;
    //     textarea.select()!;
    //     tsvscode.setState({ regularText, convertedText });
    // }

    function syntaxHighlight(json: any) {
        json = json
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        return json.replace(
            /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
            function (match: any) {
                var cls = "number";
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cls = "key";
                    } else {
                        cls = "string";
                    }
                } else if (/true|false/.test(match)) {
                    cls = "boolean";
                } else if (/null/.test(match)) {
                    cls = "null";
                }
                return '<span class="' + cls + '">' + match + "</span>";
            }
        );
    }

    function startprocess() {
        var obj = {
            a: 1,
            b: "foo",
            c: [false, "false", null, "null", { d: { e: 1.3e5, f: "1.3e5" } }],
        };
        var str = JSON.stringify(obj, undefined, 4);

        syntaxHighlight(str);
    }
</script>

<!-- HEY!!!!! If you plan to create a new svelte page. then try adding the below command in your package json as subscript -->
<!-- --config ./build/node-extension.webpack.config.js  -->

<!-- HEY!!!! this is for text escaping -->
<!-- function addslashes( str ) {
    return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
} -->
<div class="padding-for-whole-page">
    <h1>Json Formatter</h1>
    <br />

    <!-- new code here -->

    <div class="container">
        <textarea
            class="large-area large-area--input"
            placeholder="Enter your JSON here..."
            value={regularText}
            on:input={onAddingSource}
        />
        <div class="controls">
            <!-- <button
                type="button"
                class="controls__button controls__button--format"
                on:click={onAddingSource}>Format</button
            > -->
            <!-- <button
                type="button"
                class="controls__button controls__button--minify"
                on:click={startprocess}>Minify</button
            > -->
        </div>
        <textarea
            readonly
            class="large-area large-area--output"
            placeholder="Your JSON will appear here..."
            value={convertedText}
        />
    </div>

    <!-- <p class="padding-for-textarea-below">Source (Input/Output)</p>

    <button
        class="short-button margin-for-textarea-below margin-right"
        on:click={clearRegularText}>Clear</button
    >
    <button class="short-button margin-for-textarea-below" on:click={copySource}
        >Copy</button
    >
    <textarea
        placeholder="Add text here"
        name="yo?"
        id="source-textarea"
        cols="5"
        rows="10"
        type="text"
        value={regularText}
        on:input={onAddingSource}
    />
    <br />

    <p class="padding-for-textarea-below">Base64 (Input/Output)</p>

    <button
        class="short-button margin-for-textarea-below margin-right"
        on:click={clearConvertedText}>Clear</button
    >

    <button class="short-button margin-for-textarea-below" on:click={copyBase64}
        >Copy</button
    >

    <textarea
        placeholder="Add encoded text here"
        name="hoe"
        id="base64-textarea"
        cols="30"
        rows="10"
        type="text"
        value={convertedText}
        on:input={onAddingBase64}
    /> -->
</div>

<style>
    /* textarea {
        padding: 10px;
        outline-style: solid;
        outline-color: #191a21;
        outline-width: 1px;
    } */
    .padding-for-whole-page {
        margin: 40px;
    }
    /* .margin-for-textarea-below {
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
    } */

    .container {
        display: grid;
        grid-template-columns: 1fr 100px 1fr;
        align-items: center;
        height: 100vh;
        box-sizing: border-box;
        padding: 20px;
        gap: 20px;
    }

    .large-area {
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        /* color: #aaaaaa; */
        background: #444444;
        border: none;
        border-radius: 10px;
        outline: none;
        resize: none;
        font-family: monospace;
        transition: background 0.25s, color 0.25s;
    }

    .large-area:hover,
    .large-area:focus {
        background: #4a4a4a;
    }

    .large-area:focus {
        color: #eeeeee;
    }

    .controls__button {
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
    }

    pre {
        outline: 1px solid #ccc;
        padding: 5px;
        margin: 5px;
    }
    .string {
        color: green;
    }
    .number {
        color: darkorange;
    }
    .boolean {
        color: blue;
    }
    .null {
        color: magenta;
    }
    .key {
        color: red;
    }
</style>

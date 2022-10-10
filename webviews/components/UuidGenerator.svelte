<script lang="ts">

    let answer: string = tsvscode.getState()?.answer || "";

    function onGenerate(count: number) {
        let temp: string = "";
        for (let i = 0; i < count; i++) {
            temp = create_UUID() + "\n" + temp;
        }
        answer = temp;
        tsvscode.setState({ answer });
    }

    function create_UUID() {
    
        var dt = new Date().getTime();
        var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
            }
        );
        return uuid;
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

    function clearGeneratedUUIDS() {
        answer = '';
        let textarea = document.getElementById(
            "source-textarea"
        ) as HTMLInputElement;
        textarea.select()!;
        tsvscode.setState({ answer });
    }
</script>

<!-- HEY!!!!! If you plan to create a new svelte page. then try adding the below command in your package json as subscript -->
<!-- --config ./build/node-extension.webpack.config.js  -->

<!-- HEY!!!! this is for text escaping -->
<!-- function addslashes( str ) {
    return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
} -->
<div class="padding-for-whole-page">
    <h1>UUID Generator</h1>
    <br />

    <p class="padding-for-textarea-below">Source (Input/Output)</p>
    <button
        class="medium-button margin-for-textarea-below margin-right"
        on:click={() => {onGenerate(3)}}>Generate</button
    >
    <button
        class="short-button margin-for-textarea-below margin-right"
        on:click={clearGeneratedUUIDS}>Clear</button
    >
    <button class="short-button margin-for-textarea-below" on:click={copySource}
        >Copy</button
    >
    <textarea
    readonly
        placeholder="Add text here"
        name="yo?"
        id="source-textarea"
        cols="5"
        rows="10"
        type="text"
        value={answer}
    />
    <br />
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

    .medium-button {
        width: 80px;
        margin-left: 10px;
        float: right;
        border-radius: 5px;
    }
</style>

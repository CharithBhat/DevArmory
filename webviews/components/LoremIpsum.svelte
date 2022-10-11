<script lang="ts">
    let answer: string = tsvscode.getState()?.answer || "";

    let count: number = tsvscode.getState()?.count || 1;

    let uppercaseBoolean: boolean =
        tsvscode.getState()?.uppercaseBoolean || false;

    let hyphenBoolean: boolean = tsvscode.getState()?.hyphenBoolean || false;

    let beltColour: string = tsvscode.getState()?.beltColour || "Paragraph";
    let skills: string[] = tsvscode.getState()?.skills || [];

    $: {
        console.log(skills, beltColour);
        tsvscode.setState({
            answer,
            count,
            uppercaseBoolean,
            hyphenBoolean,
            skills,
            beltColour,
        });
    }

    function onGenerate() {
        let temp: string = "";
        for (let i = 0; i < count; i++) {
            temp = create_UUID() + "\n" + temp;
        }
        // check for uppeercase
        if (uppercaseBoolean) {
            temp = temp.toUpperCase();
        }

        if (!hyphenBoolean) {
            temp = temp.replaceAll("-", "");
        }

        answer = temp;
        tsvscode.setState({ answer, count });
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
        answer = "";
        let textarea = document.getElementById(
            "source-textarea"
        ) as HTMLInputElement;
        textarea.select()!;
        tsvscode.setState({ answer, count });
    }
</script>

<!-- HEY!!!!! If you plan to create a new svelte page. then try adding the below command in your package json as subscript -->
<!-- --config ./build/node-extension.webpack.config.js  -->

<!-- HEY!!!! this is for text escaping -->
<!-- function addslashes( str ) {
    return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
} -->
<div class="padding-for-whole-page">
    <h1>Lorem Ipsum Generator</h1>
    <br /><br />


    <div class="options-div">
        <p class="multiply-symbol">Length</p>

        <input
            class="countInput"
            type="number"
            bind:value={count}
            min="0"
            max="10"
        />

        <p class="multiply-symbol">Type</p>
        <select bind:value={beltColour}>
            <option value="Paragarph">Paragraph</option>
            <option value="Sentence">Sentence</option>
            <option value="Words">Words</option>
        </select>
    </div>
    <br />

    <p class="padding-for-textarea-below">UUID(s)</p>

    <button
        class="short-button margin-for-textarea-below margin-right"
        on:click={clearGeneratedUUIDS}>Clear</button
    >
    <button class="short-button margin-for-textarea-below" on:click={copySource}
        >Copy</button
    >
    <button class="medium-button " on:click={onGenerate}>Refresh</button>
    <textarea
        readonly
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
        border-radius: 5px;
    }

    input {
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

    .medium-button {
        width: 130px;
        float: right;
        border-radius: 5px;
    }

    .countInput {
        width: 100px;
        margin-right: 20px;
    }

    .multiply-symbol {
        margin-right: 15px;
        line-height: 30px;
    }

    select {
        color-scheme: dark;
        width: 100px;
    }

    .options-div {
        display: flex;
        align-content: center;
        height: 30px;
    }
</style>

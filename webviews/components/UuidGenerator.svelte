<script lang="ts">
    let answer: string = tsvscode.getState()?.answer || "";

    let count: number = tsvscode.getState()?.count || 1;

    let uppercaseBoolean: boolean =
        tsvscode.getState()?.uppercaseBoolean || false;
    let hyphenBoolean: boolean = tsvscode.getState()?.hyphenBoolean || false;

    $: {
        tsvscode.setState({ answer, count, uppercaseBoolean, hyphenBoolean });
    }

    function onGenerate() {
        let temp: string = "";
        for (let i = 0; i < count; i++) {
            temp = create_UUID() + "\n" + temp;
        }
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

<div class="padding-for-whole-page">
    <h1>UUID Generator</h1>
    <br /><br />

    <div class="options-div">
        <input type="checkbox" bind:checked={uppercaseBoolean} />

        <p style="margin-left: 10px;">UpperCase</p>

        <div style="width: 10px;" />

        <input type="checkbox" bind:checked={hyphenBoolean} />
        <p style="margin-left: 10px;">Hyphen</p>
    </div>

    <br /><br />

    <div class="options-div">
        <input
            class="countInput"
            type="number"
            bind:value={count}
            min="0"
            max="10"
        />
        <p class="multiply-symbol">X</p>
        <button class="medium-button " on:click={onGenerate}
            >Generate UUID(s)</button
        >
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
    }

    .multiply-symbol {
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 5px;
    }

    .options-div {
        display: flex;
    }
</style>

<script lang="ts">
    let answer: string = tsvscode.getState()?.answer || "";

    let count: number = tsvscode.getState()?.count || 1;

    let temp: string = "";

    let questions = [
        { id: 1, text: `Paragraph` },
        { id: 2, text: `Sentence` },
        { id: 3, text: `Word` },
    ];

    // let selected = tsvscode.getState()?.selected || questions[0];
    let selected: any;

    $: {
        // console.log(selected);
        tsvscode.setState({
            answer,
            count,
            // selected,
        });
    }

    function onGenerate() {
        answer = "";
        temp = "";
        let stringToAdd: string = "";
        // paragh
        if (selected.id === 1) {
            stringToAdd =
                "Duo nulla dolores ut diam sanctus stet minim tempor mazim magna nonumy. Invidunt vero quis gubergren vel vero nonummy. Magna feugiat consequat dolor takimata lorem sed eos at sanctus et erat. Stet justo iriure at iriure dolor at sed dolor duis consequat dolor no.";
            for (let i: number = 0; i < count; i++) {
                temp = temp + stringToAdd + "\n" + "\n";
            }
        }
        // sentence
        else if (selected.id === 2) {
            stringToAdd =
                "Duo nulla dolores ut diam sanctus stet minim tempor mazim magna nonumy. ";

            for (let i: number = 0; i < count; i++) {
                temp = temp + stringToAdd;
            }
        }
        //word
        else {
            stringToAdd = "Lorem ";
            for (let i: number = 0; i < count; i++) {
                temp = temp + stringToAdd;
            }
        }

        answer = temp;
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
        temp = "";
        let textarea = document.getElementById(
            "source-textarea"
        ) as HTMLInputElement;
        textarea.select()!;
        // tsvscode.setState({ answer, count });
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

        <input class="countInput" type="number" bind:value={count} min="0" />

        <p class="multiply-symbol">Type</p>
        <!-- <select bind:value={beltColour}>
            <option value="Paragarph">Paragraph</option>
            <option value="Sentence">Sentence</option>
            <option value="Words">Words</option>
        </select> -->
        <select bind:value={selected} on:change={() => {}}>
            {#each questions as question}
                <option value={question} on:change={() => {}}>
                    {question.text}
                </option>
            {/each}
        </select>
    </div>
    <br />

    <p class="padding-for-textarea-below">Output</p>

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
        rows="20"
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

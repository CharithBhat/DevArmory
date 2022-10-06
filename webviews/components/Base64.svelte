<script lang="ts">

    let regularText: string =  tsvscode.getState()?.regularText || '';
    let convertedText: string =  tsvscode.getState()?.convertedText || '';
    // $: {
    //     convertedText = regularText.toLocaleUpperCase();
    //     tsvscode.setState({ regularText, convertedText });
    // }
    function onAddingSource(e: any): void {
        regularText = (e.target as HTMLInputElement).value;
        convertedText = btoa(regularText);
        // convertedText = regularText.toLocaleUpperCase();
        tsvscode.setState({ regularText, convertedText });  
    }

    function onAddingBase64(e: any): void {
        convertedText = (e.target as HTMLInputElement).value;
        // regularText = convertedText.toLocaleLowerCase();
        regularText = atob(convertedText);
        tsvscode.setState({ regularText, convertedText });  
    }
</script>

<!-- HEY!!!!! If you plan to create a new svelte page. then try adding the below command in your package json as subscript -->
<!-- --config ./build/node-extension.webpack.config.js  -->
<div class="padding-for-whole-page">
    <h1>Base64</h1>
    <br />

    <p class="padding-for-textarea-below">Source</p>
    <textarea
        placeholder="Add text here"
        name="yo?"
        id="yolo"
        cols="5"
        rows="10"
        type="text"
        on:input={onAddingSource}
        value={regularText}
    />
    <br>
    <p class="padding-for-textarea-below">Base64</p>
    <textarea
        placeholder="Add converted text here"
        name="hoe"
        id="hoehoe"
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
        outline-style:solid;
        outline-color: #191a21;
        outline-width: 1px;
     }
    .padding-for-whole-page {
        margin: 20px;
    }
    .padding-for-textarea-below {
        padding-bottom: 5px;
    }
</style>

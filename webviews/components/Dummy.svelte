<script lang="ts">
    // let beltColor: string = "black";
    // let firstName: string = "Charith"
    // let lastName: string = 'Bhat';

    // $: fullName = firstName.toUpperCase();

    let regularText: string = "";
    let convertedText: string = "";
    $: {
        convertedText = regularText.toLocaleUpperCase();
    }
</script>

<!-- HEY!!!!! If you plan to create a new svelte page. then try adding the below command in your package json as subscript -->
<!-- --config ./build/node-extension.webpack.config.js  -->
<div class="padding-for-whole-page">
    <h1>Base64</h1>
    <br />
    <!-- 
<p>{fullName} {beltColor} belt</p>

<input type="text" bind:value={beltColor}>
<h2>First Name: </h2>
<input type="text" bind:value={firstName}>
<h2>Last Name: </h2>
<input type="text" bind:value={lastName}> -->

    <!-- <h4>Regular text goes here:</h4> -->
    <p class="padding-for-textarea-below">Source</p>
    <textarea
        placeholder="Add text here"
        name="yo?"
        id="yolo"
        cols="5"
        rows="10"
        type="text"
        bind:value={regularText}
    />
    <br>
    <!-- <h4>Converted text goes here:</h4> -->
    <p class="padding-for-textarea-below">Base64</p>
    <textarea
        placeholder="Add converted text here"
        name="hoe"
        id="hoehoe"
        cols="30"
        rows="10"
        type="text"
        bind:value={convertedText}
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

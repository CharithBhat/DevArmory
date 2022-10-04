<script lang="ts">
    // let beltColor: string = "black";
    // let firstName: string = "Charith"
    // let lastName: string = 'Bhat';

    // $: fullName = firstName.toUpperCase();

    let regularText: string = "";
    let convertedText: string =  "";
    $: {
        convertedText = regularText.toLocaleUpperCase();
    }
</script>

<!-- HEY!!!!! If you plan to create a new svelte page. then try adding the below command in your package json as subscript -->
<!-- --config ./build/node-extension.webpack.config.js  -->

<h1>First Converter Ever</h1>
<br /><br />
<!-- 
<p>{fullName} {beltColor} belt</p>

<input type="text" bind:value={beltColor}>
<h2>First Name: </h2>
<input type="text" bind:value={firstName}>
<h2>Last Name: </h2>
<input type="text" bind:value={lastName}> -->

<h2>Regular text goes here:</h2>
<textarea
    placeholder="add text here"
    name="yo?"
    id="yolo"
    cols="30"
    rows="10"
    type="text"
    bind:value={regularText}
/>
<h2>Converted text goes here:</h2>
<textarea
    placeholder="add converted text here"
    name="hoe"
    id="hoehoe"
    cols="30"
    rows="10"
    type="text"
    bind:value={convertedText}
/>

<script lang="ts">


    let beltColor: string = "black";
    let upperBeltColor: string = beltColor + 'yo';
    let textcheck: string =  '';
    const handleClick = ()  => {
        beltColor = 'orange';
    }

    
</script>

<!-- HEY!!!!! If you plan to create a new svelte page. then try adding the below command in your package json as subscript -->
<!-- --config ./build/node-extension.webpack.config.js  -->

<h1>Dummy world</h1>

<p>{beltColor} belt</p>

<input type="text" bind:value={beltColor}>

<textarea name="yo?" id="yolo" cols="30" rows="10" type='text' bind:value={beltColor}></textarea>

<textarea name="hoe" id="hoehoe" cols="30" rows="10" type='text' bind:value={upperBeltColor}></textarea>

<p>{textcheck}</p>

<button on:click={handleClick}>update belt color</button>
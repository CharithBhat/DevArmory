<script lang="ts">
    import { onMount } from "svelte";

    let todos: Array<{ text: String; completed: boolean }> = [];
    let text = "";

    onMount(() => {
        // Handle messages sent from the extension to the webview
        window.addEventListener("message", (event) => {
            const message = event.data; // The json data that the extension sent
            switch (message.type) {
                case "new-todo":
                    todos = [
                        { text: message.value, completed: false },
                        ...todos,
                    ];
                    break;
            }
        });
    });

    // variables for webview sidebar
    let allBoolean: boolean = false;
    let convertersBoolean: boolean = false;
    let generatorsBoolean: boolean = false;
    let graphicsBoolean: boolean = false;
    let codersBoolean: boolean = false;
    // ends here
</script>

<!-- adding head tage here -->
<!-- <svelte:head>
    <meta
    httpequiv="Content-Security-Policy"
        content="default-src *"
    />
</svelte:head> -->

<!-- Responsible for webview sidebar items -->
<ul id="myUL">
    <!-- all item here -->
    <!-- <img src="/media/activity.svg" alt="damn" /> -->
    <li>
        <span
            class="caret"
            class:caret-down={allBoolean}
            on:click={() => (allBoolean = !allBoolean)}>All</span
        >
        <ul class="nested" class:active={allBoolean}>
            <li>Water</li>
            <li>Coffee</li>
        </ul>
    </li>
    <!-- converters item here-->
    <li>
        <span
            class="caret"
            class:caret-down={convertersBoolean}
            on:click={() => (convertersBoolean = !convertersBoolean)}
            >Converters</span
        >
        <ul class="nested" class:active={convertersBoolean}>
            <li>Water</li>
            <li>Coffee</li>
        </ul>
    </li>
</ul>
<!--  -->

<form
    on:submit|preventDefault={() => {
        todos = [{ text, completed: false }, ...todos];
        text = "";
    }}
>
    <input bind:value={text} type="text" />
</form>

<ul>
    {#each todos as todo (todo.text)}
        <li
            class:complete={todo.completed}
            on:click={() => {
                todo.completed = !todo.completed;
            }}
        >
            {todo.text}
        </li>
    {/each}
</ul>

<!-- svelte-ignore missing-declaration -->
<button
    on:click={() => {
        tsvscode.postMessage({
            type: "onInfo",
            value: "info message",
        });
    }}>click me</button
>

<!-- svelte-ignore missing-declaration -->
<button
    on:click={() => {
        tsvscode.postMessage({
            type: "onError",
            value: "Error message",
        });
    }}>click me for error</button
>

<style>
    input[type="text"] {
        /* this is gunmetal grey */
        /* border: 1px solid #71797e; */
        border: black;
        background-color: #3d3d3d;
    }

    .complete {
        text-decoration: line-through;
    }

    /* CSS for webview sidebar items*/
    /* Remove default bullets */
    ul,
    #myUL {
        list-style-type: none;
    }

    /* Remove margins and padding from the parent ul */
    #myUL {
        margin: 0;
        padding: 0;
    }

    /* Style the caret/arrow */
    .caret {
        cursor: pointer;
        user-select: none; /* Prevent text selection */
    }

    /* Create the caret/arrow with a unicode, and style it */
    .caret::before {
        content: "\25B6";
        color: white;
        display: inline-block;
        margin-right: 6px;
    }

    /* Rotate the caret/arrow icon when clicked on (using JavaScript) */
    .caret-down::before {
        transform: rotate(90deg);
    }

    /* Hide the nested list */
    .nested {
        display: none;
    }

    /* Show the nested list when the user clicks on the caret/arrow (with JavaScript) */
    .active {
        display: block;
    }
    /*  */
</style>

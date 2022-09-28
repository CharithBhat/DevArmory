<script lang="ts">
    let todos: Array<{ text: String; completed: boolean }> = [];
    let text = "";
</script>

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

<button on:click={() => {
    tsvscode.postMessage({
                type: 'onInfo',
                value: 'info message'
            });
}}>click me</button>

<button on:click={() => {
    tsvscode.postMessage({
                type: 'onError',
                value: 'Error message'
            });
}}>click me for error</button>


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
</style>

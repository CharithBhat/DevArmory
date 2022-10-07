<script lang="ts">
    // variables for webview sidebar
    let allBoolean: boolean = tsvscode.getState().allBoolean || false;
    let convertersBoolean: boolean =
        tsvscode.getState()?.convertersBoolean || false;
    let generatorsBoolean: boolean = false;
    let graphicsBoolean: boolean = false;
    let codersBoolean: boolean = false;

    $: {
        tsvscode.setState({ allBoolean, convertersBoolean, current });
    }

    let current = tsvscode.getState().current || "";

    // variables for images
    let activityImage: string =
        "https://file%2B.vscode-resource.vscode-cdn.net/d%3A/vs_code_extensions/devarmory/media/activity.svg";
</script>

<!-- Responsible for webview sidebar items -->

<ul id="myUL">
    <!-- all item here -->
    <li>
        <span
            class="caret {current === 'booger' ? 'selected' : ''}"
            class:caret-down={allBoolean}
            on:click={() => {
                allBoolean = !allBoolean;
                current = "booger";
            }}
            ><img
                class="sidebar-icons"
                style="vertical-align: middle;"
                src={activityImage}
                alt="damn"
            /> All</span
        >

        <ul class="nested" class:active={allBoolean}>
            <!-- svelte-ignore missing-declaration -->

            <li
                class="addThisClassForPointer {current === 'all'
                    ? 'selected'
                    : ''}"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onHelloWorld",
                        value: "valueForOnHelloWorld",
                    });
                    current = "all";
                }}
            >
                <p class="indent-left">All</p>
            </li>

            <!-- svelte-ignore missing-declaration -->
            <li
                class="addThisClassForPointer {current === 'base64'
                    ? 'selected'
                    : ''}"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onBase64",
                        value: "notusingthisvalue",
                    });
                    current = "base64";
                }}
            >
                <p class="indent-left">Base64</p>
            </li>
        </ul>
    </li>
    <!-- converters item here-->
    <li>
        <span
            class="caret"
            class:caret-down={convertersBoolean}
            on:click={() => {
                convertersBoolean = !convertersBoolean;
            }}
            ><img
                class="sidebar-icons"
                style="vertical-align: middle;"
                src={activityImage}
                alt="damn"
            /> Converters</span
        >

        <ul class="nested" class:active={convertersBoolean}>
            <!-- svelte-ignore missing-declaration -->

            <li
                class="addThisClassForPointer"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onHelloWorld",
                        value: "valueForOnHelloWorld",
                    });
                }}
            >
                <p class="indent-left">Hello</p>
            </li>

            <!-- svelte-ignore missing-declaration -->
            <li
                class="addThisClassForPointer"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onBase64",
                        value: "notusingthisvalue",
                    });
                }}
            >
                <p class="indent-left">Base64</p>
            </li>
        </ul>
    </li>
</ul>
<!--  -->

<!-- helmet-pointy -->

<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 306.548 306.548"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    enable-background="new 0 0 306.548 306.548"
>
    <g>
        <path
            d="m233.73,163.641c-4.358-35.631-18.067-58.73-39.147-70.667l-5.789,45.646c-1.693,13.35-13.118,23.417-26.574,23.417h-17.893c-13.457,0-24.881-10.067-26.574-23.417l-5.789-45.646c-21.079,11.937-34.789,35.036-39.147,70.667-4.436,36.275-17.821,97.331-21.946,115.748-0.689,3.076 1.058,6.18 4.049,7.177l58.963,19.666c1.81,0.604 3.798,0.333 5.38-0.732 1.583-1.065 2.582-2.805 2.703-4.709l4.783-74.639c0.226-3.529-1.713-6.842-4.901-8.372l-33.446-16.052c-4.189-2.01-5.955-7.035-3.944-11.224l7.592-15.82c2.009-4.186 7.036-5.954 11.224-3.944l33.618,16.135c3.006,1.443 4.924,4.488 4.924,7.822 0,12.543 0,34.857 0,43.401 0,0.84 0.262,1.658 0.75,2.341l7.43,10.401c0.756,1.058 1.977,1.687 3.278,1.687 1.301,0 2.522-0.628 3.278-1.687l7.43-10.401c0.488-0.683 0.75-1.502 0.75-2.341 0-8.548 0-30.859 0-43.401 0-3.336 1.916-6.378 4.924-7.822l33.618-16.135c4.186-2.009 9.214-0.244 11.224,3.944l7.593,15.82c2.01,4.189 0.244,9.214-3.944,11.224l-33.447,16.053c-3.188,1.53-5.128,4.843-4.901,8.372l4.783,74.639c0.122,1.904 1.121,3.644 2.704,4.709 1.583,1.065 3.57,1.336 5.38,0.732l58.963-19.666c2.996-0.999 4.739-4.095 4.048-7.177-4.126-18.418-17.51-79.474-21.947-115.749z"
        />
        <path
            d="m132.634,136.733c0.747,5.889 5.757,10.304 11.694,10.304h17.893c5.937,0 10.947-4.415 11.694-10.304l13.094-103.248c0.374-2.95-0.745-5.893-2.984-7.85l-28.274-24.705c-0.709-0.62-1.593-0.93-2.477-0.93s-1.768,0.31-2.477,0.93l-28.273,24.705c-2.239,1.957-3.358,4.9-2.984,7.85l13.094,103.248z"
        />
    </g>
</svg>

<h1
    style="text-align: center
        "
>
    DevArmory
</h1>
<br /><br />

<!-- remove this form -->

<div class="want-some-margin">
    <form>
        <input type="text" />
    </form>

    <!-- svelte-ignore missing-declaration -->
    <button
        class="margin-please"
        on:click={() => {
            tsvscode.postMessage({
                type: "onInfo",
                value: "info message",
            });
        }}>click me</button
    >
    <!-- svelte-ignore missing-declaration -->
    <button
        class="margin-please"
        on:click={() => {
            tsvscode.postMessage({
                type: "onError",
                value: "Error message",
            });
        }}>click me for error</button
    >

    <br /><br />
</div>

<!-- <img class="rocketImage" src={rocketImage} alt="damn"/> -->
<style>
    /* might just use this style for other buttons */
    input[type="text"] {
        border: black;
        background-color: #3d3d3d;
    }

    /* CSS for webview sidebar items*/
    ul,
    #myUL {
        list-style-type: none;
        margin-left: 50;
    }

    /* Style the caret/arrow */
    .caret {
        cursor: pointer;
        user-select: none; /* Prevent text selection */
        display: block;
        height: 22px;
    }

    .caret:hover {
        background-color: #44475a75;
    }

    .addThisClassForPointer {
        cursor: pointer;
        user-select: none;
        height: 22px;
    }
    /* Create the caret/arrow with a unicode, and style it */
    .caret::before {
        content: "\276F";
        color: grey;
        display: inline-block;
        font-size: 15px;
        padding-left: 15px;
        padding-right: 15px;
    }

    /* Rotate the caret/arrow icon when clicked on (using JavaScript) */
    .caret-down::before {
        transform: rotate(90deg);
        /* transform-origin: 3px; */
        /* transition-duration: 50ms; */
    }

    /* Hide the nested list */
    .nested {
        display: none;
    }

    /* Show the nested list when the user clicks on the caret/arrow (with JavaScript) */
    ul .active {
        display: block;
        /* margin-left: 8px; */
    }

    .sidebar-icons {
        padding-right: 3px;
    }

    .nested > li:hover {
        background-color: #44475a75;
    }

    svg {
        fill: white;
        height: 150px;
        width: 150px;
        display: block;
        margin: auto;
        margin-top: 100px;
    }

    .want-some-margin {
        padding: 0 20px;
    }

    .margin-please {
        margin-top: 4px;
    }

    .indent-left {
        margin-left: 37px;
    }

    .selected {
        background-color: #44475a75;
    }
</style>

<script lang="ts">
    // function copySource() {
    //     let textarea = document.getElementById(
    //         "source-textarea"
    //     ) as HTMLInputElement;
    //     textarea!.select()!;
    //     document.execCommand("copy");
    //     document!.getSelection()!.removeAllRanges();
    //     document!.getSelection()!.addRange(document.createRange());
    // }

    // function clearGeneratedUUIDS() {
    //     answer = "";
    //     temp = "";
    //     let textarea = document.getElementById(
    //         "source-textarea"
    //     ) as HTMLInputElement;
    //     textarea.select()!;
    //     // tsvscode.setState({ answer, count });
    // }

    let regularText: string = "";
    let convertedText: string = regularText;

    let currentCase: string = "original-text";

    // $: {

    // }

    function changeOutput() {
        switch (currentCase) {
            case "original-text": {
                convertedText = regularText;
                break;
            }
            case "sentence-case": {
                function toSentenceCase(theString: string) {
                    var newString = theString
                        .toLowerCase()
                        .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
                            return c.toUpperCase();
                        });
                    return newString;
                }
                convertedText = toSentenceCase(convertedText);
                break;
            }
            case "lower-case": {
                convertedText = convertedText.toLowerCase();
                break;
            }
            case "upper-case": {
                convertedText = convertedText.toUpperCase();
                break;
            }
            case "title-case": {
                function toTitleCase(str: string) {
                    return str.replace(/\w\S*/g, function (txt) {
                        return (
                            txt.charAt(0).toUpperCase() +
                            txt.substr(1).toLowerCase()
                        );
                    });
                }
                convertedText = toTitleCase(convertedText);
                break;
            }

            case "camel-case": {
                function toCamelCase(str: string) {
                    return str.replace(
                        /(?:^\w|[A-Z]|\b\w|\s+)/g,
                        function (match, index) {
                            if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
                            return index === 0
                                ? match.toLowerCase()
                                : match.toUpperCase();
                        }
                    );
                }
                convertedText = toCamelCase(convertedText);
                break;
            }
            // case "pascal-case": {
            //     function toCamelCase(str: string) {
            //         return str.replace(
            //             /(?:^\w|[A-Z]|\b\w|\s+)/g,
            //             function (match, index) {
            //                 if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
            //                 return index === 0
            //                     ? match.toLowerCase()
            //                     : match.toUpperCase();
            //             }
            //         );
            //     }
            //     convertedText = toCamelCase(convertedText);
            //     break;
            // }
            case "snake-case": {
                function toSnakeCase(str: string) {
                    return str.toLocaleLowerCase()
                        .replace(/\W+/g, " ")
                        .split(/ |\B(?=[A-Z])/)
                        .map((word) => word.toLowerCase())
                        .join("_");
                }
                convertedText = toSnakeCase(convertedText);
                break;
            }
            case "constant-case": {
                function toConstantCase(str: string) {
                    return str.toLocaleLowerCase()
                        .replace(/\W+/g, " ")
                        .split(/ |\B(?=[A-Z])/)
                        .join("_")
                        .toLocaleUpperCase();
                }
                convertedText = toConstantCase(convertedText);
                break;
            }
            case "kebab-case": {
                function toKebabCase(str: string) {
                    return str
                        .toLocaleLowerCase()
                        .replace(/\W+/g, " ")
                        .split(/ |\B(?=[A-Z])/)
                        .map((word) => word.toLowerCase())
                        .join("-");
                }
                convertedText = toKebabCase(convertedText);
                break;
            }
            case "cobol-case": {
                function toCobolCase(str: string) {
                    return str.toLocaleLowerCase()
                        .replace(/\W+/g, " ")
                        .split(/ |\B(?=[A-Z])/)
                        .map((word) => word.toUpperCase())
                        .join("-");
                }
                convertedText = toCobolCase(convertedText);
                break;
            }
            case "train-case": {
                function toTitleCase(str: string) {
                    return str.replace(/\w\S*/g, function (txt) {
                        return (
                            txt.charAt(0).toUpperCase() +
                            txt.substr(1).toLowerCase()
                        );
                    });
                }
                function toKebabCase(str: string) {
                    return str
                        .replace(/\W+/g, " ")
                        .split(/ |\B(?=[A-Z])/)
                        .join("-");
                }
                function toTrainCase(str: string): string {
                    return toKebabCase(toTitleCase(str));
                }
                convertedText = toTrainCase(convertedText);
                break;
            }

            default: {
                break;
            }
        }
    }
</script>

<!-- HEY!!!!! If you plan to create a new svelte page. then try adding the below command in your package json as subscript -->
<!-- --config ./build/node-extension.webpack.config.js  -->

<!-- HEY!!!! this is for text escaping -->
<!-- function addslashes( str ) {
    return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
} -->
<div class="padding-for-whole-page">
    <h1>Text Case Converter</h1>
    <br /><br />

    <div>
        <button
            class="regular-button margin-for-textarea-below"
            on:click={() => {
                currentCase = "original-text";
                changeOutput();
            }}>Original text</button
        >
        <button
            class="regular-button margin-for-textarea-below"
            on:click={() => {
                currentCase = "sentence-case";
                changeOutput();
            }}>Sentence Case</button
        >
        <button
            class="regular-button margin-for-textarea-below"
            on:click={() => {
                currentCase = "lower-case";
                changeOutput();
            }}>lower case</button
        >
        <button
            class="regular-button margin-for-textarea-below"
            on:click={() => {
                currentCase = "upper-case";
                changeOutput();
            }}>UPPER CASE</button
        >
        <button
            class="regular-button margin-for-textarea-below"
            on:click={() => {
                currentCase = "title-case";
                changeOutput();
            }}>Title Case</button
        >
        <button
            class="regular-button margin-for-textarea-below"
            on:click={() => {
                currentCase = "camel-case";
                changeOutput();
            }}>camelCase</button
        >
        <button
            class="regular-button margin-for-textarea-below"
            on:click={() => {
                currentCase = "snake-case";
                changeOutput();
            }}>snake_case</button
        >
        <button
            class="long-button margin-for-textarea-below"
            on:click={() => {
                currentCase = "constant-case";
                changeOutput();
            }}>CONSTANT_CASE</button
        >
        <button
            class="regular-button margin-for-textarea-below"
            on:click={() => {
                currentCase = "kebab-case";
                changeOutput();
            }}>kebab-case</button
        >
        <button
            class="regular-button margin-for-textarea-below"
            on:click={() => {
                currentCase = "cobol-case";
                changeOutput();
            }}>COBOL-CASE</button
        >
        <button
            class="regular-button margin-for-textarea-below"
            on:click={() => {
                currentCase = "train-case";
                changeOutput();
            }}>Train-Case</button
        >
    </div>

    <br /><br />

    <p class="padding-for-textarea-below">String</p>

    <button
        class="short-button margin-for-textarea-below margin-right"
        on:click={() => {}}>Clear</button
    >
    <button class="short-button margin-for-textarea-below" on:click={() => {}}
        >Copy</button
    >
    <button class="medium-button " on:click={() => {}}>Refresh</button>
    <textarea
        name="yo?"
        id="source-textarea"
        placeholder="Add string here"
        cols="5"
        rows="20"
        type="text"
        bind:value={convertedText}
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

    /* input {
        outline-style: solid;
        outline-color: #191a21;
        outline-width: 1px;
        border-radius: 5px;
    } */
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

    .regular-button {
        width: 100px;
        margin-right: 10px;
        border-radius: 5px;
    }

    .long-button {
        width: 140px;
        margin-right: 10px;
        border-radius: 5px;
    }

    /* .options-div {
        display: flex;
        align-content: center;
        height: 30px;
    } */
</style>

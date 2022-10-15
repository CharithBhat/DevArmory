<script lang="ts">
    // variables for webview sidebar
    let allBoolean: boolean = tsvscode.getState()?.allBoolean || false;
    let textConvertersBoolean: boolean =
        tsvscode.getState()?.textConvertersBoolean || false;
    let encodersBoolean: boolean =
        tsvscode.getState()?.encodersBoolean || false;
    let formattersBoolean: boolean =
        tsvscode.getState()?.formattersBoolean || false;
    let textBoolean: boolean = tsvscode.getState()?.textBoolean || false;
    let generatorsBoolean: boolean =
        tsvscode.getState()?.generatorsBoolean || false;
    let current = tsvscode.getState()?.current || "";

    $: {
        tsvscode.setState({
            allBoolean,
            textConvertersBoolean,
            encodersBoolean,
            formattersBoolean,
            generatorsBoolean,
            textBoolean,
            current,
        });
    }

    function unselectButton() {
        let textarea = document.getElementById(
            "dummy-button"
        ) as HTMLInputElement;
        textarea.select()!;
    }

    // variables for images
    // let homeIcon: string =
    //     "https://file%2B.vscode-resource.vscode-cdn.net/d%3A/vs_code_extensions/devarmory/media/home-hollow.svg";

    // let convertersIcon: string =
    //     "https://file%2B.vscode-resource.vscode-cdn.net/d%3A/vs_code_extensions/devarmory/media/converter-icon.svg";

    // let encodersIcon: string =
    //     "https://file%2B.vscode-resource.vscode-cdn.net/d%3A/vs_code_extensions/devarmory/media/encoder-icon.svg";

    // let formattersIcon: string =
    //     "https://file%2B.vscode-resource.vscode-cdn.net/d%3A/vs_code_extensions/devarmory/media/formatter-icon.svg";
    // let generatorsIcon: string =
    //     "https://file%2B.vscode-resource.vscode-cdn.net/d%3A/vs_code_extensions/devarmory/media/generator-icon.svg";

    // let htmlIcon: string =
    //     "https://file%2B.vscode-resource.vscode-cdn.net/d%3A/vs_code_extensions/devarmory/media/html-icon.svg";

    // let base64Icon: string =
    //     "https://file%2B.vscode-resource.vscode-cdn.net/d%3A/vs_code_extensions/devarmory/media/base64-icon.svg";

    // let urlIcon: string =
    //     "https://file%2B.vscode-resource.vscode-cdn.net/d%3A/vs_code_extensions/devarmory/media/url-icon.svg";

    // let jsonIcon: string =
    //     "https://file%2B.vscode-resource.vscode-cdn.net/d%3A/vs_code_extensions/devarmory/media/json-icon.svg";

    // let sqlIcon: string =
    //     "https://file%2B.vscode-resource.vscode-cdn.net/d%3A/vs_code_extensions/devarmory/media/sql-icon.svg";

    // let xmlIcon: string =
    //     "https://file%2B.vscode-resource.vscode-cdn.net/d%3A/vs_code_extensions/devarmory/media/xml-icon.svg";

    // let uuidIcon: string =
    //     "https://file%2B.vscode-resource.vscode-cdn.net/d%3A/vs_code_extensions/devarmory/media/uuid-icon.svg";

    // let loremIpsumIcon: string =
    //     "https://file%2B.vscode-resource.vscode-cdn.net/d%3A/vs_code_extensions/devarmory/media/text-converter-icon.svg";

    // let caseConverterIcon: string =
    //     "https://file%2B.vscode-resource.vscode-cdn.net/d%3A/vs_code_extensions/devarmory/media/text-icon.svg";

    // let escaperIcon: string =
    //     "https://file%2B.vscode-resource.vscode-cdn.net/d%3A/vs_code_extensions/devarmory/media/lorem-icon.svg";
</script>

<!-- Responsible for webview sidebar items -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<ul id="myUL">
    <!-- all item here -->
    <li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span
            class="caret {current === 'all' ? 'selected' : ''}"
            class:caret-down={allBoolean}
            on:click={() => {
                allBoolean = !allBoolean;
                current = "all";
            }}
        >
            <!-- <img
                class="sidebar-icons"
                style="vertical-align: middle;"
                src={homeSvg}
                alt="damn"
            /> -->
            <div class="sidebar-icons">
                <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    stroke="white"
                    fill="white"
                    width="12"
                    height="12"
                    viewBox="0 0 58.365 58.365"
                    style="enable-background:new 0 0 58.365 58.365;"
                    xml:space="preserve"
                >
                    <path
                        d="M57.863,26.632L29.182,0L0.502,26.632c-0.404,0.376-0.428,1.009-0.052,1.414c0.374,0.404,1.009,0.427,1.413,0.052
	l4.319-4.011v3.278v31h16v-18c0-3.866,3.134-7,7-7s7,3.134,7,7v18h16v-31v-3.278l4.319,4.011c0.192,0.179,0.437,0.267,0.681,0.267
	c0.269,0,0.536-0.107,0.732-0.319C58.291,27.641,58.267,27.008,57.863,26.632z"
                    />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                </svg>
            </div>

            All Tools</span
        >

        <ul class="nested" class:active={allBoolean}>
            <!-- svelte-ignore missing-declaration -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li
                class="addThisClassForPointer {current === 'html'
                    ? 'selected'
                    : ''}"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onHTML",
                        value: "valueForOnHelloWorld",
                    });
                    current = "html";
                }}
            >
                <span>
                    <!-- <img
                        class="nested-sidebar-icons indent-left"
                        style="vertical-align: middle;"
                        src={htmlIcon}
                        alt="damn"
                    /> -->
                    <div class="nested-sidebar-icons indent-left">
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            stroke="white"
                            fill="white"
                            width="12"
                            height="12"
                            viewBox="0 0 299.215 299.215"
                            style="vertical-align: middle; enable-background:new 0 0 299.215 299.215;"
                            xml:space="preserve"
                        >
                            <g id="XMLID_106_">
                                <path
                                    id="XMLID_107_"
                                    d="M22.347,0c-2.75,0-4.799,2.241-4.555,4.98l23.184,260.047c0.244,2.739,2.611,5.582,5.262,6.318
		l98.381,27.316c2.65,0.736,6.986,0.736,9.637,0.002l98.68-27.361c2.65-0.735,5.02-3.578,5.264-6.316L281.422,4.98
		c0.246-2.739-1.805-4.98-4.555-4.98H22.347z M232.049,59.641c-0.219,2.443-0.598,6.684-0.842,9.423l-0.611,6.823
		c-0.246,2.738-0.596,6.654-0.781,8.701c-0.184,2.048-0.359,3.723-0.391,3.723c-0.031,0-2.307,0-5.057,0h-69.76
		c-2.75,0-5.023,0-5.053,0s-2.305,0-5.055,0h-36.74c-2.75,0-4.799,2.241-4.555,4.98l2.143,23.955c0.244,2.738,2.695,4.98,5.445,4.98
		H144.5c2.75,0,5.025,0,5.055,0s2.303,0,5.053,0h57.939c2.75,0,7.006,0,9.457,0c2.449,0,4.273,1.999,4.051,4.442
		c-0.223,2.443-0.604,6.685-0.848,9.423l-6.891,77.228c-0.246,2.739-0.557,6.238-0.691,7.776c-0.137,1.537-2.416,3.396-5.066,4.131
		l-58.133,16.119c-2.65,0.734-4.852,1.342-4.893,1.351c-0.041,0.009-2.242-0.586-4.893-1.321l-58.195-16.148
		c-2.65-0.735-5.018-3.578-5.262-6.317l-3.746-42.045c-0.244-2.739,1.807-4.98,4.557-4.98h5.311c2.75,0,7.25,0,10,0h7.92
		c2.75,0,5.199,2.241,5.445,4.98l1.469,16.459c0.244,2.739,2.615,5.566,5.271,6.283l27.221,7.351
		c2.654,0.717,4.836,1.304,4.848,1.304s2.193-0.588,4.848-1.305l27.27-7.369c2.654-0.717,5.027-3.545,5.273-6.283l2.957-32.976
		c0.246-2.739-1.803-4.98-4.553-4.98h-30.666c-2.75,0-5.023,0-5.053,0s-2.305,0-5.055,0H80.511c-2.75,0-5.199-2.242-5.443-4.98
		l-7.256-81.306c-0.244-2.739-0.623-6.979-0.842-9.423c-0.217-2.443,1.854-4.442,4.604-4.442H144.5c2.75,0,5.025,0,5.055,0
		s2.303,0,5.053,0h72.838C230.195,55.198,232.267,57.197,232.049,59.641z"
                                />
                            </g>
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                        </svg>
                    </div>

                    <p style="display: inline;">HTML</p>
                </span>
                <!-- <p class="indent-left">HTML</p> -->
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
                <span>
                    <!-- <img
                        class="nested-sidebar-icons indent-left"
                        style="vertical-align: middle;"
                        src={base64Icon}
                        alt="damn"
                    /> -->
                    <div class="nested-sidebar-icons indent-left">
                        <svg
                            stroke="white"
                            fill="white"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                fill-rule="evenodd"
                                d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6zm5 1a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2zm-8 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H7zm4 0a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6zm-4 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H7zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2z"
                                clip-rule="evenodd"
                            /></svg
                        >
                    </div>
                    <p style="display: inline;">Base64</p>
                </span>
            </li>

            <!-- svelte-ignore missing-declaration -->
            <li
                class="addThisClassForPointer {current === 'url'
                    ? 'selected'
                    : ''}"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onURL",
                        value: "notusingthisvalue",
                    });
                    current = "url";
                }}
            >
                <span>
                    <!-- <img
                        class="nested-sidebar-icons indent-left"
                        style="vertical-align: middle;"
                        src={urlIcon}
                        alt="damn"
                    /> -->
                    <div class="nested-sidebar-icons indent-left">
                        <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            stroke="white"
                            fill="white"
                            width="12"
                            height="12"
                            viewBox="0 0 493 493"
                            style="enable-background:new 0 0 493 493;"
                            xml:space="preserve"
                        >
                            <g>
                                <g>
                                    <path
                                        d="M215.6,314.05c6.8,6.6,14.7,12.4,23.5,16.4c2.1,1.2,4.4,1.9,6.7,2.8c2.2,0.9,4.5,1.7,6.9,2.2c2.4,0.6,4.5,1.3,7.1,1.7
			c2.6,0.4,5.2,0.8,7.8,1.1c2,0.2,3.3,0.2,4.9,0.3l2.4,0.1h1.2h2l9.5-0.1l19-0.3l38.1-0.9l38.1-1.1l9.5-0.3l4.8-0.1
			c1.6,0,3.7-0.2,5.5-0.4c7.5-0.4,14.8-2.2,21.9-4.4c26.3-5.2,50.8-24.7,61.6-51.4l2-5l1.5-5.2c1.1-3.3,1.8-7.3,2.4-11.2l0.4-2.9
			l0.2-2.2l0.3-4.3l0.1-1.1v-1.3v-0.3v-0.7l-0.1-2.7l-0.2-5.4c-1.2-14.5-6-28.7-13.6-41.1c-7.6-12.4-18.2-23-30.6-30.6l-4.7-2.8
			c-1.6-0.8-3.3-1.6-4.9-2.4c-3.2-1.7-6.7-2.9-10.1-4.1c-3.4-1.3-7-2-10.5-2.9c-3.7-0.8-8-1.3-11.7-1.7l-4.3-0.2l-2.2-0.1l-2.1-0.1
			h-1.1h-8.7h-17.3c-11.5-0.1-23.1-0.2-34.6-0.5c-4.1-0.1-10.5,3.4-12.6,5.8c-4,4.9,1.2,9,9,12.1c12.9,5.2,27.1,8.9,42.1,11.4
			c7.5,1.3,15.2,2.3,23,3h0.2c0.6,0-0.7,0-0.6,0l0,0l0,0h0.1l0.4,0.1l0.7,0.1l1.5,0.2l2.9,0.4c2.2,0.2,3.4,0.7,4.8,1
			c2.7,0.5,6,1.7,9,2.7c14.7,5.4,26.8,16.6,33.3,30.2c3.3,6.8,5.2,14.1,5.8,21.4c0.6,7.1-0.4,15.8-2.4,21.8
			c-4.1,13.9-13.6,26-25.8,33.5c-6.1,3.8-12.8,6.5-19.9,7.9c-1.8,0.2-3.5,0.8-5.4,0.8l-2.7,0.3c-0.9,0.1-1.7,0.2-3,0.2l-14.4,0.5
			c-9.5-0.4-19-0.7-28.5-1.1c-15.1-0.4-30.2-0.8-45.2-1l-22.6-0.2h-5.7h-2.7h-0.5l-1.4-0.1l-5.5-0.3c-1.1-0.2-2.2-0.4-3.3-0.6
			c-5-1-10.6-2.5-15.5-5c-4.9-2.5-9.6-5.6-13.8-9.3c-4.1-3.8-7.8-8.2-10.9-12.9c-3-4.9-5.3-10.1-7-15.7c-0.4-1.6-0.8-3.2-1.3-4.7
			s-0.7-3.1-1.2-4.5c-1-2.9-1.7-5.7-2.8-8.1c-2-4.8-4.6-8.4-9.2-8.7c-4.1-0.3-8.5,2.3-11.6,8.1c-1.6,2.9-2.8,6.5-3.3,10.7
			c-0.8,4.2-0.6,9,0.1,14.1C193.1,283.05,201.8,300.75,215.6,314.05z"
                                    />
                                    <path
                                        d="M65.7,198.45c6.1-3.8,12.8-6.5,19.9-7.9c1.8-0.2,3.5-0.8,5.4-0.8l2.7-0.2c0.9-0.1,1.7-0.2,3-0.2l14.4-0.5
			c9.5,0.4,19,0.7,28.5,1.1c15.1,0.4,30.2,0.8,45.2,1l22.6,0.2h5.7h2.7h0.5l1.4,0.1l5.5,0.3c1.1,0.2,2.2,0.4,3.3,0.6
			c5,1,10.6,2.5,15.5,5s9.6,5.6,13.8,9.3c4.1,3.8,7.8,8.2,10.9,12.9c3,4.9,5.3,10.1,7,15.7c0.4,1.6,0.8,3.2,1.3,4.7s0.7,3.1,1.2,4.5
			c1,2.9,1.7,5.7,2.8,8.1c2,4.8,4.6,8.4,9.2,8.7c4.1,0.3,8.5-2.3,11.6-8.1c1.6-2.9,2.8-6.5,3.3-10.7c0.8-4.2,0.6-9-0.1-14.1
			c-3-18.2-11.8-36-25.6-49.2c-6.8-6.6-14.7-12.4-23.5-16.4c-2.1-1.2-4.4-1.9-6.7-2.8c-2.2-0.9-4.5-1.7-6.9-2.2
			c-2.4-0.6-4.5-1.3-7.1-1.7s-5.2-0.8-7.8-1.1c-2-0.2-3.3-0.2-5-0.3l-2.4-0.1h-1.2h-2l-9.5,0.1l-19,0.3l-38.1,0.9l-38.1,1.1
			l-9.5,0.3l-4.8,0.1c-1.6,0-3.7,0.2-5.4,0.4c-7.5,0.4-14.8,2.2-21.9,4.4c-26.3,5.2-50.8,24.7-61.6,51.4l-2,5l-1.5,5.2
			c-1.1,3.3-1.8,7.3-2.4,11.2l-0.4,2.9l-0.2,2.2l-0.3,4.3l-0.1,1.1v1.3v0.3v0.7l0.1,2.7l0.2,5.4c1.2,14.5,6,28.7,13.6,41.1
			s18.2,23,30.6,30.6l4.7,2.8c1.6,0.8,3.3,1.6,4.9,2.4c3.2,1.7,6.7,2.9,10.1,4.1c3.4,1.3,7,2,10.5,2.9c3.7,0.8,8,1.3,11.7,1.7
			l4.3,0.2l2.2,0.1l2.1,0.1h1.1h8.7h17.3c11.5,0.1,23.1,0.2,34.6,0.5c4.1,0.1,10.5-3.4,12.6-5.8c4-4.9-1.2-9-9-12.1
			c-12.9-5.2-27.1-8.9-42.1-11.4c-7.5-1.3-15.2-2.3-23-3H95c-0.6,0,0.7,0,0.6,0l0,0l0,0h-0.1l-0.4-0.1l-0.7-0.1l-1.5-0.2l-2.9-0.4
			c-2.2-0.2-3.4-0.7-4.8-1c-2.7-0.5-6-1.7-9-2.7c-14.7-5.4-26.8-16.6-33.3-30.2c-3.3-6.8-5.2-14.1-5.8-21.4
			c-0.6-7.1,0.4-15.8,2.4-21.8C44.1,218.05,53.5,206.05,65.7,198.45z"
                                    />
                                </g>
                            </g>
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                        </svg>
                    </div>
                    <p style="display: inline;">URL</p>
                </span>
            </li>

            <!-- svelte-ignore missing-declaration -->
            <li
                class="addThisClassForPointer {current === 'jsonFormatter'
                    ? 'selected'
                    : ''}"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onJsonFormatter",
                        value: "notusingthisvalue",
                    });
                    current = "jsonFormatter";
                }}
            >
                <span>
                    <!-- <img
                        class="nested-sidebar-icons indent-left"
                        style="vertical-align: middle;"
                        src={jsonIcon}
                        alt="damn"
                    /> -->
                    <div class="nested-sidebar-icons indent-left">
                        <svg
                            stroke="white"
                            fill="white"
                            width="12"
                            height="12"
                            viewBox="-10 -5 1034 1034"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                        >
                            <path
                                d="M278 256q-95 0 -127.5 28t-32.5 113v92q0 57 -20 79t-74 22h-24v55h24q53 0 73.5 22t20.5 80v92q0 84 32.5 112.5t127.5 28.5h25v-55h-27q-54 0 -70 -16.5t-16 -71.5v-95q0 -59 -17.5 -86.5t-59.5 -37.5q42 -10 59.5 -37t17.5 -87v-95q0 -55 16 -71.5t70 -16.5h27v-55
                         h-25zM697 256v55h27q53 0 69.5 16.5t16.5 71.5v95q0 60 17 87t60 37q-42 10 -59.5 37t-17.5 87v95q0 55 -16.5 71.5t-69.5 16.5h-27v55h24q95 0 127 -28.5t32 -112.5l1 -92q-1 -58 20 -80t75 -22h24v-55h-24q-54 0 -75 -22t-20 -79v-92q-1 -85 -33 -113t-127 -28h-24z
                         M617 341q-27 0 -51 14t-37 39q-16 31 -11 64l-1 -2v5q-1 6 -5 13q-5 10 -16 21q-13 13 -35 26q-38 24 -68 24q-14 0 -21 -5v0l2 3l-6 -3q-37 -20 -77 -7.5t-60 49.5t-7.5 77t49.5 60q27 14 57.5 11t53.5 -22l-1 2l5 -3q6 -2 15 -2q12 0 27 4q18 5 41 17q33 18 48 39
                         q10 13 11 26q-1 28 13.5 53.5t40.5 39.5q37 19 77 7t60 -49t7.5 -77.5t-49.5 -59.5q-5 -3 -10 -5h2l-3 -3q-5 -4 -8 -11q-6 -11 -9 -25q-4 -19 -4.5 -44t2.5 -44q3 -15 8 -26q3 -7 8 -12l3 -3h-3q28 -14 43 -43q20 -37 7.5 -77t-49.5 -60q-23 -12 -49 -11zM619 357
                         q27 0 46 17v0q-10 -9 -31 -7t-41 15q6 6 6 14.5t-5.5 15t-14.5 6.5q-3 0 -6 -1h-1q-9 -3 -15 6q-10 19 -11 37t8 29q-19 -21 -18 -51t22 -53q13 -14 29 -21t32 -7zM550 524q7 0 11 2l10 6q9 4 19 7q21 20 23 81q0 36 -8 59q-6 15 -15 23q-14 6 -25 16q-10 3 -25 1
                         q-24 -4 -56 -21q-34 -19 -51 -38q-10 -12 -11 -22q1 -13 -2 -26l1 1v-5q1 -5 5 -12q6 -9 17 -19q13 -13 34 -26q42 -26 70 -27h3zM323 548q27 0 46 17h-1q-10 -9 -30.5 -7t-40.5 15q5 6 5.5 14t-5.5 14.5t-15 7.5q-2 0 -5 -1h-2q-8 -3 -15 6q-9 18 -10 36.5t8 28.5
                         q-20 -20 -19 -50t23 -53q12 -14 28 -21t33 -7zM637 709q27 0 46 17h-1q-10 -9 -30.5 -6.5t-40.5 15.5q5 5 5.5 13.5t-5.5 15t-15 6.5h-5l-2 -1q-8 -2 -15 6q-10 19 -10.5 37t8.5 29q-20 -21 -19 -50.5t23 -53.5q12 -13 28 -20.5t33 -7.5z"
                            />
                        </svg>
                    </div>
                    <p style="display: inline;">JSON</p>
                </span>
            </li>

            <!-- svelte-ignore missing-declaration -->
            <li
                class="addThisClassForPointer {current === 'sqlFormatter'
                    ? 'selected'
                    : ''}"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onSqlFormatter",
                        value: "notusingthisvalue",
                    });
                    current = "sqlFormatter";
                }}
            >
                <span>
                    <!-- <img
                        class="nested-sidebar-icons indent-left"
                        style="vertical-align: middle;"
                        src={sqlIcon}
                        alt="damn"
                    /> -->
                    <div class="nested-sidebar-icons indent-left">
                        <svg
                            stroke="white"
                            fill="white"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12"
                                stroke-width="1.5"
                            />
                            <path
                                d="M5 6V12C5 12 5 15 12 15C19 15 19 12 19 12V6"
                                stroke-width="1.5"
                            />
                            <path
                                d="M12 3C19 3 19 6 19 6C19 6 19 9 12 9C5 9 5 6 5 6C5 6 5 3 12 3Z"
                                stroke-width="1.5"
                            />
                        </svg>
                    </div>
                    <p style="display: inline;">SQL</p>
                </span>
            </li>
            <!-- svelte-ignore missing-declaration -->
            <li
                class="addThisClassForPointer {current === 'xmlFormatter'
                    ? 'selected'
                    : ''}"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onXmlFormatter",
                        value: "notusingthisvalue",
                    });
                    current = "xmlFormatter";
                }}
            >
                <span>
                    <!-- <img
                        class="nested-sidebar-icons indent-left"
                        style="vertical-align: middle;"
                        src={xmlIcon}
                        alt="damn"
                    /> -->
                    <div class="nested-sidebar-icons indent-left">
                        <svg
                            stroke="white"
                            fill="white"
                            width="12"
                            height="12"
                            viewBox="0 -2 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                d="M12.7361611,0.063952038 C13.2551391,0.263360331 13.5227261,0.869148905 13.3338336,1.41701869 L8.54555162,15.3051026 C8.35665911,15.8529724 7.78281676,16.1354563 7.26383885,15.936048 C6.74486095,15.7366397 6.47727387,15.1308511 6.66616638,14.5829813 L11.4544484,0.694897379 C11.6433409,0.147027596 12.2171832,-0.135456255 12.7361611,0.063952038 Z M2.41421356,8.25614867 L5.94974747,11.9885083 C6.34027176,12.4007734 6.34027176,13.0691871 5.94974747,13.4814522 C5.55922318,13.8937173 4.9260582,13.8937173 4.53553391,13.4814522 L0.292893219,9.0026206 C-0.0976310729,8.59035554 -0.0976310729,7.9219418 0.292893219,7.50967674 L4.53553391,3.03084515 C4.9260582,2.61858008 5.55922318,2.61858008 5.94974747,3.03084515 C6.34027176,3.44311021 6.34027176,4.11152395 5.94974747,4.52378901 L2.41421356,8.25614867 Z M17.5857864,8.25614867 L14.0502525,4.52378901 C13.6597282,4.11152395 13.6597282,3.44311021 14.0502525,3.03084515 C14.4407768,2.61858008 15.0739418,2.61858008 15.4644661,3.03084515 L19.7071068,7.50967674 C20.0976311,7.9219418 20.0976311,8.59035554 19.7071068,9.0026206 L15.4644661,13.4814522 C15.0739418,13.8937173 14.4407768,13.8937173 14.0502525,13.4814522 C13.6597282,13.0691871 13.6597282,12.4007734 14.0502525,11.9885083 L17.5857864,8.25614867 Z"
                            /></svg
                        >
                    </div>
                    <p style="display: inline;">XML</p>
                </span>
            </li>

            <!-- svelte-ignore missing-declaration -->
            <li
                class="addThisClassForPointer {current === 'UuidGenerator'
                    ? 'selected'
                    : ''}"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onUuidGenerator",
                        value: "notusingthisvalue",
                    });
                    current = "UuidGenerator";
                }}
            >
                <span>
                    <!-- <img
                        class="nested-sidebar-icons indent-left"
                        style="vertical-align: middle;"
                        src={uuidIcon}
                        alt="damn"
                    /> -->
                    <div class="nested-sidebar-icons indent-left">
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            stroke="white"
                            fill="white"
                            width="12"
                            height="12"
                            viewBox="0 0 512 512"
                            style="enable-background:new 0 0 512 512;"
                            xml:space="preserve"
                        >
                            <g>
                                <g>
                                    <g>
                                        <path
                                            d="M454.613,0H57.387C25.707,0,0,25.707,0,57.387v397.227C0,486.293,25.707,512,57.387,512h397.227
				c31.68,0,57.387-25.707,57.387-57.387V57.387C512,25.707,486.293,0,454.613,0z M490.667,454.613
				c0,19.947-16.107,36.053-36.053,36.053H57.387c-19.947,0-36.053-16.107-36.053-36.053V57.387
				c0-19.947,16.107-36.053,36.053-36.053h397.227c19.947,0,36.053,16.107,36.053,36.053V454.613z"
                                        />
                                        <rect
                                            x="160"
                                            y="148.267"
                                            width="26.667"
                                            height="211.2"
                                        />
                                        <path
                                            d="M350.827,138.667h-26.56v87.467h-0.64c-6.613-12.16-20.8-21.227-40.64-21.227c-33.067,0-61.76,29.013-61.76,80.107
				c0,47.04,25.493,77.013,59.2,77.013c22.08,0,38.4-12.16,45.653-27.093h0.853l1.6,24.533h23.573
				c-0.64-10.027-1.28-25.707-1.28-38.187V138.667z M324.267,298.773c0.107,3.84-0.32,7.573-1.28,11.307
				c-5.333,21.013-20.267,31.04-35.413,31.04c-26.56,0-39.893-25.707-39.893-56.747c0-32.32,14.187-58.24,40.533-58.24
				c18.347,0,31.68,14.08,35.093,31.04c0.64,3.733,0.96,7.467,0.96,11.307V298.773z"
                                        />
                                    </g>
                                </g>
                            </g>
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                        </svg>
                    </div>
                    <p style="display: inline;">UUID</p>
                </span>
            </li>

            <!-- svelte-ignore missing-declaration -->
            <li
                class="addThisClassForPointer {current === 'LoremIpsumGenerator'
                    ? 'selected'
                    : ''}"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onLoremIpsumGenerator",
                        value: "notusingthisvalue",
                    });
                    current = "LoremIpsumGenerator";
                }}
            >
                <span>
                    <!-- <img
                        class="nested-sidebar-icons indent-left"
                        style="vertical-align: middle;"
                        src={loremIpsumIcon}
                        alt="damn"
                    /> -->
                    <div class="nested-sidebar-icons indent-left">
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            stroke="white"
                            fill="white"
                            width="12"
                            height="12"
                            viewBox="0 0 503.6 503.6"
                            style="enable-background:new 0 0 503.6 503.6;"
                            xml:space="preserve"
                        >
                            <g>
                                <g>
                                    <path
                                        d="M473.985,0h-447.6c-2.4,0-2.4,2.4-2.4,4.4V80c0,1.6,0,3.2,1.6,3.6c1.6,0.4,2.8,0,4-0.8l54.8-55.2h136v418.8l-56.4,50.4
			c-1.2,1.2-1.2,2.8-0.8,4.4c0.4,1.6,2.4,2.4,4,2.4h165.6c1.6,0,3.2-1.2,3.6-2.4c0.4-1.6,0.8-3.2-0.4-4.4l-56.4-50V27.6h136.4
			l55.2,55.6c1.2,1.2,3.6,1.6,5.2,0.8c1.6-0.8,3.2-2,3.2-3.6v-76C479.985,2.4,476.385,0,473.985,0z"
                                    />
                                </g>
                            </g>
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                        </svg>
                    </div>
                    <p style="display: inline;">Lorem Ipsum</p>
                </span>
            </li>

            <!-- svelte-ignore missing-declaration -->
            <li
                class="addThisClassForPointer {current === 'TextCaseConverter'
                    ? 'selected'
                    : ''}"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onTextCaseConverter",
                        value: "notusingthisvalue",
                    });
                    current = "TextCaseConverter";
                }}
            >
                <span>
                    <!-- <img
                        class="nested-sidebar-icons indent-left"
                        style="vertical-align: middle;"
                        src={caseConverterIcon}
                        alt="damn"
                    /> -->
                    <div class="nested-sidebar-icons indent-left">
                        <svg
                            stroke="white"
                            fill="white"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                            <!-- Uploaded to SVGRepo https://www.svgrepo.com -->
                            <title>ic_fluent_text_font_24_filled</title>
                            <desc>Created with Sketch.</desc>
                            <g
                                id="🔍-System-Icons"
                                stroke-width="1"
                                fill-rule="evenodd"
                            >
                                <g
                                    id="ic_fluent_text_font_24_filled"
                                    fill-rule="nonzero"
                                >
                                    <path
                                        d="M14.4381,5.89605978 C14.80719,5.89622199 15.142422,6.0991108 15.3158565,6.4176109 L15.3675,6.52794 L20.7106,20.0234 L21.0086,20.0234 C21.5609,20.0234 22.0086,20.4711 22.0086,21.0234 C22.0086,21.53625 21.622573,21.9590385 21.1252239,22.0168203 L21.0086,22.02355 L17.9999,22.0233 C17.4477,22.0233 17,21.5756 17,21.0233 C17,20.51045 17.386027,20.0877908 17.8833761,20.0300275 L18,20.0233 L18.5595,20.0233 L17.7584,17.9999 L11.1058,17.9999 L10.3026,20.0233 L11,20.0233 C11.5523,20.0233 12,20.471 12,21.0233 C12,21.53615 11.613973,21.9588092 11.1166239,22.0165725 L11,22.0233 L8,22.0233 C7.44772,22.0233 7,21.5756 7,21.0233 C7,20.51045 7.38603566,20.0877908 7.8833779,20.0300275 L8,20.0233 L8.15081,20.0233 L13.5082,6.52711 C13.6595,6.14601 14.0281,5.89587 14.4381,5.89605978 Z M14.4365,9.6095 L11.8997,15.9999 L16.9666,15.9999 L14.4365,9.6095 Z M7.00057,2 C7.42107,2 7.79664,2.2631 7.94033,2.65829 L10.822,10.5839 L9.71128,13.382 L9.2088,12 L4.79147,12 L3.93981,14.3418 C3.75105,14.8608 3.17727,15.1285 2.65825,14.9398 C2.13922,14.751 1.87149,14.1772 2.06025,13.6582 L6.06075,2.65822 C6.20447,2.26304 6.58006,2 7.00057,2 Z M7.00041,5.92618 L5.51883,10 L8.48162,10 L7.00041,5.92618 Z"
                                        id="🎨-Color"
                                    />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <p style="display: inline;">Text Case</p>
                </span>
            </li>

            <!-- svelte-ignore missing-declaration -->
            <li
                class="addThisClassForPointer {current === 'TextEscaper'
                    ? 'selected'
                    : ''}"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onTextEscaper",
                        value: "notusingthisvalue",
                    });
                    current = "TextEscaper";
                }}
            >
                <span>
                    <!-- <img
                        class="nested-sidebar-icons indent-left"
                        style="vertical-align: middle;"
                        src={escaperIcon}
                        alt="damn"
                    /> -->
                    <div class="nested-sidebar-icons indent-left">
                        <svg
                            stroke="white"
                            fill="white"
                            width="12"
                            height="12"
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                d="M560 0H208c-35.344 0-64 28.656-64 64v896c0 35.344 28.656 64 64 64h608c35.344 0 64-28.656 64-64V320.016zm256 346.528V352H528V64h5.504zM208 960V64h256v352h352v544H208z"
                            /></svg
                        >
                    </div>
                    <p style="display: inline;">Text Escaper</p>
                </span>
            </li>
        </ul>
    </li>

    <!--  

        NEW secTION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        -->
    <!-- converters item here-->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <li>
        <span
            class="caret {current === 'textConverters' ? 'selected' : ''}"
            class:caret-down={textConvertersBoolean}
            on:click={() => {
                textConvertersBoolean = !textConvertersBoolean;
                current = "textConverters";
            }}
        >
            <!-- <img
                class="sidebar-icons"
                style="vertical-align: middle;"
                src={convertersIcon}
                alt="damn"
            /> -->
            <div class="sidebar-icons">
                <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    stroke="white"
                    fill="white"
                    width="12"
                    height="12"
                    viewBox="0 0 375.633 375.633"
                    style="enable-background:new 0 0 375.633 375.633;"
                    xml:space="preserve"
                >
                    <g>
                        <path
                            d="M375.627,279.726l-78.877,67.608v-45.079h-13.277c-41.919,0-72.786-18.781-98.268-43.648
		c9.828-11.569,18.738-23.214,27.027-34.108c1.904-2.513,3.796-4.993,5.684-7.473c18.852,19.494,39.129,32.645,65.562,32.645h13.277
		v-37.568L375.627,279.726z M0,129.466h39.308c24.927,0,44.377,11.716,62.321,29.371c2.953-3.791,5.939-7.74,8.953-11.683
		c7.337-9.66,15.093-19.831,23.497-29.975c-24.813-23.187-54.75-40.309-94.77-40.309H0V129.466z M296.75,28.299v44.818h-13.277
		c-69.375,0-108.488,51.421-143.004,96.804c-31.046,40.749-57.85,75.989-101.161,75.989H0v52.59h39.308
		c69.386,0,108.498-51.394,143.015-96.766c31.035-40.798,57.844-76.033,101.15-76.033h13.277v37.84l78.883-67.629L296.75,28.299z"
                        />
                    </g>
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                </svg>
            </div>
            Text Converters</span
        >

        <ul class="nested" class:active={textConvertersBoolean}>
            <!-- svelte-ignore missing-declaration -->

            <li
                class="addThisClassForPointer {current === 'text-escaper-inside'
                    ? 'selected'
                    : ''}"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onTextEscaper",
                        value: "valueForOnHelloWorld",
                    });
                    current = "text-escaper-inside";
                }}
            >
                <span>
                    <!-- <img
                        class="nested-sidebar-icons indent-left"
                        style="vertical-align: middle;"
                        src={escaperIcon}
                        alt="damn"
                    /> -->
                    <div class="nested-sidebar-icons indent-left">
                        <svg
                            stroke="white"
                            fill="white"
                            width="12"
                            height="12"
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                d="M560 0H208c-35.344 0-64 28.656-64 64v896c0 35.344 28.656 64 64 64h608c35.344 0 64-28.656 64-64V320.016zm256 346.528V352H528V64h5.504zM208 960V64h256v352h352v544H208z"
                            /></svg
                        >
                    </div>

                    <p style="display: inline;">Text Escaper</p>
                </span>
            </li>
            <!-- svelte-ignore missing-declaration -->
            <li
                class="addThisClassForPointer {current ===
                'text-converter-inside'
                    ? 'selected'
                    : ''}"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onTextCaseConverter",
                        value: "notusingthisvalue",
                    });
                    current = "text-converter-inside";
                }}
            >
                <span>
                    <!-- <img
                        class="nested-sidebar-icons indent-left"
                        style="vertical-align: middle;"
                        src={caseConverterIcon}
                        alt="damn"
                    /> -->
                    <div class="nested-sidebar-icons indent-left">
                        <svg
                            stroke="white"
                            fill="white"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                            <!-- Uploaded to SVGRepo https://www.svgrepo.com -->
                            <title>ic_fluent_text_font_24_filled</title>
                            <desc>Created with Sketch.</desc>
                            <g
                                id="🔍-System-Icons"
                                stroke-width="1"
                                fill-rule="evenodd"
                            >
                                <g
                                    id="ic_fluent_text_font_24_filled"
                                    fill-rule="nonzero"
                                >
                                    <path
                                        d="M14.4381,5.89605978 C14.80719,5.89622199 15.142422,6.0991108 15.3158565,6.4176109 L15.3675,6.52794 L20.7106,20.0234 L21.0086,20.0234 C21.5609,20.0234 22.0086,20.4711 22.0086,21.0234 C22.0086,21.53625 21.622573,21.9590385 21.1252239,22.0168203 L21.0086,22.02355 L17.9999,22.0233 C17.4477,22.0233 17,21.5756 17,21.0233 C17,20.51045 17.386027,20.0877908 17.8833761,20.0300275 L18,20.0233 L18.5595,20.0233 L17.7584,17.9999 L11.1058,17.9999 L10.3026,20.0233 L11,20.0233 C11.5523,20.0233 12,20.471 12,21.0233 C12,21.53615 11.613973,21.9588092 11.1166239,22.0165725 L11,22.0233 L8,22.0233 C7.44772,22.0233 7,21.5756 7,21.0233 C7,20.51045 7.38603566,20.0877908 7.8833779,20.0300275 L8,20.0233 L8.15081,20.0233 L13.5082,6.52711 C13.6595,6.14601 14.0281,5.89587 14.4381,5.89605978 Z M14.4365,9.6095 L11.8997,15.9999 L16.9666,15.9999 L14.4365,9.6095 Z M7.00057,2 C7.42107,2 7.79664,2.2631 7.94033,2.65829 L10.822,10.5839 L9.71128,13.382 L9.2088,12 L4.79147,12 L3.93981,14.3418 C3.75105,14.8608 3.17727,15.1285 2.65825,14.9398 C2.13922,14.751 1.87149,14.1772 2.06025,13.6582 L6.06075,2.65822 C6.20447,2.26304 6.58006,2 7.00057,2 Z M7.00041,5.92618 L5.51883,10 L8.48162,10 L7.00041,5.92618 Z"
                                        id="🎨-Color"
                                    />
                                </g>
                            </g>
                        </svg>
                    </div>

                    <p style="display: inline;">Text Case</p>
                </span>
            </li>
        </ul>
    </li>

    <!--  

        NEW secTION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        -->

    <!-- encoders items here -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <li>
        <span
            class="caret {current === 'encoders' ? 'selected' : ''}"
            class:caret-down={encodersBoolean}
            on:click={() => {
                encodersBoolean = !encodersBoolean;
                current = "encoders";
            }}
        >
            <!-- <img
                class="sidebar-icons"
                style="vertical-align: middle;"
                src={encodersIcon}
                alt="damn"
            /> -->
            <div class="sidebar-icons">
                <svg
                    width="12px"
                    height="12px"
                    stroke="white"
                    fill="white"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                >
                    <rect height="4.5" width="3" y="1.75" x="3.25" />
                    <path d="m9.75 6.25h3m-3-4.5h1.5v4" />
                    <rect height="4.5" width="3" y="9.75" x="9.75" />
                    <path d="m3.25 14.25h3m-3-4.5h1.5v4" />
                </svg>
            </div>
            Encoders</span
        >

        <ul class="nested" class:active={encodersBoolean}>
            <!-- svelte-ignore missing-declaration -->

            <li
                class="addThisClassForPointer {current ===
                'base64-encoder-inside'
                    ? 'selected'
                    : ''}"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onBase64",
                        value: "valueForOnHelloWorld",
                    });
                    current = "base64-encoder-inside";
                }}
            >
                <span>
                    <!-- <img
                        class="nested-sidebar-icons indent-left"
                        style="vertical-align: middle;"
                        src={base64Icon}
                        alt="damn"
                    /> -->
                    <div class="nested-sidebar-icons indent-left">
                        <svg
                            stroke="white"
                            fill="white"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                fill-rule="evenodd"
                                d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6zm5 1a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2zm-8 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H7zm4 0a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6zm-4 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H7zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2z"
                                clip-rule="evenodd"
                            /></svg
                        >
                    </div>
                    <p style="display: inline;">Base64</p>
                </span>
            </li>
            <!-- svelte-ignore missing-declaration -->
            <li
                class="addThisClassForPointer {current === 'html-encoder-inside'
                    ? 'selected'
                    : ''}"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onHTML",
                        value: "notusingthisvalue",
                    });
                    current = "html-encoder-inside";
                }}
            >
                <span>
                    <!-- <img
                        class="nested-sidebar-icons indent-left"
                        style="vertical-align: middle;"
                        src={htmlIcon}
                        alt="damn"
                    /> -->
                    <div class="nested-sidebar-icons indent-left">
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            stroke="white"
                            fill="white"
                            width="12"
                            height="12"
                            viewBox="0 0 299.215 299.215"
                            style="enable-background:new 0 0 299.215 299.215;"
                            xml:space="preserve"
                        >
                            <g id="XMLID_106_">
                                <path
                                    id="XMLID_107_"
                                    d="M22.347,0c-2.75,0-4.799,2.241-4.555,4.98l23.184,260.047c0.244,2.739,2.611,5.582,5.262,6.318
		l98.381,27.316c2.65,0.736,6.986,0.736,9.637,0.002l98.68-27.361c2.65-0.735,5.02-3.578,5.264-6.316L281.422,4.98
		c0.246-2.739-1.805-4.98-4.555-4.98H22.347z M232.049,59.641c-0.219,2.443-0.598,6.684-0.842,9.423l-0.611,6.823
		c-0.246,2.738-0.596,6.654-0.781,8.701c-0.184,2.048-0.359,3.723-0.391,3.723c-0.031,0-2.307,0-5.057,0h-69.76
		c-2.75,0-5.023,0-5.053,0s-2.305,0-5.055,0h-36.74c-2.75,0-4.799,2.241-4.555,4.98l2.143,23.955c0.244,2.738,2.695,4.98,5.445,4.98
		H144.5c2.75,0,5.025,0,5.055,0s2.303,0,5.053,0h57.939c2.75,0,7.006,0,9.457,0c2.449,0,4.273,1.999,4.051,4.442
		c-0.223,2.443-0.604,6.685-0.848,9.423l-6.891,77.228c-0.246,2.739-0.557,6.238-0.691,7.776c-0.137,1.537-2.416,3.396-5.066,4.131
		l-58.133,16.119c-2.65,0.734-4.852,1.342-4.893,1.351c-0.041,0.009-2.242-0.586-4.893-1.321l-58.195-16.148
		c-2.65-0.735-5.018-3.578-5.262-6.317l-3.746-42.045c-0.244-2.739,1.807-4.98,4.557-4.98h5.311c2.75,0,7.25,0,10,0h7.92
		c2.75,0,5.199,2.241,5.445,4.98l1.469,16.459c0.244,2.739,2.615,5.566,5.271,6.283l27.221,7.351
		c2.654,0.717,4.836,1.304,4.848,1.304s2.193-0.588,4.848-1.305l27.27-7.369c2.654-0.717,5.027-3.545,5.273-6.283l2.957-32.976
		c0.246-2.739-1.803-4.98-4.553-4.98h-30.666c-2.75,0-5.023,0-5.053,0s-2.305,0-5.055,0H80.511c-2.75,0-5.199-2.242-5.443-4.98
		l-7.256-81.306c-0.244-2.739-0.623-6.979-0.842-9.423c-0.217-2.443,1.854-4.442,4.604-4.442H144.5c2.75,0,5.025,0,5.055,0
		s2.303,0,5.053,0h72.838C230.195,55.198,232.267,57.197,232.049,59.641z"
                                />
                            </g>
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                        </svg>
                    </div>
                    <p style="display: inline;">HTML</p>
                </span>
            </li>

            <!-- svelte-ignore missing-declaration -->
            <li
                class="addThisClassForPointer {current === 'url-encoder-inside'
                    ? 'selected'
                    : ''}"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onURL",
                        value: "notusingthisvalue",
                    });
                    current = "url-encoder-inside";
                }}
            >
                <span>
                    <!-- <img
                        class="nested-sidebar-icons indent-left"
                        style="vertical-align: middle;"
                        src={urlIcon}
                        alt="damn"
                    /> -->
                    <div class="nested-sidebar-icons indent-left">
                        <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            stroke="white"
                            fill="white"
                            width="12"
                            height="12"
                            viewBox="0 0 493 493"
                            style="enable-background:new 0 0 493 493;"
                            xml:space="preserve"
                        >
                            <g>
                                <g>
                                    <path
                                        d="M215.6,314.05c6.8,6.6,14.7,12.4,23.5,16.4c2.1,1.2,4.4,1.9,6.7,2.8c2.2,0.9,4.5,1.7,6.9,2.2c2.4,0.6,4.5,1.3,7.1,1.7
			c2.6,0.4,5.2,0.8,7.8,1.1c2,0.2,3.3,0.2,4.9,0.3l2.4,0.1h1.2h2l9.5-0.1l19-0.3l38.1-0.9l38.1-1.1l9.5-0.3l4.8-0.1
			c1.6,0,3.7-0.2,5.5-0.4c7.5-0.4,14.8-2.2,21.9-4.4c26.3-5.2,50.8-24.7,61.6-51.4l2-5l1.5-5.2c1.1-3.3,1.8-7.3,2.4-11.2l0.4-2.9
			l0.2-2.2l0.3-4.3l0.1-1.1v-1.3v-0.3v-0.7l-0.1-2.7l-0.2-5.4c-1.2-14.5-6-28.7-13.6-41.1c-7.6-12.4-18.2-23-30.6-30.6l-4.7-2.8
			c-1.6-0.8-3.3-1.6-4.9-2.4c-3.2-1.7-6.7-2.9-10.1-4.1c-3.4-1.3-7-2-10.5-2.9c-3.7-0.8-8-1.3-11.7-1.7l-4.3-0.2l-2.2-0.1l-2.1-0.1
			h-1.1h-8.7h-17.3c-11.5-0.1-23.1-0.2-34.6-0.5c-4.1-0.1-10.5,3.4-12.6,5.8c-4,4.9,1.2,9,9,12.1c12.9,5.2,27.1,8.9,42.1,11.4
			c7.5,1.3,15.2,2.3,23,3h0.2c0.6,0-0.7,0-0.6,0l0,0l0,0h0.1l0.4,0.1l0.7,0.1l1.5,0.2l2.9,0.4c2.2,0.2,3.4,0.7,4.8,1
			c2.7,0.5,6,1.7,9,2.7c14.7,5.4,26.8,16.6,33.3,30.2c3.3,6.8,5.2,14.1,5.8,21.4c0.6,7.1-0.4,15.8-2.4,21.8
			c-4.1,13.9-13.6,26-25.8,33.5c-6.1,3.8-12.8,6.5-19.9,7.9c-1.8,0.2-3.5,0.8-5.4,0.8l-2.7,0.3c-0.9,0.1-1.7,0.2-3,0.2l-14.4,0.5
			c-9.5-0.4-19-0.7-28.5-1.1c-15.1-0.4-30.2-0.8-45.2-1l-22.6-0.2h-5.7h-2.7h-0.5l-1.4-0.1l-5.5-0.3c-1.1-0.2-2.2-0.4-3.3-0.6
			c-5-1-10.6-2.5-15.5-5c-4.9-2.5-9.6-5.6-13.8-9.3c-4.1-3.8-7.8-8.2-10.9-12.9c-3-4.9-5.3-10.1-7-15.7c-0.4-1.6-0.8-3.2-1.3-4.7
			s-0.7-3.1-1.2-4.5c-1-2.9-1.7-5.7-2.8-8.1c-2-4.8-4.6-8.4-9.2-8.7c-4.1-0.3-8.5,2.3-11.6,8.1c-1.6,2.9-2.8,6.5-3.3,10.7
			c-0.8,4.2-0.6,9,0.1,14.1C193.1,283.05,201.8,300.75,215.6,314.05z"
                                    />
                                    <path
                                        d="M65.7,198.45c6.1-3.8,12.8-6.5,19.9-7.9c1.8-0.2,3.5-0.8,5.4-0.8l2.7-0.2c0.9-0.1,1.7-0.2,3-0.2l14.4-0.5
			c9.5,0.4,19,0.7,28.5,1.1c15.1,0.4,30.2,0.8,45.2,1l22.6,0.2h5.7h2.7h0.5l1.4,0.1l5.5,0.3c1.1,0.2,2.2,0.4,3.3,0.6
			c5,1,10.6,2.5,15.5,5s9.6,5.6,13.8,9.3c4.1,3.8,7.8,8.2,10.9,12.9c3,4.9,5.3,10.1,7,15.7c0.4,1.6,0.8,3.2,1.3,4.7s0.7,3.1,1.2,4.5
			c1,2.9,1.7,5.7,2.8,8.1c2,4.8,4.6,8.4,9.2,8.7c4.1,0.3,8.5-2.3,11.6-8.1c1.6-2.9,2.8-6.5,3.3-10.7c0.8-4.2,0.6-9-0.1-14.1
			c-3-18.2-11.8-36-25.6-49.2c-6.8-6.6-14.7-12.4-23.5-16.4c-2.1-1.2-4.4-1.9-6.7-2.8c-2.2-0.9-4.5-1.7-6.9-2.2
			c-2.4-0.6-4.5-1.3-7.1-1.7s-5.2-0.8-7.8-1.1c-2-0.2-3.3-0.2-5-0.3l-2.4-0.1h-1.2h-2l-9.5,0.1l-19,0.3l-38.1,0.9l-38.1,1.1
			l-9.5,0.3l-4.8,0.1c-1.6,0-3.7,0.2-5.4,0.4c-7.5,0.4-14.8,2.2-21.9,4.4c-26.3,5.2-50.8,24.7-61.6,51.4l-2,5l-1.5,5.2
			c-1.1,3.3-1.8,7.3-2.4,11.2l-0.4,2.9l-0.2,2.2l-0.3,4.3l-0.1,1.1v1.3v0.3v0.7l0.1,2.7l0.2,5.4c1.2,14.5,6,28.7,13.6,41.1
			s18.2,23,30.6,30.6l4.7,2.8c1.6,0.8,3.3,1.6,4.9,2.4c3.2,1.7,6.7,2.9,10.1,4.1c3.4,1.3,7,2,10.5,2.9c3.7,0.8,8,1.3,11.7,1.7
			l4.3,0.2l2.2,0.1l2.1,0.1h1.1h8.7h17.3c11.5,0.1,23.1,0.2,34.6,0.5c4.1,0.1,10.5-3.4,12.6-5.8c4-4.9-1.2-9-9-12.1
			c-12.9-5.2-27.1-8.9-42.1-11.4c-7.5-1.3-15.2-2.3-23-3H95c-0.6,0,0.7,0,0.6,0l0,0l0,0h-0.1l-0.4-0.1l-0.7-0.1l-1.5-0.2l-2.9-0.4
			c-2.2-0.2-3.4-0.7-4.8-1c-2.7-0.5-6-1.7-9-2.7c-14.7-5.4-26.8-16.6-33.3-30.2c-3.3-6.8-5.2-14.1-5.8-21.4
			c-0.6-7.1,0.4-15.8,2.4-21.8C44.1,218.05,53.5,206.05,65.7,198.45z"
                                    />
                                </g>
                            </g>
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                        </svg>
                    </div>
                    <p style="display: inline;">URL</p>
                </span>
            </li>
        </ul>
    </li>

    <!--  

        NEW secTION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        -->

    <!-- formatters items here -->

    <li>
        <span
            class="caret {current === 'formatters' ? 'selected' : ''}"
            class:caret-down={formattersBoolean}
            on:click={() => {
                formattersBoolean = !formattersBoolean;
                current = "formatters";
            }}
        >
            <!-- <img
                class="sidebar-icons"
                style="vertical-align: middle;"
                src={formattersIcon}
                alt="damn"
            /> -->
            <div class="sidebar-icons">
                <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    stroke="white"
                    fill="white"
                    width="12"
                    height="12"
                    viewBox="0 0 31.668 31.668"
                    style="enable-background:new 0 0 31.668 31.668;"
                    xml:space="preserve"
                >
                    <g>
                        <path
                            d="M31.501,0v5H0.167V0H31.501L31.501,0z M12.167,13.889h19.334v-5H12.167V13.889z M12.167,22.777h19.334v-5H12.167V22.777z
		 M0.167,31.668h31.334v-5H0.167V31.668z M0.278,22.832l8.723-6.998l-8.723-7V22.832z"
                        />
                    </g>
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                </svg>
            </div>
            Formatters</span
        >

        <ul class="nested" class:active={formattersBoolean}>
            <!-- svelte-ignore missing-declaration -->

            <li
                class="addThisClassForPointer {current ===
                'json-formatter-inside'
                    ? 'selected'
                    : ''}"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onJsonFormatter",
                        value: "valueForOnHelloWorld",
                    });
                    current = "json-formatter-inside";
                }}
            >
                <span>
                    <!-- <img
                        class="nested-sidebar-icons indent-left"
                        style="vertical-align: middle;"
                        src={jsonIcon}
                        alt="damn"
                    /> -->
                    <div class="nested-sidebar-icons indent-left">
                        <svg
                            stroke="white"
                            fill="white"
                            width="12"
                            height="12"
                            viewBox="-10 -5 1034 1034"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                        >
                            <path
                                d="M278 256q-95 0 -127.5 28t-32.5 113v92q0 57 -20 79t-74 22h-24v55h24q53 0 73.5 22t20.5 80v92q0 84 32.5 112.5t127.5 28.5h25v-55h-27q-54 0 -70 -16.5t-16 -71.5v-95q0 -59 -17.5 -86.5t-59.5 -37.5q42 -10 59.5 -37t17.5 -87v-95q0 -55 16 -71.5t70 -16.5h27v-55
                         h-25zM697 256v55h27q53 0 69.5 16.5t16.5 71.5v95q0 60 17 87t60 37q-42 10 -59.5 37t-17.5 87v95q0 55 -16.5 71.5t-69.5 16.5h-27v55h24q95 0 127 -28.5t32 -112.5l1 -92q-1 -58 20 -80t75 -22h24v-55h-24q-54 0 -75 -22t-20 -79v-92q-1 -85 -33 -113t-127 -28h-24z
                         M617 341q-27 0 -51 14t-37 39q-16 31 -11 64l-1 -2v5q-1 6 -5 13q-5 10 -16 21q-13 13 -35 26q-38 24 -68 24q-14 0 -21 -5v0l2 3l-6 -3q-37 -20 -77 -7.5t-60 49.5t-7.5 77t49.5 60q27 14 57.5 11t53.5 -22l-1 2l5 -3q6 -2 15 -2q12 0 27 4q18 5 41 17q33 18 48 39
                         q10 13 11 26q-1 28 13.5 53.5t40.5 39.5q37 19 77 7t60 -49t7.5 -77.5t-49.5 -59.5q-5 -3 -10 -5h2l-3 -3q-5 -4 -8 -11q-6 -11 -9 -25q-4 -19 -4.5 -44t2.5 -44q3 -15 8 -26q3 -7 8 -12l3 -3h-3q28 -14 43 -43q20 -37 7.5 -77t-49.5 -60q-23 -12 -49 -11zM619 357
                         q27 0 46 17v0q-10 -9 -31 -7t-41 15q6 6 6 14.5t-5.5 15t-14.5 6.5q-3 0 -6 -1h-1q-9 -3 -15 6q-10 19 -11 37t8 29q-19 -21 -18 -51t22 -53q13 -14 29 -21t32 -7zM550 524q7 0 11 2l10 6q9 4 19 7q21 20 23 81q0 36 -8 59q-6 15 -15 23q-14 6 -25 16q-10 3 -25 1
                         q-24 -4 -56 -21q-34 -19 -51 -38q-10 -12 -11 -22q1 -13 -2 -26l1 1v-5q1 -5 5 -12q6 -9 17 -19q13 -13 34 -26q42 -26 70 -27h3zM323 548q27 0 46 17h-1q-10 -9 -30.5 -7t-40.5 15q5 6 5.5 14t-5.5 14.5t-15 7.5q-2 0 -5 -1h-2q-8 -3 -15 6q-9 18 -10 36.5t8 28.5
                         q-20 -20 -19 -50t23 -53q12 -14 28 -21t33 -7zM637 709q27 0 46 17h-1q-10 -9 -30.5 -6.5t-40.5 15.5q5 5 5.5 13.5t-5.5 15t-15 6.5h-5l-2 -1q-8 -2 -15 6q-10 19 -10.5 37t8.5 29q-20 -21 -19 -50.5t23 -53.5q12 -13 28 -20.5t33 -7.5z"
                            />
                        </svg>
                    </div>
                    <p style="display: inline;">JSON</p>
                </span>
            </li>
            <!-- svelte-ignore missing-declaration -->
            <li
                class="addThisClassForPointer {current ===
                'sql-formatter-inside'
                    ? 'selected'
                    : ''}"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onSqlFormatter",
                        value: "valueForOnHelloWorld",
                    });
                    current = "sql-formatter-inside";
                }}
            >
                <span>
                    <!-- <img
                        class="nested-sidebar-icons indent-left"
                        style="vertical-align: middle;"
                        src={sqlIcon}
                        alt="damn"
                    /> -->
                    <div class="nested-sidebar-icons indent-left">
                        <svg
                            stroke="white"
                            fill="white"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12"
                                stroke-width="1.5"
                            />
                            <path
                                d="M5 6V12C5 12 5 15 12 15C19 15 19 12 19 12V6"
                                stroke-width="1.5"
                            />
                            <path
                                d="M12 3C19 3 19 6 19 6C19 6 19 9 12 9C5 9 5 6 5 6C5 6 5 3 12 3Z"
                                stroke-width="1.5"
                            />
                        </svg>
                    </div>
                    <p style="display: inline;">SQL</p>
                </span>
            </li>
            <!-- svelte-ignore missing-declaration -->
            <li
                class="addThisClassForPointer {current ===
                'xml-formatter-inside'
                    ? 'selected'
                    : ''}"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onXmlFormatter",
                        value: "valueForOnHelloWorld",
                    });
                    current = "xml-formatter-inside";
                }}
            >
                <span>
                    <!-- <img
                        class="nested-sidebar-icons indent-left"
                        style="vertical-align: middle;"
                        src={xmlIcon}
                        alt="damn"
                    /> -->
                    <div class="nested-sidebar-icons indent-left">
                        <svg
                            stroke="white"
                            fill="white"
                            width="12"
                            height="12"
                            viewBox="0 -2 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                d="M12.7361611,0.063952038 C13.2551391,0.263360331 13.5227261,0.869148905 13.3338336,1.41701869 L8.54555162,15.3051026 C8.35665911,15.8529724 7.78281676,16.1354563 7.26383885,15.936048 C6.74486095,15.7366397 6.47727387,15.1308511 6.66616638,14.5829813 L11.4544484,0.694897379 C11.6433409,0.147027596 12.2171832,-0.135456255 12.7361611,0.063952038 Z M2.41421356,8.25614867 L5.94974747,11.9885083 C6.34027176,12.4007734 6.34027176,13.0691871 5.94974747,13.4814522 C5.55922318,13.8937173 4.9260582,13.8937173 4.53553391,13.4814522 L0.292893219,9.0026206 C-0.0976310729,8.59035554 -0.0976310729,7.9219418 0.292893219,7.50967674 L4.53553391,3.03084515 C4.9260582,2.61858008 5.55922318,2.61858008 5.94974747,3.03084515 C6.34027176,3.44311021 6.34027176,4.11152395 5.94974747,4.52378901 L2.41421356,8.25614867 Z M17.5857864,8.25614867 L14.0502525,4.52378901 C13.6597282,4.11152395 13.6597282,3.44311021 14.0502525,3.03084515 C14.4407768,2.61858008 15.0739418,2.61858008 15.4644661,3.03084515 L19.7071068,7.50967674 C20.0976311,7.9219418 20.0976311,8.59035554 19.7071068,9.0026206 L15.4644661,13.4814522 C15.0739418,13.8937173 14.4407768,13.8937173 14.0502525,13.4814522 C13.6597282,13.0691871 13.6597282,12.4007734 14.0502525,11.9885083 L17.5857864,8.25614867 Z"
                            /></svg
                        >
                    </div>
                    <p style="display: inline;">XML</p>
                </span>
            </li>
        </ul>
    </li>

    <!--  

        NEW secTION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        -->

    <!-- Generators items here -->

    <li>
        <span
            class="caret {current === 'generators' ? 'selected' : ''}"
            class:caret-down={generatorsBoolean}
            on:click={() => {
                generatorsBoolean = !generatorsBoolean;
                current = "generators";
            }}
        >
            <!-- <img
                class="sidebar-icons"
                style="vertical-align: middle;"
                src={generatorsIcon}
                alt="damn"
            /> -->
            <div class="sidebar-icons">
                <svg
                    stroke="white"
                    fill="white"
                    width="12"
                    height="12"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15 8H11.9451L13.9191 3.39392C14.2019 2.73405 13.7179 2 13 2H8C7.59997 2 7.23843 2.2384 7.08086 2.60608L4.08086 9.60608C3.79805 10.2659 4.28208 11 5 11H6.73423L4.07207 17.6273C3.67234 18.6223 4.90667 19.4633 5.68646 18.7272L10.7099 13.9849L15.6501 9.75985C16.3559 9.156 15.9289 8 15 8ZM9.50943 8.60608C9.22663 9.26595 9.71066 10 10.4286 10H12.2929L9.37334 12.4979L7.62514 14.1477L9.14152 10.3727C9.40546 9.71569 8.92168 9 8.21359 9H6.51654L8.6594 4H11.4835L9.50943 8.60608Z"
                    />
                </svg>
            </div>
            Generators</span
        >

        <ul class="nested" class:active={generatorsBoolean}>
            <!-- svelte-ignore missing-declaration -->

            <li
                class="addThisClassForPointer {current ===
                'lorem-ipsum-generator-inside'
                    ? 'selected'
                    : ''}"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onLoremIpsumGenerator",
                        value: "valueForOnHelloWorld",
                    });
                    current = "lorem-ipsum-generator-inside";
                }}
            >
                <span>
                    <!-- <img
                        class="nested-sidebar-icons indent-left"
                        style="vertical-align: middle;"
                        src={loremIpsumIcon}
                        alt="damn"
                    /> -->
                    <div class="nested-sidebar-icons indent-left">
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            stroke="white"
                            fill="white"
                            width="12"
                            height="12"
                            viewBox="0 0 503.6 503.6"
                            style="enable-background:new 0 0 503.6 503.6;"
                            xml:space="preserve"
                        >
                            <g>
                                <g>
                                    <path
                                        d="M473.985,0h-447.6c-2.4,0-2.4,2.4-2.4,4.4V80c0,1.6,0,3.2,1.6,3.6c1.6,0.4,2.8,0,4-0.8l54.8-55.2h136v418.8l-56.4,50.4
			c-1.2,1.2-1.2,2.8-0.8,4.4c0.4,1.6,2.4,2.4,4,2.4h165.6c1.6,0,3.2-1.2,3.6-2.4c0.4-1.6,0.8-3.2-0.4-4.4l-56.4-50V27.6h136.4
			l55.2,55.6c1.2,1.2,3.6,1.6,5.2,0.8c1.6-0.8,3.2-2,3.2-3.6v-76C479.985,2.4,476.385,0,473.985,0z"
                                    />
                                </g>
                            </g>
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                        </svg>
                    </div>
                    <p style="display: inline;">Lorem Ipsum</p>
                </span>
            </li>
            <!-- svelte-ignore missing-declaration -->
            <li
                class="addThisClassForPointer {current ===
                'uuid-generator-inside'
                    ? 'selected'
                    : ''}"
                on:click={() => {
                    tsvscode.postMessage({
                        type: "onUuidGenerator",
                        value: "valueForOnHelloWorld",
                    });
                    current = "uuid-generator-inside";
                }}
            >
                <span>
                    <!-- <img
                        class="nested-sidebar-icons indent-left"
                        style="vertical-align: middle;"
                        src={uuidIcon}
                        alt="damn"
                    /> -->
                    <div class="nested-sidebar-icons indent-left">
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            stroke="white"
                            fill="white"
                            width="12"
                            height="12"
                            viewBox="0 0 512 512"
                            style="enable-background:new 0 0 512 512;"
                            xml:space="preserve"
                        >
                            <g>
                                <g>
                                    <g>
                                        <path
                                            d="M454.613,0H57.387C25.707,0,0,25.707,0,57.387v397.227C0,486.293,25.707,512,57.387,512h397.227
				c31.68,0,57.387-25.707,57.387-57.387V57.387C512,25.707,486.293,0,454.613,0z M490.667,454.613
				c0,19.947-16.107,36.053-36.053,36.053H57.387c-19.947,0-36.053-16.107-36.053-36.053V57.387
				c0-19.947,16.107-36.053,36.053-36.053h397.227c19.947,0,36.053,16.107,36.053,36.053V454.613z"
                                        />
                                        <rect
                                            x="160"
                                            y="148.267"
                                            width="26.667"
                                            height="211.2"
                                        />
                                        <path
                                            d="M350.827,138.667h-26.56v87.467h-0.64c-6.613-12.16-20.8-21.227-40.64-21.227c-33.067,0-61.76,29.013-61.76,80.107
				c0,47.04,25.493,77.013,59.2,77.013c22.08,0,38.4-12.16,45.653-27.093h0.853l1.6,24.533h23.573
				c-0.64-10.027-1.28-25.707-1.28-38.187V138.667z M324.267,298.773c0.107,3.84-0.32,7.573-1.28,11.307
				c-5.333,21.013-20.267,31.04-35.413,31.04c-26.56,0-39.893-25.707-39.893-56.747c0-32.32,14.187-58.24,40.533-58.24
				c18.347,0,31.68,14.08,35.093,31.04c0.64,3.733,0.96,7.467,0.96,11.307V298.773z"
                                        />
                                    </g>
                                </g>
                            </g>
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                        </svg>
                    </div>
                    <p style="display: inline;">UUID</p>
                </span>
            </li>
        </ul>
    </li>
</ul>
<!--  -->

<!-- helmet-pointy -->

<svg
    id="logo"
    class="huge-logo"
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
<!-- <br /><br /> -->
<br /><br />
<!-- remove this form -->

<div class="want-some-margin">
    <form>
        <input
            id="switch-blade"
            readonly
            type="text"
            placeholder="Your Dev Switchblade"
            class="placeholder-whitener"
        />
    </form>

    <!-- svelte-ignore missing-declaration -->
    <!-- <a href="https://github.com/CharithBhat/DevArmory/blob/main/README.md">
        <button id="read-me-button" class="margin-please" on:click={unselectButton}>Read Me</button>
    </a>

    <button id="dummy-button" style="background-color: var(--vscode-sidebar-background);">yo</button> -->

    <!-- svelte-ignore missing-declaration -->
    <!-- <button
        class="margin-please"
        on:click={() => {
            tsvscode.postMessage({
                type: "onError",
                value: "Error message",
            });
        }}>click me for error</button
    > -->

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

    .nested-sidebar-icons {
        padding-right: 10px;
        display: inline;
    }
    .sidebar-icons {
        padding-right: 10px;
        /* padding-bottom: 5px; */
        /* fill: white;
        stroke: white; */
        display: inline;
    }

    .nested > li:hover {
        background-color: #44475a75;
    }

    .huge-logo {
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

    .indent-left {
        margin-left: 64px;
    }

    .selected {
        background-color: #44475a75;
    }

    .placeholder-whitener::placeholder {
        color: white;
        text-align: center;
    }

    p {
        white-space: nowrap;
    }

    span {
        white-space: nowrap;
    }
</style>

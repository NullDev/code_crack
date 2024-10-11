import path from "node:path";
import fs from "node:fs/promises";
import prependFile from "prepend-file";

/* ========================= */
/* = Copyright (c) NullDev = */
/* ========================= */

/**
 * Prepends a header to the generated files
 *
 * @returns {Promise<void>}
 */
const writeHeaderToFiles = async function(){
    const files = await fs.readdir(path.resolve("dist/assets"));
    const matches = files.filter(file => file.endsWith(".js") || file.endsWith(".css"));
    matches.forEach(async file => {
        await prependFile(
            path.resolve("dist/assets", file),
            "/* ========================= */\n/* = Copyright (c) NullDev = */\n/* ========================= */\n",
        );
    });
};

/** @type {import('vite').UserConfig} */
export default {
    build: {
        minify: "terser",
        cssMinify: "lightningcss",
    },
    plugins: [{
        name: "post-build",
        async closeBundle(){
            await writeHeaderToFiles();
        },
    }],
    base: "/code_crack/",
};

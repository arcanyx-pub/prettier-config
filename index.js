module.exports = {
    arrowParens: "avoid",               // `x => x` instead of `(x) => x`
    embeddedLanguageFormatting: "off",  // don't reformat Markdown code blocks
    printWidth: 100,                    // soft-limit of 100 chars per line
    proseWrap: "always",                // wrap long Markdown lines
    tabWidth: 4,                        // indent with 4 spaces

    overrides: [
        {
            // Use 2-space indentation for YAML and Markdown, because our bikes need sheds
            files: ["*.yml", "*.yaml", "*.md"],
            options: {
                tabWidth: 2,
            },
        },
    ],
};

var config = {
    tex2jax: {
        inlineMath: [
            ['$','$'], 
            ['\\(','\\)']
        ]
    },
    chtml: {
        scale: 1,
        matchFontHeight: true,         // true to match ex-height of surrounding font
        mathmlSpacing: true          // true for MathML spacing rules, false for TeX rules
    }
}
MathJax.Hub.Config(config);

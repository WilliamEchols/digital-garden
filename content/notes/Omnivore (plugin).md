---
title: "Omnivore (plugin)"
date: "2023-08-17"
tags:
---

Manual and automatic sync from the "read me later" app [[notes/Omnivore|Omnivore]] in a customizable template.

Current template as of 08-12-2023:
```
# {{{title}}}
#Omnivore

[Read on Omnivore]({{{omnivoreUrl}}})
[Read Original]({{{originalUrl}}})

# State
#Omnivore/{{#lowerCase}}{{state}}{{/lowerCase}}

# Content
{{{ content }}}

{{#highlights.length}}
## Highlights

{{#highlights}}
> {{{text}}} [⤴️]({{{highlightUrl}}}) {{#labels}} #{{name}} {{/labels}} ^{{{highlightID}}}
{{#note}}

{{{note}}}
{{/note}}

{{/highlights}}
{{/highlights.length}}
```

---
title: "Templater (plugin)"
date: "2023-08-17"
tags:
- plugin
---

Powerful tool to organize and create from multiple templates including dynamic scripts for variables, dates, etc. Use "Templater: create new note from template" in command palette (CMD/CTRL + P)

Automatically connect daily notes (assuming MM-DD-YYYY daily notes format and daily notes stored in Journal/)
````
<< [[Journal/<% tp.date.now("MM-DD-YYYY", -1, tp.file.title, "MM-DD-YYYY") %>]] | [[Journal/<% tp.date.now("MM-DD-YYYY", 1, tp.file.title, "MM-DD-YYYY") %>]] >>
````

Example pop-up question
```
<% tp.system.suggester(["Not Started", "In Progress", "Completed"], ["#status/NotStarted", "#status/InProgress", "#status/Completed"])%>
```

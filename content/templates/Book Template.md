---
tag: 📚Book
title: "{{title}}"
author: [{{author}}]
publisher: {{publisher}}
publish: {{publishDate}}
total: {{totalPage}}
isbn: {{isbn10}} {{isbn13}}
cover: {{coverUrl}}
status: unread
created: {{DATE:YYYY-MM-DD HH:mm:ss}}
updated: {{DATE:YYYY-MM-DD HH:mm:ss}}
finished: 
date: "<% tp.date.now("YYYY-MM-DD") %>"
tags:
- book
---

![cover|150]({{coverUrl}})

# {{title}}
[[private/Publish/Bookshelf]]

# Notes



# Highlights
```dataview  
list
where contains(file.outlinks,this.file.link)
where contains(file.path, "Publish/Book Notes")
sort default(percent, "") ASC
```
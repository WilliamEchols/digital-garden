---
title: "Dataview (plugin)"
date: "2023-08-17"
tags:
- plugin
---

Custom scripts to sort and display notes in a clean format

All books with a status "reading", including a cover image
````
```dataview
TABLE WITHOUT ID
	"!\[|100\](" + cover + ")" as Cover,
	link(file.link, title) as Title,
	author[0] as Author,
	total as Pages,
	join(list(publisher, publish)) as Publisher
FROM #📚Book
WHERE !contains(file.path, "Templates")
WHERE contains(status, "reading")
SORT status DESC, file.ctime ASC
```
````

Recent note changes
````
```dataview
TABLE
dateformat(file.mtime, "dd.MM.yyyy - HH:mm") AS "Last modified" FROM ""
SORT file.mtime DESC
LIMIT 5
```
````

---
title: "Currently Reading"
date: "2023-08-17"
tags:
---

```dataview
TABLE WITHOUT ID
	"![|100](" + cover + ")" as Cover,
	link(file.link, title) as Title,
	author[0] as Author,
	total as Pages,
	join(list(publisher, publish)) as Publisher
FROM #📚Book
WHERE !contains(file.path, "Templates")
WHERE contains(status, "reading")
SORT status DESC, file.ctime ASC
```

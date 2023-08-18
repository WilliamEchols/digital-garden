---
cssclass: dashboard
banner: "![[still_life_with_books_jan_lievens.png]]"
banner_x: 0
banner_y: 0.712
banner_lock: True
title: "Bookshelf"
date: "2023-08-17"
tags:
---

# 📚 My Bookshelf

Note that some books here may be a different version than the books I have read

## Reading

![[notes/Currently Reading|Currently Reading]]

## Unread

```dataview
TABLE WITHOUT ID
	"![|100](" + cover + ")" as Cover,
	link(file.link, title) as Title,
	author[0] as Author,
	total as Pages,
	join(list(publisher, publish)) as Publisher
FROM #📚Book
WHERE !contains(file.path, "Templates")
WHERE contains(status, "unread")
SORT status DESC, file.ctime ASC
```

## All books

```dataview
TABLE WITHOUT ID
	"![|60](" + cover + ")" as Cover,
	link(file.link, title) as Title,
	author[0] as Author,
	total as Pages,
	join(list(publisher, publish)) as Publisher,
	status as Status
FROM #📚Book
WHERE !contains(file.path, "Templates")
SORT status ASC, file.ctime ASC
```
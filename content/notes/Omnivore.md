---
title: "Omnivore"
date: "2023-08-17"
tags:
---

Plugin: [[notes/Omnivore/2023-08-11/Omnivore - Chrome Web Store|Omnivore - Chrome Web Store]]

## With date_published
```dataview
table
	list(file.name, url) as "article", list(date_published, author, hl) as "info & excerpts"
from #Omnivore 
where date_published 
sort date_published desc, date_saved desc
```

## Without date_published
```dataview
table
	list(file.name, url) as "article", list(date_published, author, hl) as "info & excerpts"
from #Omnivore 
where date_published = null
sort date_published desc, date_saved desc
```

---
id: EFE597DA-5495-4211-AA25-543B9091ECF5
---

# Omnivore + Obsidian — risibledog
#Omnivore

[Read on Omnivore](https://omnivore.app/me/https-infosec-press-risibledog-omnivore-obsidian-189e61950c3)
[Read Original](https://infosec.press/risibledog/omnivore-obsidian)

# State
#Omnivore/completed

# Content
![](https://proxy-prod.omnivore-image-cache.app/0x0,sErWfqAfLr6KvGBAkL9RtiGAbg9S_BfDJwWA97nKhwd0/https://media.infosec.town/media/e61d4ca4-09e8-4b4b-a5d5-3c431cdf9ad5.png)

Recently I've been finding the combination of [obsidian](https://obsidian.md/) & the [omnivore](https://omnivore.app/) [plugin](https://github.com/omnivore-app/obsidian-omnivore) to be quite a useful way of maintaining a database of info from articles (etc)!

Once you've got the [plugin](https://github.com/omnivore-app/obsidian-omnivore) installed in your vault (you can also find it in Obsidian's “[Community plugins](https://help.obsidian.md/Extending+Obsidian/Community+plugins)” browser), you can edit the Article Template as you see fit.

I'm sure there are smoother ways of setting this up, but my template currently looks like this:

```handlebars
#Omnivore 
# {{{title}}}

[Read on Omnivore]({{{omnivoreUrl}}})
url:: [link]({{{originalUrl}}})

{{#highlights.length}}
<!--
## Highlights

{{#highlights}}
- hl:: >{{{text}}} {{#note}}^[*{{{note}}}*]{{/note}}
 {{#labels}} #{{name}} {{/labels}} 

{{/highlights}}
-->
{{/highlights.length}}

---
{{{content}}}

```

I have found that it works great with the [dataview plugin](https://github.com/blacksmithgu/obsidian-dataview). I make a new markdown file to serve as an index using this code block:

```applescript
```dataview
table without id
	list(file.name, url) as "article", list(date_published, author, hl) as "info & excerpts"
from #Omnivore 
where date_published 
sort date_published desc, date_saved desc
```

```

This creates a table with a list of the articles sorted in reverse chronological order (ie. the most recent one is at the top), and includes any excerpts which you have highlighted in Omnivore.

It ends up looking like this:

![](https://proxy-prod.omnivore-image-cache.app/0x0,sFhM75rcUW6JSI1ss6AjBldDB-jwP10uiy59aDcbC35o/https://media.infosec.town/media/153d6e57-3c14-4447-9c25-10702dcb0a71.png)

I also edited the Article Template above so that any annotations I add to a highlight can be displayed as a footnote beneath the excerpt, like this:

![](https://proxy-prod.omnivore-image-cache.app/0x0,sT_fjBWmyCAMyjnAv0P4GWFbkyk-bsib_BaCVkq7FVHs/https://media.infosec.town/media/2c9549d0-eecc-4763-a6bc-863e21c62cb7.png)

Some of the articles you save will inevitably not have properly formatted `date_published` info — those are currently excluded from the above code block. I put another code block beneath that one which looks like this:

```applescript
```dataview
table without id
	list(file.name, url) as "article", list(date_published, author, hl) as "info & excerpts"
from #Omnivore 
where date_published = null
sort date_published desc, date_saved desc
```

```

Omnivore also has an “edit info” option for each article saved, so if you'd like to move an article without `date_published` info into its proper spot in the table which is sorted by date, you can open it in a browser and edit the article's date info. (This date-editing option currently appears to only be available in a web browser, not on the mobile app.)

You can also make more specialized lists of this sort by using Omnivore's “tags” feature editing the line so it reads `from #Omnivore and #[NewTag]` – I have also found that Omnivore supports the use of [nested tags](https://help.obsidian.md/Editing+and+formatting/Tags#Nested+tags), which can help narrow or broaden the specificity of various index tables :)

---

P.S. – if you want quick & easy access to the markdown articles via these index files, just remove the snippet of text which says `without id` from the code block. That will create an extra column which is a direct link to the markdown file, like this:

![](https://proxy-prod.omnivore-image-cache.app/0x0,sAfUMy-4yHwxYjz9JBfGF7_YX0c1cF4sBJhzvRc-3FaA/https://media.infosec.town/media/70afa052-2fed-4951-a26e-fc3d0012bde2.png)


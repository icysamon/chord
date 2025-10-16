# Chord
A simple Music Hugo Theme.

## Overview
[Here is a demo website.](https://bgm.icysamon.com/)

## Features
- Light/Dark theme.
- Custom license.
- Taxonomies.
- Multiple Author support. (Future)
- More... (Future)

## Install
Before you begin this tutorial you must install the [Hugo](https://gohugo.io/getting-started/quick-start/).

Create your new Hugo site:
```
hugo new site chord
```
You can change `chord` to your site name.

Inside the folder of your Hugo site, then run:
```
git submodule add https://github.com/icysamon/chord themes/chord
```

Set your site theme:
```
echo "theme = 'chord'" >> hugo.toml
```

If your site have used another theme before, you should change in `config.toml`:
```
theme = "chord"
```

Start Hugo’s development server to view the site.
```
hugo server
```


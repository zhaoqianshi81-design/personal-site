# 石照乾个人静态网站

这是一个 HTML + CSS + JavaScript 制作的静态个人网站第一版。

## 如何本地查看

1. 解压 zip 文件。
2. 双击 `index.html` 即可打开首页。
3. 如果电影、书籍等页面数据没有正常显示，可以用 VS Code 的 Live Server 插件打开，或部署到 GitHub Pages。

## 如何更新内容

主要修改 `data.json`：

- `movies`：电影记录
- `books`：书籍记录
- `notes`：学习笔记
- `life`：生活记录

## 如何添加图片

1. 把图片放进 `assets` 文件夹。
2. 在 `data.json` 中添加图片路径，例如：

```json
"cover": "assets/movie-cover.jpg"
```

或者：

```json
"image": "assets/life-photo.jpg"
```

## 如何部署

可以上传到 GitHub Pages、Vercel 或 Netlify。

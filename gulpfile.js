const { src, task, dest, watch, series } = require("gulp");
const frontMatter = require("front-matter");
const startCase = require("lodash/startCase");
const transform = require("gulp-transform");
const rename = require("gulp-rename");
const del = require("del");
const fs = require("fs");
const { promisify } = require("util");
const readDir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const path = require("path");

task("manifest", async () => {
  const contentDir = path.join(__dirname, "content");
  const posts = await readDir(contentDir);

  const manifest = await Promise.all(
    posts.map(async postFile => {
      const rawContent = await readFile(
        path.join(contentDir, postFile),
        "utf8"
      );
      const postContent = frontMatter(rawContent);
      const postFileName = postFile.split(".")[0];

      const { description } = Object.assign(
        {},
        ...postContent.attributes.head.meta.map(s => ({ [s.name]: s.content }))
      );

      const { title } = postContent.attributes.head;
      const { date, image } = postContent.attributes;
      const route = `/blog/posts/${postFileName}`;

      return { description, title, image, date, route };
    })
  );

  const manifestPath = path.join(__dirname, "static", "blogManifest.json");

  await writeFile(
    manifestPath,
    JSON.stringify(
      manifest.sort((a, b) => new Date(b.date) - new Date(a.date)),
      null,
      2
    )
  );
});

task("markdownToVue", () => {
  return src("./content/*.md")
    .pipe(
      transform("utf8", (content, file) => {
        return `<template>
  <blog-post :post="post"/>
</template>
<script>
  import post from "~/content/${file.stem}.md"
  import BlogPost from "~/components/blog/BlogPost.vue";
  export default {
    head: { ...post.attributes.head },
    data() {
      return { post };
    },
    components: { BlogPost }
  };
</script>`;
      })
    )
    .pipe(rename({ extname: ".vue" }))
    .pipe(dest("./pages/blog/posts"));
});

task("post", async () => {
  const fileName = process.argv[4] || "new_post";
  const newPostContent = `---
head:
  title: ${startCase(fileName)}
  meta:
    - content: <description>
      name: description
    - name: author
      content: Darrius Wright
    - name: keywords
      content: <keywords>
image: /assets/posts/<image>
date: ${new Date().toUTCString()}
---`;

  await writeFile(`./content/${fileName}.md`, newPostContent);
});

task("clean", () => del(["./pages/blog/posts", "./static/blogManifest.json"]));

task("default", series(task("clean"), task("manifest"), task("markdownToVue")));

task(
  "watch",
  series(task("default"), () => watch("./content/*.md", task("default")))
);

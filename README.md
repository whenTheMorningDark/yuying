前言
GitHub Pages 是一个免费的静态站点托管服务，可以直接从 GitHub 仓库中发布网站。结合 VitePress，开发者可以快速构建并部署高性能的文档网站。本教程将指导你如何将一个已经搭建好的 VitePress 项目部署到 GitHub Pages 上。
目标
通过本教程，你将学会以下内容：
🚀 如何构建 VitePress 项目的静态文件。
📝 如何编写一个自动化的部署脚本。
🗂️ 如何将构建后的静态文件推送到 GitHub 仓库的 gh-pages 分支。
🌐 如何配置 GitHub Pages 以托管你的 VitePress 网站。
🔄 如何确保你的文档网站能够持续更新和发布。
先决条件
📋在开始之前，请确保你已经完成以下准备工作：
1. 一个已经搭建好的 VitePress 项目。
2. 已安装 Git 并配置好 GitHub 账号。
3. 一个 GitHub 仓库用于托管你的项目。
构建静态文件
首先，在你的 VitePress 项目目录中构建静态文件：
npm run docs:build
# 或者使用 yarn
# yarn docs:build
构建完成后，静态文件将位于 docs/.vitepress/dist 目录中。
创建部署脚本
在项目根目录下创建一个.github/workflows/deploy.yml 脚本文件，用于将构建后的静态文件推送到 GitHub Pages：
deploy.yml
name: Deploy
on:
  # workflow_dispatch: {}
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      # pages: write
      # id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: 安装pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - uses: actions/setup-node@v3
        with:
          cache: pnpm

      - name: 安装 node 依赖
        run: pnpm i --frozen-lockfile

      - name: Build
        run: pnpm docs:build

      - name: Deploy to GitHub Pages 🚀
        uses: JamesIves/github-pages-deploy-action@v4.4.2
        with:
          folder: docs/.vitepress/dist # The folder the action should deploy.
          # branch: master
          # token: ${{ secrets.DEPLOY }}
      # - uses: actions/configure-pages@master
      # - uses: actions/upload-pages-artifact@v1
      #   with:
      #     path: .vitepress/dist
      # - name: Deploy
      #   id: deployment
      #   uses: actions/deploy-pages@v1

修改基础路径
默认情况下，我们假设站点将部署在域名 (/) 的根路径上。如果站点在子路径中提供服务，例如 https://mywebsite.com/blog/，则需要在 VitePress 配置中将 base 选项设置为 '/blog/'。
例：如果你使用的是 Github（或 GitLab）页面并部署到 user.github.io/repo/，请将 base 设置为 /repo/。

注意：路径不正确会出现404，或者静态资源不加载的问题。
启用 GitHub Pages
1. 打开你的 GitHub 仓库页面。
2. 进入 Settings 选项卡。
3. 滚动到 Pages 部分。
4. 在 Source 下拉菜单中选择 gh-pages 分支。
5. 点击 Save 按钮。
几秒钟后，你的 VitePress 网站就会在 https://<USERNAME>.github.io/<REPO> 上可访问了

结论
通过这些步骤，你已经成功地将一个 VitePress 项目部署到 GitHub Pages。现在，你可以随时更新你的文档，只需要重新运行 deploy.sh 脚本即可将最新的更改发布到

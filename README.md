# 学习 Node.js

*学习视频链接：[尚硅谷 Node.js](https://www.bilibili.com/video/BV1gM411W7ex/)*

@ [TOC]

## 一、入门

### 1. Node.js 编码注意事项

- Node.js 中不能使用 BOM 和 DOM 的 API
- Node.js 中的顶级对象不是 window，是 global，或 globalThis（ES2020 支持）
- global === globalThis // true
- Node.js 和浏览器相同的 API：console、定时器

浏览器中的 JavaScript

![](./images/%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%AD%E7%9A%84JavaScript.png)

Node.js 中的 JavaScript

![](./images/Node.js%E4%B8%AD%E7%9A%84JavaScript.png)

### 2. Buffer

- 概念：Buffer 中文译为缓冲区，是一个类似于 Array 的对象，用于标识固定长度的字节序列，换句话说，Buffer 就是一段固定长度的内存空间，用于处理二进制数据
- 特点：
  - Buffer 大小固定且无法调整
  - Buffer 性能较好，可以直接对计算机内存进行操作
  - 每个元素的大小是 1 字节（byte）
- 使用：
  - 创建 Buffer：alloc、allocUnsafe、from
  - Buffer 与字符串的转换：toString()
  - Buffer 的读写

### 3. 进程与线程

线程是一个进程中执行的一个执行流，一个线程是属于某个进程的
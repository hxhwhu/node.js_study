// 创建 Buffer
const buf = Buffer.alloc(10);
console.log(buf);
const buf_unsafe = Buffer.allocUnsafe(10);
console.log(buf_unsafe);
const buf_from_str = Buffer.from('Hello');
console.log(buf_from_str);

// Buffer 与字符串的转换
console.log(buf_from_str.toString());
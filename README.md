# ts-learning
ts的学习

## 一些常见的报错
1. 如果提示找不到一些js中常见的方法，对象。那么可能需要引入一些库。比如，找不到window，那么可能需要引入`dom`库。

```javascript
{
  "compilerOptions": {
    "lib": ["es6","dom"], 
  }
}
```
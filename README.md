# gallery
动态展示图片基本js操作

[demo-js图片库](http://www.crazyqiqi.top/project/)

## 实现功能
1. 用户点击图片，指定的图片在占位符展示，并在右侧伴有文字说明

## 优化
1. 平稳退化--用户禁用 js，动态功能禁用，但依然能够正常浏览图片<br>
**当js被禁用时，以下链接都会失效**
```html
<li>
    <a href="javascript:func(''); return false" title="image1">图片1</a>
</li>
<li>
    <a href="#" onclick="func(''); return false" title="image1">图片1</a>
</li>
```

2. 向后兼容--用户使用无法理解DOM的低版本的浏览器，依然能够正常浏览图片
```javascript
window.onload = function() {
    if (!document.getElementById) return false // 浏览器是否理解这个DOM方法
    if (!document.getElementsByTagName) return false
    if (!document.getElementById('galleryImage')) return false // 预防性措施，如果该节点不存在，则结束函数
}
```

3. js和HTML分离--标记分离，js摆脱对元素的依赖<br>
**通过js操作获取节点**
```javascript
var links = gallery.getElementsByTagName('a')
for(var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
        return !showPic(this)
    }
}
```

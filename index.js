addLoadEvent(prepareGallery())

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
      }
    }
}

// js和HTML分离
function prepareGallery() {
	if (!document.getElementById) return false // 浏览器是否理解这个DOM方法
	if (!document.getElementsByTagName) return false
	if (!document.getElementById('galleryImage')) return false // 预防性措施，如果该节点不存在，则结束函数
	var gallery = document.getElementById('galleryImage')
	var links = gallery.getElementsByTagName('a')
	for(var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			return !showPic(this)
		}
	}
}

// 展示图片函数
function showPic(whichPic) {
	if(!document.getElementById('placeholder')) return false
	// 获取图片路径
	var src = whichPic.getAttribute('href')
	// 获取占位符路径属性
	var placeholder = document.getElementById('placeholder')
	// 修改占位符路径
	placeholder.setAttribute('src', src)
	if(document.getElementById('description')) {
		// 修改说明文本
		if(whichPic.getAttribute('title')) {
			var text = whichPic.getAttribute('title')	
		} else {
			var text = ''
		}
		var p = document.getElementById('description')
		p.firstChild.nodeValue = text
	}
	return true
}
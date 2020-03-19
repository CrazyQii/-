function showPic(whichPic) {
	// 获取图片路径
	var src = whichPic.getAttribute('href')
	// 获取占位符路径属性
	var placeholder = document.getElementById('placeholder')
	// 修改占位符路径
	placeholder.setAttribute('src', src)

	// 修改说明文本
	var text = whichPic.getAttribute('title')
	var p = document.getElementById('description')
	p.firstChild.nodeValue = text
	
}
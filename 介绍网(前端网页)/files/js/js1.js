const messages = [
	{
		name: "简敏宇",
		email: "2831722842@qq.com",
		text: "已经入手了自己的键盘[顶]",
		time: '2023/4/7'
	},
	{
		name: "李四",
		email: "Esd@sd.163.com",
		text: "非常棒",
		time: '2023/4/22'
	}
]
// localStorage.setItem('data', JSON.stringify(messages))
const arr = JSON.parse(localStorage.getItem('data'))
function addNewData() {
	const btn = document.querySelector('.body>.container>.one>div>button')
	btn.addEventListener('click', function () {
		let name = document.querySelector('.uname').value
		let email = document.querySelector('.email').value
		let nr = document.querySelector('.nr').value
		if (!name || !email || !nr) {
			return alert("输入内容不能为空")
		}
		arr.push({
			name: name,
			email: email,
			text: nr,
			time: new Date().toLocaleString()
		})
		document.querySelector('.uname').value = ''
		document.querySelector('.email').value = ''
		document.querySelector('.nr').value = ''
		render()
		localStorage.setItem('data', JSON.stringify(arr))
	})
	const commentsDiv = document.querySelector('.two')
	commentsDiv.addEventListener('click', function (e) {
		if (e.target.tagName === 'A') {
			arr.splice(e.target.dataset.id, 1)
		}
		render()
		localStorage.setItem('data', JSON.stringify(arr))
	})
}
function render() {
	const commentsDiv = document.querySelector('.two')
	const trArr = arr.map(function (ele, index) {
		return `
		<li>
			<div class="id">昵称：<span>${ele.name}</span></div>
			<div class="title">邮箱：<span>${ele.email}</span></div>
			<div class="texts">评论：<span>${ele.text}</span></div>
			<div class="time">时间：<span>${ele.time}</span></div>
			<div>
			<a href="javascript:" data-id="${index}" style="color: #0b9682">
			<i class="iconfont" icon-shanchu></i>
			删除
			</a>
			</div>
		</li>
		`
	})
	commentsDiv.innerHTML = trArr.join('')
}
window.onload = function () {
	const sk = document.querySelector('.sk')
	const head = document.querySelector('.head')
	window.addEventListener('scroll', function () {
		const n = this.document.documentElement.scrollTop
		if (n >= sk.offsetTop) {
			head.style.top = 0
		}
	})
	$(function () {
		var indexy = true;
		$(".header-top-three-ul").click(function () {
			if (indexy == true) {
				indexy = false;
				$(".header-top-three-ul>li").css("border", "1px solid #008cff");
				$(".header-top-four").stop(true, true).slideDown(100);
			} else {
				indexy = true;
				$(".header-top-three-ul>li").css("border", "1px solid #8A8A8A");
				$(".header-top-four").stop(true, true).slideUp(100);
			}
		});
		// 轮播图开始
		var imgs = document.getElementById("ul1").children;//获取轮播图片集合
		var botton = document.getElementById("ul2").children;//获取指定轮播小按钮
		var left = document.getElementById("left-botton");//获取左切换按钮
		var right = document.getElementById("right-botton");//获取右切换按钮
		var index = 0;//当前轮播到图片下标（做标记用的）
		var dingshiqi;//存储定时器变量
		congqi();//启动自动轮播
		//自动轮播方法
		function congqi() {
			dingshiqi = setInterval(function () {//为定时器变量赋值
				index++;//自动轮播切换时更新下标
				if (index == imgs.length) {//判断是否已经轮播到最后一张图片
					index = 0;//当已经轮播到最后一张图片是把下标更新到第一张
				}
				for (let ii = 0; ii < imgs.length; ii++) {//轮播时先循环变量所有图片
					imgs[ii].style.cssText = "z-index:0;"//让所有图片显示级别调低
					botton[ii].style.cssText = "background-color:#fff;color:#16c4af;";//让所有按钮变成灰色
					// span.style.cssText += data[ii]
				}
				imgs[index].style.cssText = "z-index:100;";//让当前下标下图片集合位置相等的图片显示级别调高，既可以实现轮播
				botton[index].style.cssText = "background-color:#16c4af;color:#fff;";//让当前下标下按钮集合位置相等的按钮变成选中状态（背景颜色为白色）
			}, 3000);//定时器的第二个参数，周期，1000为一秒，没3秒自动轮播一次
		}
		left.onclick = function () {//为做按钮添加点击事件
			clearInterval(dingshiqi);//在手动进行切换时先停止自动轮播（清除自动轮播定时器）
			index--;//更新下标
			if (index < 0) {//判断下标是否小于0
				index = imgs.length - 1;//如果下标小于0，则让下标等于集合里最后一张图片的下标
			}
			//底下原理同上
			for (let i = 0; i < imgs.length; i++) {
				imgs[i].style.cssText = "z-index:0;";
				botton[i].style.cssText = "background-color:#fff;color:#16c4af;";
			}
			imgs[index].style.cssText = "z-index:100;";
			botton[index].style.cssText = "background-color:#16c4af;color:#fff;";
			congqi();
		}
		right.onclick = function () {
			clearInterval(dingshiqi);
			index++;
			if (index == imgs.length) {
				index = 0;
			}
			for (let i = 0; i < imgs.length; i++) {
				imgs[i].style.cssText = "z-index:0;";
				botton[i].style.cssText = "background-color:#fff;color:#16c4af;";
			}
			imgs[index].style.cssText = "z-index:100;";
			botton[index].style.cssText = "background-color:#16c4af;color:#fff;";
			congqi();
		}
		for (let i = 0; i < 5; i++) {
			botton[i].onclick = function () {//为第i个小按钮添加切换事件
				clearInterval(dingshiqi);
				index = i;
				for (var j = 0; j < imgs.length; j++) {
					imgs[j].style.cssText = "z-index:0;";
					botton[j].style.cssText = "background-color:#fff;color:#16c4af;";
				}
				imgs[index].style.cssText = "z-index:100;";
				botton[i].style.cssText = "background-color:#16c4af;color:#fff;";
				congqi();
			}
		}
	})
	// 侧边栏
	const left1 = document.querySelector('.nav>.left1')
	console.log(left1);
	window.addEventListener('scroll', function () {
		// console.log("我滚了");
		const n = document.documentElement.scrollTop
		// console.log(left1.style.top);
		if (n >= 650) {
			left1.style.top = '100px'
		} else {
			left1.style.top = '-400px'
		}
	})
	//回到顶部
	const top = document.querySelector('.top')
	top.addEventListener('click', function () {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	})
}

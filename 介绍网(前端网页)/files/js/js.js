
window.onload = function() {
	$(function() {
		var indexy = true;
		$(".header-top-three-ul").click(function() {
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
			dingshiqi = setInterval(function() {//为定时器变量赋值
				index++;//自动轮播切换时更新下标
				if (index == imgs.length) {//判断是否已经轮播到最后一张图片
					index = 0;//当已经轮播到最后一张图片是把下标更新到第一张
				}
				for (var i = 0; i < imgs.length; i++) {//轮播时先循环变量所有图片
					imgs[i].style.cssText = "z-index:0;";//让所有图片显示级别调低
					botton[i].style.cssText = "background-color:#fff;color:rgb(0,140,255);";//让所有按钮变成灰色
				}
				imgs[index].style.cssText = "z-index:100;";//让当前下标下图片集合位置相等的图片显示级别调高，既可以实现轮播
				botton[index].style.cssText = "background-color:rgb(0,140,255);color:#fff;";//让当前下标下按钮集合位置相等的按钮变成选中状态（背景颜色为白色）
			}, 4000);//定时器的第二个参数，周期，1000为一秒，这里指的是没4秒自动轮播一次
		}
		left.onclick = function() {//为做按钮添加点击事件
			clearInterval(dingshiqi);//在手动进行切换时先停止自动轮播（清除自动轮播定时器）
			index--;//更新下标
			if (index < 0) {//判断下标是否小于0
				index = imgs.length - 1;//如果下标小于0，则让下标等于集合里最后一张图片的下标
			}
			
			//底下原理同上
			
			for (var i = 0; i < imgs.length; i++) {
				imgs[i].style.cssText = "z-index:0;";
				botton[i].style.cssText = "background-color:#fff;color:rgb(0,140,255);";
			}
			imgs[index].style.cssText = "z-index:100;";
			botton[index].style.cssText = "background-color:rgb(0,140,255);color:#fff;";
			congqi();
		}
		right.onclick = function() {
			clearInterval(dingshiqi);
			index++;
			if (index == imgs.length) {
				index = 0;
			}
			for (var i = 0; i < imgs.length; i++) {
				imgs[i].style.cssText = "z-index:0;";
				botton[i].style.cssText = "background-color:#fff;color:rgb(0,140,255);";
			}
			imgs[index].style.cssText = "z-index:100;";
			botton[index].style.cssText = "background-color:rgb(0,140,255);color:#fff;";
			congqi();
		}
		botton[0].onclick = function() {//为第一个小按钮添加切换事件
			clearInterval(dingshiqi);
			index = 0;
			for (var i = 0; i < imgs.length; i++) {
				imgs[i].style.cssText = "z-index:0;";
				botton[i].style.cssText = "background-color:#fff;color:rgb(0,140,255);";
			}
			imgs[index].style.cssText = "z-index:100;";
			botton[0].style.cssText = "background-color:rgb(0,140,255);color:#fff;";
			congqi();
		}
		botton[1].onclick = function() {
			clearInterval(dingshiqi);
			index = 1;
			for (var i = 0; i < imgs.length; i++) {
				imgs[i].style.cssText = "z-index:0;";
				botton[i].style.cssText = "background-color:#fff;color:rgb(0,140,255);";
			}
			imgs[index].style.cssText = "z-index:100;";
			botton[1].style.cssText = "background-color:rgb(0,140,255);color:#fff;";
			congqi();
		}
		botton[2].onclick = function() {
			clearInterval(dingshiqi);
			index = 2;
			for (var i = 0; i < imgs.length; i++) {
				imgs[i].style.cssText = "z-index:0;";
				botton[i].style.cssText = "background-color:#fff;color:rgb(0,140,255);";
			}
			imgs[index].style.cssText = "z-index:100;";
			botton[2].style.cssText = "background-color:rgb(0,140,255);color:#fff;";
			congqi();
		}
	})
}

/*
* @Author: zhangbufeng
* @Date:   2018-07-31 22:01:53
* @Last Modified by:   zhangbufeng
* @Last Modified time: 2018-08-01 19:29:27
*/
window.onload=function(){
	let banner=document.querySelector(".banner");
	let ul=banner.querySelector("ul");
	let li=ul.querySelectorAll("li");
	let btn=banner.querySelector(".btn");
	let a=btn.querySelectorAll("a");
	let num=0;
	move();
	let t=setInterval(move,2000);
	function move(){
		num++;
		if(num==6){
			num=0;
		}
		for(let j=0;j<li.length;j++){
			a[j].style.zIndex=5;
			animate(li[j],{left:-1519.2});
			a[j].style.backgroundColor="#fff";
			num=0;
		}
		a[num].style.zIndex=10;
		animate(li[num],{left:0})
		a[num].style.backgroundColor="#005aab";
	}
	for(let i=0;i<a.length;i++){
		a[i].onclick=function(){

		}
	}
}
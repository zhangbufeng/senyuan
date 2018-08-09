/*
* @Author: zhangbufeng
* @Date:   2018-07-31 22:01:53
* @Last Modified by:   zhangbufeng
* @Last Modified time: 2018-08-08 13:25:42
*/
window.onload=function(){
	let banner=document.querySelector(".banner");
	let ul=banner.querySelector("ul");
	let li=ul.querySelectorAll("li");
	let btn=banner.querySelector(".btn");
	let a=btn.querySelectorAll("a");
	let t=setInterval(move,2000);
	let num=0;
	function move(){
		num++;
		if(num==li.length){
			num=0;
		}
		for(let i=0;i<li.length;i++){
			li[i].style.zIndex=5;
			animate(li[i],{left:1519.2});
			a[i].style.backgroundColor="#fff"
		}
		li[num].style.zIndex=10;
		if(num!=0){
			animate(li[num],{left:0});
			animate(li[num-1],{left:-1519.2});
		}else{
			animate(li[num],{left:0});
			animate(li[li.length-1],{left:-1519.2})
		}
		a[num].style.backgroundColor="#005aab";
	}
	banner.onmouseenter=function(){
    	clearInterval(t);
    }
    banner.onmouseleave=function(){
    	t=setInterval(move,2000);
    }
    for(let i=0;i<a.length;i++){
    	a[i].onclick=function(){
    		if(i==num){
    			return;
    		}
    		if(i<num){
    			animate(li[i],{left:0});
    			animate(li[num],{left:1519.2});
    			a[i].style.backgroundColor="#005aab";
    			a[num].style.backgroundColor="#fff";
    			num=i;
    		}
    		if(i>num){
    			animate(li[i],{left:0});
    			animate(li[num],{left:-1519.2});
    			a[i].style.backgroundColor="#005aab";
    			a[num].style.backgroundColor="#fff";
    			num=i;
    		}
    	}
    }
}
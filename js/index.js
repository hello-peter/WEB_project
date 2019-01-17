var requestURL = 'https://raw.githubusercontent.com/hello-peter/json/master/TestJSON.json';  //检索的JSON的URL
var request = new XMLHttpRequest();  //使用XMLHttpRequest创建新的请求对象实例
request.open('GET', requestURL); //使用open()方法打开一个新请求
request.responseType = 'json';  //使用responseType将request转为JSON，以便XHR知道服务器将返回JSON
request.send(); //用send()方法发送请求
request.onload = function() {  
  var find = request.response;  //保存请求的数据
  populatep(find);//将数据传给populatop函数
}

function populatep(jsonObj) {    //定位到id=find4s标签中
  var myH1 = document.getElementById("find4S");
  myH1.textContent = jsonObj['title'];  //在myH1中添加JSON文件中名为title的内容
}
$(function(){
		// 初始化轮播
		$("#myCarousel").onload(function(){
			$("#myCarousel").carousel('cycle');
		});
	});
	function plays(obj){
		obj.play();
	}
	function stop(obj){
		obj.pause();
	}
	function car_gif(){
		var car=document.getElementById("gif-car");
		car.innerHTML="点击了解汽车历史";
		
	}
	function car_gif_delect(){
		var car=document.getElementById("gif-car");
		car.innerHTML="";
	}

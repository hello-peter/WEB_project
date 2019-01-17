function verify_username(){
	var user = document.getElementById("account").value;  //获取input标签中的文本
        var reg = /^[a-z0-9]\w+@[a-z0-9]{2,3}(\.[a-z]{2,3}){1,2}$/i; // .com .com.cn
       var accountspans = document.getElementById("accountspans"); 
       if(reg.test(user)){
           //符合规则 
           accountspans.innerHTML="正确".fontcolor("green");
           return true;
       }else{
           //不符合规则
           accountspans.innerHTML="错误".fontcolor("red");
           return false;
          }
	}
function passwords(){
	var reg=/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;
	//字母 数字 特殊符号
	var ass=document.getElementById("password").value;
	var spans=document.getElementById("passwordspan");
	if(reg.test(ass)){
		spans.innerHTML="正确".fontcolor("green")
	}else{
		spans.innerHTML="错误".fontcolor("red");
	}
}
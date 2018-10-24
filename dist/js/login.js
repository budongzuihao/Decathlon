define(["jquery", "jquery-cookie","index"], function($,index){
	function login(){
		$(function(){
		//小眼睛
			$(".glyphicon-eye-open").click(function(){
				var oInput = document.getElementById('h5_text');
				if(oInput.type == "password"){
					oInput.type = "text";
					$(".glyphicon-eye-open").css("color","#0082c3")
				}else{
					oInput.type = "password";
					$(".glyphicon-eye-open").css("color","#7d7e80")
				}
			})
			var oTel = document.getElementById('tel_input_text');
			var oSurname = document.getElementById('surname_text');
			var oName = document.getElementById('name_text');
			var oPassword = document.getElementById('h5_text');
		//第一框 电话
			$("#tel_input_text").blur(function(){
				var str = String(oTel.value);
 				if(oTel.value == ""){
					$("#tel_warning").css("display","block");
					$("#tel_warning").html("此信息不能为空");
					$("#checkYes1").css("display","none")
				}else if(!/^[0-9]+$/.test(str)){
					$("#tel_warning").css("display","block");
					$("#tel_warning").html("仅能输入数字");
					$("#checkYes1").css("display","none")
				}else if(str.length != 11){
					$("#tel_warning").css("display","block");
					$("#tel_warning").html("请输入您所选择国家的手机号码");
					$("#checkYes1").css("display","none")
				}else{
					$("#tel_warning").css("display","none");
					$("#checkYes1").css("display","block");
				}
			});
		//第二框 姓
			$("#surname_text").blur(function(){
				if(oSurname.value == ""){
					$("#surname_warning").css("display","block");
					$("#surname_warning").html("此信息不能为空");
					$("#checkYes2").css("display","none")
				}else{
					$("#surname_warning").css("display","none");
					$("#checkYes2").css("display","block");
				}
			});
		//第三框 名
			$("#name_text").blur(function(){
				if(oName.value == ""){
					$("#name_warning").css("display","block");
					$("#name_warning").html("此信息不能为空");
					$("#checkYes3").css("display","none")
				}else{
					$("#name_warning").css("display","none");
					$("#checkYes3").css("display","block");
				}
			});
		//第四框 密码
			$("#h5_text").blur(function(){
				var str1 = String(oPassword.value);
				if(oPassword.value == ""){
					$("#password_warning").css("display","block");
					$("#password_warning").html("此信息不能为空");
					$("#regex1").css("color","#edeff3");
					$("#regex2").css("color","#edeff3");
					$("#regex3").css("color","#edeff3");
				}else{
					$("#password_warning").css("display","none");
				}
				for(var i = 0; i < str1.length; i++){
					if(str1.length > 7){
						$("#regex1").css("color","#02be8a");
					}else{
						$("#regex1").css("color","#edeff3");
					}
					if(str1[i] >= "0" && str1[i] <= "9"){
						$("#regex2").css("color","#02be8a");
					}else{
						$("#regex2").css("color","#edeff3");
					}

					if(/[A-Za-z]/.test(str1)){
						$("#regex3").css("color","#02be8a");
					}else{
						$("#regex3").css("color","#edeff3");
					}
					
					/*if(!(/[A-Za-z]/.test(str1))){
						$("#regex3").css("color","#edeff3");
					}*/

				}
			});
		//连接数据库
			/*$.ajax({
				type:'POST',
				url:'../data/index.php',
				error:function(msg){
					return false
				},
				success:function(json, st){
					if(json.result == 0){
						alert('您的评论审核通过后，才会显示出来！');
					}else{ //否则审核通过，显示出来
						$("#comlistx0014jwh62k").html(json);
					}
				}
			});*/
		})
	}
	return {
		login:login
	}
})
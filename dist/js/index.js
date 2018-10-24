define(["jquery", "jquery-cookie","startMove"], function($,startMove){
	function classify_none(){
		$(function(){
			//分类效果
				$("#classify").hover(function(){
					$("#classify").css("background","#0082c3 url(../images/second.jpg) no-repeat 19px 19px").css("color","white").css("text-decoration","none")
				},function(){
					$("#classify").css("background","#edeff1 url(../images/classfy.jpg) no-repeat 19px 19px").css("color","#666").css("text-decoration","none")
				})
	
				$("#classify").click(function(){
					$(document.body).css({
 					  "overflow-x":"hidden",
 					  "overflow-y":"hidden"
 					});
					$("#classify_none").animate({left:'0px'});
					$("#classify").unbind("hover").css("background","#edeff1 url(../images/backbad.jpg) no-repeat 19px 14px");
				})
			//点击空白隐藏导航
				$(document).click(function(ev){

					var con = $("#classify");
					var con1 = $("#classify_none");
					if(!con.is(ev.target) && con.has(ev.target).length === 0 && !con1.is(ev.target) && con1.has(ev.target).length === 0){
						 $(document.body).css({
						  "overflow-x":"auto",
						  "overflow-y":"auto"
						});
						$("#classify_none").animate({left:'-600px'});
						$("#classify").css("background","#edeff1 url(../images/classfy.jpg) no-repeat 19px 19px");
					}
				})
			//隐藏导航中的右部分
				$("#classify_none_right").find("dl").click(function(){
					$("dl").css({"height":"300"});
	
				})
	
				$(document).click(function(ev){
					var con = $("#classify_none_right").find("dl");
					if(!con.is(ev.target) && con.has(ev.target).length === 0){
						$("#classify_none_right").find("dl").css({"height":"145"});
					}
				})
			//搜索部分 右面  购物车等 隐藏和显示
				$("#header_div1").hide();
				$("#header_div2").hide();
				$("#header_div4").hide();
				var li11 = $("#header_li1").hover(function(){
					$("#header_li1").css("background","#edeff1");
					$("#header_div1").css("zIndex","")
					$("#header_div1").fadeIn(500);;
				},function(){
					$("#header_li1").css("background","white");
					$("#header_div1").hide();
				})
				$("#header_div1").hover(function(){
					$("#header_li1").css("background","#edeff1");
					$("#header_div1").css("zIndex","")
					$("#header_div1").show();;
				},function(){
					$("#header_li1").css("background","white");
					$("#header_div1").fadeOut(500);
				})
				
				$("#header_li2").hover(function(){
					$("#header_li2").css("background","#edeff1");
					$("#header_div2").css("zIndex","")
					$("#header_div2").fadeIn(500);;
				},function(){
					$("#header_li2").css("background","white");
					$("#header_div2").hide();
				})
				$("#header_div2").hover(function(){
					$("#header_li2").css("background","#edeff1");
					$("#header_div2").css("zIndex","")
					$("#header_div2").show();;
				},function(){
					$("#header_li2").css("background","white");
					$("#header_div2").fadeOut(500);
				})


				$("#header_li4").hover(function(){
					$("#header_li4").css("background","#fdd935");
					$("#header").css("background","#fdd935");
					$("#header_div4").css("zIndex","");
					$("#header_div4").fadeIn(500);
					sc_msg();
					sc_shopping();
				},function(){
					$("#header").css("background","#ffea28");
					$("#header_li4").css("background","#ffea28")
					$("#header_div4").hide();
				})
				$("#header_div4").hover(function(){
					$("#header_li4").css("background","#fdd935");
					$("#header").css("background","#fdd935");
					$("#header_div4").css("zIndex","");
					$("#header_div4").show();
					sc_msg();
					sc_shopping();
				},function(){
					$("#header").css("background","#ffea28");
					$("#header_li4").css("background","#ffea28")
					$("#header_div4").fadeOut(500);
				})
				
	
							//分类导航栏资源  引用json				
			//点击li标签变背景图片
				$("#classify_none_left").find("li").eq(0).attr("class","active_li")
				$("#classify_none_left").find("li").click(function(){
					$("#classify_none_left").find("li").attr("class","");
					$(this).attr("class","active_li");

				})
			//分类导航右部 图片部分
				$.ajax({
					url:"../data/list_right.json",
					type:"get",
					success:function(res){
						var html ="";
						for(var i = 0; i < res.length; i++){
							html += `<dl id="${res[i].id}">
							<dt><img src="${res[i].img}" alt=""></dt>
							<dd>${res[i].value}</dd>
							<ol></ol>
						</dl>`;
						}
						$("#classify_none_right").html(html);
					},
					error:function(msg){
						alert(msg);
					}
				})
				$("#classify_none_left").find("li").eq(0).click(function(){
						$.ajax({
						url:"../data/list_right.json",
						type:"get",
						success:function(res){
							var html ="";
							for(var i = 0; i < res.length; i++){
								html += `<dl id="${res[i].id}">
								<dt><img src="${res[i].img}" alt=""></dt>
								<dd>${res[i].value}</dd>
								<ol></ol>
							</dl>`;
							}
							$("#classify_none_right").html(html);
						},
						error:function(msg){
							alert(msg);
						}
					})
				})
				$("#classify_none_left").find("li").eq(1).click(function(){
					$("#classify_none_right").css("background","#eee");
					$.ajax({
						url:"../data/classify_json.json",
						type:"get",
						success:function(res){
							var html ="";
							html += `<h3>目标运动</h3>
											<div class="none_right">
												<div><a href="">一日徒步</a></div>
												<div><a href="">多日徒步</a></div>
												<div><a href="">滑雪服饰</a></div>
												<div><a href="">攀岩/高山服饰</a></div>
												<div><a href="">滑雪服饰</a></div>
											</div>`;
							for(var i = 0; i < res.length; i++){
								html += `<h3>${res[i].value}</h3>
											<div class="none_right">
												<div><a href="">一日徒步</a></div>
												<div><a href="">多日徒步</a></div>
												<div><a href="">滑雪服饰</a></div>
												<div><a href="">攀岩/高山服饰</a></div>
											</div>
											`;

							}
							
							$("#classify_none_right").html(html);
						},
						error:function(msg){
							alert(msg);
						}
					})
				})
			//轮播图 按钮
				$("#slideshow_2jpg").css("opacity","0");
				
				var iNow = 0;
				var iNow1 = 0;
				var iNow2 = 1;
				var timer = null;
				timer = setInterval(show,3000)
				
				$("#slideshow").hover(function(){
					clearInterval(timer);
				},function(){
					timer = setInterval(show,3000);
				})
				

				function show(){
					if(iNow == iNow2){
							iNow1 = 1;
							iNow = 0;
						}else{
							iNow = iNow2;
							iNow1 = 0;
						}
							$("#slideshow").find("img").eq(iNow).stop().animate({"opacity":"0"});
							$("#slideshow_btn").find("button").eq(iNow1).css("border","3px solid #0082c3");
							$("#slideshow_btn").find("button").eq(iNow).css("border","");
							$("#slideshow").find("img").eq(iNow1).stop().animate({"opacity":"1"});
				}

				$("#slideshow_btn_1").click(function(){
					$("#slideshow_btn_1").css("border","3px solid #0082c3");
					$("#slideshow_btn_2").css("border","");
					$("#slideshow_1jpg").css("opacity","1");
					$("#slideshow_2jpg").css("opacity","0");
				})
				$("#slideshow_btn_2").click(function(){
					$("#slideshow_btn_2").css("border","3px solid #0082c3");
					$("#slideshow_btn_1").css("border","");
					$("#slideshow_2jpg").css("opacity","1");
					$("#slideshow_1jpg").css("opacity","0");
				})
			//引入两图
				$.ajax({
					url:"../data/slideshow_under.json",
					type:"get",
					success:function(res){
						var html ="";
						for(var i = 0; i < res.length; i++){
							html += `<img src="${res[i].img}" alt="">`;
						}
						$("#slideshow_under").html(html);
					},
					error:function(msg){
						alert(msg);
					}
				})
			//引入四图
				$.ajax({
					url:"../data/fPicture.json",
					type:"get",
					success:function(res){
						var html = "";
						for(var i = 0; i < res.length; i++){
							html += `<img src="${res[i].img}" alt="">`;
						}
						$("#fPicture").html(html);
					},
					error:function(msg){
						alert(msg);
					}
				})
			//图片切换效果
				$("#allsport_btn_2").click(function(){
					$("#allsport_btn_2").css("border","3px solid #0082c3").css("backgroundColor","white");
					$("#allsport_btn_1").css("border","none").css("backgroundColor","#afb1b3");
					$("#allSport1").stop().animate({"left":"-1080px"});
					$("#allSport2").stop().animate({"marginLeft":"0px"});
				})
				$("#allsport_btn_1").click(function(){
					$("#allsport_btn_2").css("border","none").css("backgroundColor","#afb1b3");
					$("#allsport_btn_1").css("border","3px solid #0082c3").css("backgroundColor","white");
					$("#allSport1").stop().animate({"left":"0px"});
					$("#allSport2").stop().animate({"marginLeft":"1080px"});
				})
			//引入多图
				$.ajax({
					url:"../data/allsport.json",
					type:"get",
					success:function(res){
						var html = "";
						for(var i = 0; i < res.length; i++){
							html += `<a href=""><dl><dt><img src="${res[i].img}" alt=""></dt><dd>${res[i].value}</dd></dl></a>`
						}
						$("#allSport1").html(html);
					},
					error:function(msg){
						
						alert(msg);
					}
				})
	
				$.ajax({
					url:"../data/allsport1.json",
					type:"get",
					success:function(res){
						var html = "";
						for(var i = 0; i < res.length; i++){
							html += `<a href=""><dl><dt><img src="${res[i].img}" alt=""></dt><dd>${res[i].value}</dd></dl></a>`
						}
						$("#allSport2").html(html);
					},
					error:function(msg){
						alert(msg);
					}
				})
			//商品列表
				$.ajax({
					url:"../data/goods.json",
					type:"get",
					success:function(res){
						var html ="";
						for(var i = 0; i < res.length; i++){
							html += `<h1>
										<a href="../Commodity_details.html"><img id="${res[i].id}" src="${res[i].img}" alt=""></a>
										<section>${res[i].first}</section>
										<section>${res[i].second}</section>
										<section>${res[i].third}</section>
										<a style="color:white" class="join_in_car" id="${res[i].id}" href="###">加入购物车</a>
									</h1>
									`;
						}
						$("#goods_car").html(html);
					},
					error:function(msg){
						alert(msg);
					}
				})
			//放大镜
				
				
				$("#move_div").mouseenter(function(){
					$("#move_div").css("cursor","move")
					$("#mousemove_blue").css({"display":"block"});	
					$("#magnifying").css("display","block");

					$("#move_div").mousemove(function(e){
						var oBlue = document.getElementById("mousemove_blue");
						var mouseX = e.clientX  - this.offsetLeft;
						var mouseY = e.clientY - 20 - this.offsetTop;
						var left = -(mouseX * 2 - 250);
						var top = -(mouseY * 2 - 250);
						$("#magnifying_img").css({"left":left});
						if(mouseY >= 360){
							top = -(500);
							$("#magnifying_img").css({"top":top})
						}else{
							top = -(mouseY * 2 - 250);
							$("#magnifying_img").css({"top":top})
						}

						var moveX = e.pageX - 265;
						var moveY = e.pageY - 215;
						$("#mousemove_blue").css({"left":moveX});
						$("#mousemove_blue").css({"top":moveY});

						if(parseInt($("#mousemove_blue").css("top")) <= 0){
							$("#mousemove_blue").css({"top":"0"});
						}
						if(parseInt($("#mousemove_blue").css("top")) >= 350){
							$("#mousemove_blue").css({"top":350});
						}
						if(parseInt($("#mousemove_blue").css("left")) <= 0){
							$("#mousemove_blue").css({"left":"0"});
						}
						if(parseInt($("#mousemove_blue").css("left")) >= 350){
							$("#mousemove_blue").css({"left":350});
						}
						// alert(parseInt($("#mousemove_blue").css("top")))
					})

					
						
					
				})
				$("#move_div").mouseleave(function(){
					$("#mousemove_blue").css({"display":"none"});	
					$("#magnifying").css("display","none");
				})
			//加入购物车
				$("#goods_all_big").on("click", ".join_in_car", function(){

				var id = this.id;
				//加入购物车 约定 goods=[{id:1,num:2},{id:2,num:1}]
				//1、判断是否是第一次添加
				var first = $.cookie("goods") == null ? true : false;
				if(first){
					//第一次添加，直接将cookie存储进去
					$.cookie("goods", `[{id:${id},num:1}]`, {
						expires: 7,
						raw: true
					});
				}else{
					//2、判断之前是否添加过商品
					var cookieStr = $.cookie("goods");
					var arr = eval(cookieStr);  //eval(必须是外层是数组，元素是对象) 和 JSON.parse()
					var same = false; //假设没有添加过
					for(var i = 0; i < arr.length; i++){
						if(arr[i].id == id){
							//3、之前存储过数量+1
							arr[i].num++;
							same = true;
							break;
						}
					}
					if(!same){
						//4、没有相同的
						var obj = {id: id, num: 1};
						arr.push(obj);
					}
					$.cookie("goods", JSON.stringify(arr), {
						expires: 7,
						raw: true
					});
				}
				sc_car();
				})


				function sc_msg(){
					$.ajax({
						url: "../data/goods.json",
						type: "get",
						success: function(res){
							var sc_arr = eval($.cookie("goods"));
	
							var html = '';
							html += `<h4><em>购物车</em></h4>`;
							if(sc_arr){
								for(var i = 0; i < sc_arr.length; i++){
									html += `
											<div>
												<img src="${res[sc_arr[i].id].img}" alt="">
												<ul>
													<li>${res[i].second}</li>
													<li>件数：${sc_arr[i].num}<span>价格：￥130</span></li>
												</ul>
											</div>`;
									}
								$("#header_div4").html(html);
							}
	
						}
					})
				}


				function sc_shopping(){
					$.ajax({
						url: "../data/goods.json",
						type: "get",
						success: function(res){
							var sc_arr = eval($.cookie("goods"));
							var html = '';
							if(sc_arr){
								for(var i = 0; i < sc_arr.length; i++){
									html += `<div>
												<img src="${res[sc_arr[i].id].img}" alt="">
												<div>
													<h1>${res[i].first}</h1>
													<h2>${res[i].second}</h2>
													<h3>单价￥130</h3>
													<h4>数量为：${sc_arr[i].num} 件</h4>
													<a href="###">删除物品</a>
												</div>
											</div>`;
									}
								$("#shoppingGoods").html(html);
							}
	
						}
					})
				}
					//购物车内商品数量
				function sc_car(){
					var sc_str = $.cookie("goods");
					if(sc_str){
						var sc_arr = eval(sc_str);
						var sum = 0;
						for(var i = 0; i < sc_arr.length; i++){
							sum += sc_arr[i].num;
						}
						$("#sum_math").html(sum);
					}
				}
				sc_car();
				sc_shopping();
			//点击返回上一层
				$("#exis_under").click(function(){
					window.history.back();
				})
				$("#exis_under_1").click(function(){
					window.history.back();
				})
			//清除购物车
				$("#clear_car").click(function(){
					$.cookie("goods","",{ expires: -1 });
					window.location.reload();
				})
			//删除物品
				
				/*var list = document.cookie.split(";");
				alert(list)
			   //创建一个空数组对象
			   var cookieList = {};
			   //然后遍历数组
			   alert(list.length)
			   for (var i = 0; i < list.length; i++){
			   //cookie是由name=value形式存在，所以获取当前=位置
			     var pos = list[i].indexOf("=");
			   //然后获取=前面的name
			     var c_name = list[i].substring(0,pos);
			   //获取=后面的value
			     var c_value = list[i].substring(pos+1);
			     //对其只进行解码
			     c_value = decodeURIComponent(c_value);
			   //以name=value形式存入数组中
			     cookieList[c_name] = c_value; 
			     
			   }
			   alert(cookieList)


				var arr = [{"id":1,"name":"w"},{"id":2,"name":"w"},{"id":3,"name":"w"}];
				alert(arr)
				// var arr = str.split(",");
				var obj=arr.find(function (x) {
				    return x.id === 1
				})
				alert(obj.name);*/
				// var arr = Array.from($.cookie("goods"))
				// alert(arr)

		})
	}
	return {
		class:classify_none
	}
})

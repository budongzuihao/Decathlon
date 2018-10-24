
require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"bootstrat":"bootstrat",
		"index": "index",
		"login":"login"
	},
	//设置模块之间的依赖关系
	shim: {
		"jquery-cookie": ["jquery"]
	}
})

require(['index','login'], function(index,login){
	index.class();
	login.login();
})
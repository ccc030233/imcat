<?php
/*
? 
*/
$_va_home = array(

	'c' => array(
		'vmode' => 'dynamic', //dynamic,catch,close
		'stexp' => '2h', //30,60,3h,6h,12h,24h,7d
		'stext' => '-d.htm',
	),
	
	//mod.home模块首页模板
	'm' => 'c_page/_home',
	
	//关闭模块
	'close' => array(),
	
	//import导入配置的模块
	'imcfg' => array(
		#'demo' => 'news', // demo按news方式显示
	),
	
	//扩展模块
	'extra' => array('hello',), 
	
);
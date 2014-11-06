<?php
//$config	= require('/var/www/html/toyokou/config.php');
$config = require('./config.php');
$admin_config = array(
    //URL设置
    //'URL_MODEL'					=> 3, 				//如果你的环境不支持PATHINFO 请设置为3

    //项目设置
    'SESSION_AUTO_START'		=> true,			//Session自动开启
    'TOKEN_ON'					=> false,			//关闭令牌验证

    //分页设置
    'VAR_PAGE'					=> 'pageNum',		//分页参数名
    'PAGE_ROLLPAGE'         	=> 5,				//分页显示页数
    'PAGE_LISTROWS'         	=> 12,				//分页每页显示记录数

);
return array_merge($config,$admin_config);

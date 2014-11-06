<?php
/**
 * 主配置文件
 *
 */

if( !defined('THINK_PATH')) exit();

return array(
    //数据库设置
    'DB_TYPE' => 'mysql', //数据库类型
    'DB_HOST' => 'localhost', //数据库服务器地址
    'DB_NAME' => 'pubrelease', //数据库名称
    'DB_USER' => 'root', //数据库用户名

    'DB_PWD' => 'hello@world123!',//数据库密码
    'DB_PREFIX' => 'pub_', //数据库表前缀
    'DB_CHARSET' => 'utf8', //网站编码
    'DB_PORT' => '3306', //数据库端口

    
);

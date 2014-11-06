<?php
namespace Home\Model;
use Think\Model;
use Think\Model\RelationModel;
class PublishModel extends RelationModel {
    //构造函数,用于测试是否调用到
    //public function __construct()  
    //{ 
        //parent::__construct(); 
        //echo 'hello ProductsModel';  
    //}   

    //protected $_link = array(
        //'ProjectType' => array(    
            //'mapping_type'  => self::BELONGS_TO,    
            //'class_name'    => 'ProjectType',
            //'foreign_key'   => 'projectid', //外键
            //'mapping_name'  => 'producttype',
            //'mapping_fields' => 'typename', //加上这句,只查询该字段,否则查询全部字段
            //'as_fields' => 'typename', //直接映射,与Products字段平级
    //),

    //);

}



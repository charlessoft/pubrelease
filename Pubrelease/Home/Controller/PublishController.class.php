<?php
namespace Home\Controller;
use Think\Controller;
class PublishController extends Controller {
    public function index(){
        $this->display();

    }

    public function getPublishByProjId( $prjId )
    {
        $publish = M('publish');
        $condition['projectid'] = $prjId; 
        $arr = $publish->where($condition)->select();
        return $arr;

    }
}


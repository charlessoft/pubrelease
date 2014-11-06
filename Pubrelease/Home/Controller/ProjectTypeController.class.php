<?php
namespace Home\Controller;
use Think\Controller;
class ProjectTypeController extends Controller {
    public function index(){
        //$this->display();

        $ProjectType = M('ProjectType');
        $arr = $ProjectType->select();
        dump($arr,true,'abc',true);
        //$this->display();
    }

    public function getProjectType()
    {
        $ProjectType = M('ProjectType');
        $arr = $ProjectType->select();
        return $arr;
    }
}



<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        //$this->display();

        $projecttype= A('Home/ProjectType');//->products();
        $items = $projecttype->getProjectType();
        //dump($items,true,'a',true);
        $this->assign('proitems',$items);
        $this->display();

    }
}

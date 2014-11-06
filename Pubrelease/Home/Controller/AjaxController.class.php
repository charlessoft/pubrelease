<?php
namespace Home\Controller;
use Think\Controller;
use Think\Controller\Products;
class AjaxController extends Controller {
    public function index()
    {
        echo "ajax index";
    }


    public function getPrjId( )
    {
        //echo "getProduct";
        //
        //status
        //info
        //data
        $id = $_GET['id'];
        $publish= A('Home/Publish');//->products();
        $item = $publish->getPublishByProjId( $id );
        $data['content'] = $item;
        $data['status'] = 1;
        $this->ajaxReturn($data);
    }


}




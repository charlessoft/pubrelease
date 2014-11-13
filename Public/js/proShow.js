// JavaScript Document
$(function(){
	(function(){
		var a = $('.sidebar ul li a');
		var ul = $('#sidebar ul');
        var tab = $('#rounded-corner');
        /*$(a[0]).css('background','#444');*/
        getProductData(0);
		$(a).click(function(){
			var now = $(this).index();
            getProductData(now);
		});
		function getProductData(n){
			var postUrl = '/index.php/Ajax/getPrjId/id/'+(n+1);
            $.post(postUrl,function(jdata){
				if(typeof(jdata) == "string")jdata = eval('(' + jdata + ')');
                if( jdata.status == 1 ){
                    /*$(ul).html("");*/
                    /*$("#rounded-corner tr").empty();*/
                    $("#rounded-corner tr:gt(0):not(:eq(1))").remove();

                    var tdcheckbox = "<td><input type=\"checkbox\" name=\"\" /></td>";

            var tdedit = "<td><a href=\"#\"><img src=\"/Public/images/edit.png\" alt=\"\" title=\"\" border=\"0\" /></a></td>";
            var tddel = "<td><a href=\"#\"><img src=\"/Public/images/trash.gif\" alt=\"\" title=\"\" border=\"0\" /></a></td>";
                    for (var i = 0, l = jdata.content.length; i < l; i ++) {
                        var id = jdata.content[i].id;
                        var projectid = jdata.content[i].projectid;
                        var filename = jdata.content[i].filename;
                        var publishdate = jdata.content[i].publishdate;
                        var updates = jdata.content[i].updates;
                        var isuse = jdata.content[i].isuse;
                        var memo = jdata.content[i].memo;
                        var classname = $("#rounded-corner tr").length % 2 == 0?"even":"odd";
                        
                        /*var tdid = "<td>" + id + "</td>";*/
                        /*var tdprojectid = "<td>" + projectid + "</td>";*/
                        var tdfilename = "<td>" + filename + "</td>";
                        var tdpublishdate = "<td>" + publishdate  + "</td>";
                        var tdupdates = "<td>" + updates + "</td>";
                        /*var tdisuse = "<td>" + isuse + "</td>";*/
                        /*var tdmemo = "<td>" + memo + "</td>";*/
                        var newRow = "<tr class =\"" + classname + "\">" + tdcheckbox + tdfilename + tdpublishdate + tdupdates + tdedit + tddel +  "</tr>";
                        /*alert(newRow);*/
                        $("#rounded-corner tr:last").after(newRow);
                    }
                    
                    /*var newRow = "<tr class=\"" + classname + "\">	<td><input type=\"checkbox\" name=\"\" /></td><td>新行第一列</td><td>新行第二列</td><td>新行第三列</td><td>新行第四列</td><td>新行第五列</td></tr>";*/
                    /*alert(newRow);*/
                	$("div.holder").jPages({
              		  containerID : "itemContainer",
              		  animation   : "flipInX"
              		});
                }
            },'json');
		};
	})();
});

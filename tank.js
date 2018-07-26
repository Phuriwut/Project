var lite = 0
var start = 0
var stop = 0
$(function() {                  
    $.ajax({
        type: "GET",
        url: "http://ecourse.cpe.ku.ac.th/exceed/api/fingerplam-tank",
        dataType: "text",
        success: function (response) {
            if(response > 0) {
                start = new Date();
            
            }
            else if(response === 0) {
                stop = new Date();
            }
            time = stop - start;
            function vol(response,time){
                return lite = response*time
            $(function(){
                $("#your_tank_id").append(lite);
            })
            }
        }
    });
})
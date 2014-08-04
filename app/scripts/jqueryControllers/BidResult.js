/**
 * Created by voctor on 14-7-7.
 */
    function bid_result_page_load(){
    var current_activity=Bid.get_current_activity();
    $('#goback').attr('href','#/bidlist/'+current_activity);
}

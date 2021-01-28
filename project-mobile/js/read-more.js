$(document).ready(function(){
    let maxLength = 100;
    $(".description").each(function(){
        let myStr = $(this).text();
        if($.trim(myStr).length > maxLength){
            let newStr = myStr.substring(0, maxLength);
            let removedStr = myStr.substring(maxLength, $.trim(myStr).length);
            $(this).empty().html(newStr);
            $(this).append(' <a href="javascript:void(0);" class="read-more">Read more...</a>');
            $(this).append('<span class="more-text">' + removedStr + '</span>');
        }
    });
    $(".read-more").click(function(){
        $(this).siblings(".more-text").contents().unwrap();
        $(this).remove();
    });
});
$(function () {
    var $comment = $('#comment');
    $('.bigger').click(function () {
        $comment.height($comment.height()<500?$comment.height()+50:$comment.height());
    });
    $('.smaller').click(function () {
        $comment.height($comment.height()>50?$comment.height()-50:$comment.height());
    });

})
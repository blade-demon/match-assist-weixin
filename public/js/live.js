$(function () {
//    $('#myModal').modal();
});

function guessHandler() {
    swal({
        title: '全场胜负',
        titleText: '主胜',
        text: '谦虚公司 VS 我就是帅'
    }).then(function () {
        swal('Deleted!', 'Your imaginary file has been deleted.', 'success')
    }, function (dismiss) {
        // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
        if (dismiss === 'cancel') {
            swal('Cancelled', 'Your imaginary file is safe :)', 'error')
        }
    })
}

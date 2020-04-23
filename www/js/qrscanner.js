var done = function(err, status) {
    function displayContents(err, text) {
        if (err) {
            Swal.fire({
                icon: 'error',
                title: 'error',
                text: '読み込めませんでした...',
            });
        } else {
            alert(text);
            QRScanner.destroy();

            $('main').css('display', 'block');
            $('body').css('background', 'white'); //<-bodyがグレーになるため...
        }
    }

    if (err) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'アプリに使用制限がかかります...',
        });
    } else {
        $('main').css('display', 'none');
        QRScanner.scan(displayContents);
        QRScanner.show(function(status) {
            console.log(status);
        });
    }
};

$('.qrscan-active').click(function() {
    QRScanner.prepare(done);
});

$('#qrcode').qrcode("Hello Cordova QRcode!!");
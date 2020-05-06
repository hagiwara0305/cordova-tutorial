// header("Access-Control-Allow-Origin: *");
// これをサーバ側（PHPの場合）に書き加えないとクロスドメインの制約に引っかかる

$.ajax({
        url: 'http://192.168.0.7:8080/', //送信先
        datatype: 'json', //受け取りデータの種類
    })
    .done(function(data) {
        alert(data);
    })
    .fail(function(response) {
        // console.log('通信失敗');
        alert("通信失敗");
    });
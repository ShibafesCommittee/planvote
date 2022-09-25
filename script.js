let submitted = false;

function doget() {
    let data =  localStorage.getItem('answer')
    console.log(data)
}

//const page_transition = function () {
//    if(submitted){
//
//    }
//}

$("button").click(function(){
    let Serial = $("#Serial").val();
    let answer = $("input[name='entry.433827081']:checked").val();
    let answers = [Serial, answer];
    let json = JSON.stringify(answers, undefined, 1);

    localStorage.setItem('answer', json);
    console.log(json);
})


//cookie有効期限10日追加　or　ローカルストレージ
//ボタンの回数制限　ex)5回とか　→　端末1台のみの場合を想定
//シリアルと回答内容保存　→　回答重複防止
//開くTABを1個に　→　見やすく
//入力値check　→　
//範囲選択無効化
//ビューぽーーとの追加

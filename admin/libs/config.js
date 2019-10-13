/*
日期插件以及编辑器插件的配置js文件
*/
/*
外接的js文件一般在head中导入:此时body没有加载
一般外接的js文件写在入口函数中: DOM树加载完毕
*/
$(function(){
    // 3.初始化
    jeDate("#testico", {
        theme: { bgcolor: "#00A680", pnColor: "#00DDAA" },
        isinitVal: true,//默认显示当前日期
        format: 'YYYY-MM-DD'
    });

    // tinymce 初始化
    tinymce.init({
        selector: '#mytextarea',
        language: 'zh_CN',
        directionality: 'ltl',
        browser_spellcheck: true,
        contextmenu: false,
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table contextmenu paste imagetools wordcount",
            "code"
        ],
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code",
    });
})
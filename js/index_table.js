/**
 * @表格
 * @author 
 * 
 */
costManage.moduleCreateFns.createTableBoxModule = function (root) {
    root.modules.tableBox = new root.Module(root, 'tableBox');
    var moduleRoot = root.modules.tableBox;

    //不允许隐形为config里添加属性
    //所有用到的config属性必须在该对象里面先进行声明
    moduleRoot.config = {
    };

    //dom事件必须委托到该section下
    //一般情况下不允许委托到其他地方，尤其是类名下面
    moduleRoot.events = {
    };

    moduleRoot.handles = {};


    //在这里放模块初始化时要做的操作
    moduleRoot.pubsub.on('tableBox.init', 'tableBox', function () { 
    });
};
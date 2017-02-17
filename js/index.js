/**
 * @
 * @author  
 * 
 */
$(function () {
    costManage.init();
});

var costManage = createRootVariable();
/**
 * 全局的配置对象，包含各个模块共用的常量
 * @type {Object}
 */
costManage.config = {
    //memberId: '',
},
/**
 * 全局的DOM事件，每个模块的DOM事件请写在自己的模块里
 * @type {Object}
 */
costManage.events = {
},
/**
 * 包含所有模块可用的公共工具函数
 */
costManage.helpers = {
};
/**
 * 包含全局的处理函数
 * @type {Object}
 */
costManage.handles = {};

costManage.pubsub.on('root.init', 'page', function () {
    $('#costManageTab').eTab({
        tabDirection: 'horizontal', //水平方向的tab切换，该值必须为'horizontal'
        tabType: 2,                 //模式2的tab切换，该值必须为2
        tabStyle: 1,                //插件提供了两种tab样式，可以填写1或者2
        animationType: 1,           //这种时候，填写该值也没什么用了
        activeIndex: 1              //设置第几个tab项默认被选中
    });
});

/*
 * @filename showToast.css
 * @author fy[2016-05-19 13:31]
 * @update fy[2016-06-21 17:26]
 * @version v1.1
 * @description 显示toast
 * @基于zepto/jquery
 */

/*
* V 1.1 更新 可以配置 时间 如果为空则默认为1500毫秒
* 2016年6月21日17:26
* V 1.2 针对IOS系统调整Toast出现位置 
* ------
* 2016年10月31日15:02
* V1.3 增加显示toast 有小图标的功能 修改若干现实bug
*/

var showToast=(function(){
    var instance=null;
        function show(obj){
            var that = this;
            that.obj = {
                timer : that.text,
                timer : that.timer || 1500,
            }
            if(!instance){
                var $container=$('<div class="showToast"><div class="showToastInner"><div class="showToastTips fieldTipBounceIn"><div class="showToastCon">'+obj.text+'</div></div></div></div>');
                $container.appendTo($("body"));
                instance=true;
                setTimeout(function(){
                    $container.remove();
                    instance=false;
                },obj.timer)
            }
        }
   
    return {
        show:show
    }
})();

var showToastImg=(function(){
    var instance=null;
        function show(obj){
            console.log(obj.text)
            var that = this;
            that.obj = {
                timer : that.text,
                timer : that.timer || 1500,
                icon : that.icon || "icontest"
            }
            if(!instance){
                var $container=$('<div class="showToastImg"><div class="showMask"></div><div class="showToastInner"><div class="showToastTips fieldTipBounceIn"><div class="showToastCon"><span class="icontest '+obj.icon+'"></span><span class="text">'+obj.text+'</span></div></div></div></div>');
                $container.appendTo($("body"));
                instance=true;
                setTimeout(function(){
                    $container.remove();
                    instance=false;
                },obj.timer)
            }
        }
   
    return {
        show:show
    }
})();
/*
 * @filename showToast.js
 * @author fy[2015-05-19 13:31]
 * @update fy[2015-06-01 13:56]
 * @version v1.1
 * @description 显示toast
 * @基于zepto/jquery
 */

/*
* V 1.1 更新 可以配置 时间 如果为空则默认为1500毫秒
* 
*/

var showToast=(function(){
    var instance=null;
        function show(text,timer){
            if(!timer){
                timer = 1500;
            }
            if(!instance){
                var $container=$('<div class="showToast"><div class="showToastInner"><div class="showToastTips fieldTipBounceIn"><div class="showToastCon">'+text+'</div></div></div></div>');
                $container.appendTo($("body"));
                instance=true;
                setTimeout(function(){
                    $container.remove();
                    instance=false;
                },timer)
            }
        }
   
    return {
        show:show
    }
})();
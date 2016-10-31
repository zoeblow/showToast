# showToast
showToast 是一款移动端的Toast控件，可以在移动端展示Toast效果。

### 创建时间 2016-05-19 13:31
#### 作者 [@zoeblow](http://fuyuan.me)
###版本
> * V 1.0
> * 修改时间 ：2016-05-19 13:31
> * 描述：创建showToast
 
 ------

> * V 1.1
> * 修改时间 ：2016-06-01 13:57
> * 描述：添加一个参数，可以自定义Toast显示的时间 

------

> * V 1.2
> * 修改时间 ：2016-06-21 17:26
> * 描述：针对IOS系统调整Toast出现位置 

------

> * V 1.3
> * 修改时间 ：2016年10月31日15:02
> * 描述：增加显示toast 有小图标的功能 修改若干现实bug,修改了传参方式

-----
### Js代码
```JavaScript
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

```
-----
###调用方式
在html中引入zepto/jquery之后引入showToast.js
完成之后即可直接使用
```html
<script type="text/javascript" src="script/zepto.min.js"></script>
<script type="text/javascript" src="script/showToast.js"></script>
<script>
    //调用没有小图标版本
    showToast.show({text:'这就是页面显示的文字喽',timer:2000})

    //调用没有小图标版本
    showToastImg.show({text:'这就是页面显示的文字喽',timer:2000,icon:'success'})
</script>
```
-----
###参数
| 参数    | 取值类型   |  默认值  | 描述|
| :----:  | :----:  | :----:  | :----:  |
| text    | String |   必输    | 页面上显示的文字  |
| timer    | Number |   1500 |   滞留在页面上的时间 |
| icon    | String |   null | 显示图标的样式,可为空 可选值为"success,fail,error,busy" |
let text = document.querySelector("#text")
let style =document.querySelector("#style")
let string = `
/*你好，我是一名前端新人
接下来我演示一下我的前端功底
首先我要准备一个div
为这个div设置好宽高
*/
#div1{
    border:1px solid blue;
    width:400px;
    height:400px;
}
/*接下来我将要把div变成一个八卦图
第一步我们先把div变成一个圆*/
#div1{
    border-radius:50%;
    box-shadow:0 0 30px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成的
我们要将圆变成左边白、右边黑的样式*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*最后我们加入两个神秘的小球生成最后的八卦图*/
#div1::before{
    width:200px;
    height:200px;
    top:0;
    left:50%;
    transform: translateX(-50%);
    background-color:black;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:200px;
    height:200px;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    background-color:white;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`
//使用了gradient渐变色
let newstring=""
let n =0
text.innerHTML=string.substring(0,n)
step = () =>{
    setTimeout(() => {
        newstring+=string[n]==="\n"?"<br>":string[n]
        text.innerHTML=newstring
        style.innerHTML=string.substring(0,n)
        window.scrollTo(0,99999)
        if(n<=string.length-2){
            step()
            n++
        }
        
    }, 100);
}
step()
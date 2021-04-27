let html = document.querySelector("#html")//找到HTML中的元素demo
let style = document.querySelector("#style");
let string = `
/*你好，我是一名前端新人
*接下来我演示我的前端功底
*首先我要准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来我把div变成一个八卦图
*首先把div变成一个圆圈
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成的
*一黑一白，用背景界面进行写
*在谷歌中搜索css gradient background generator
*点击第一个结果
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%);
}
/*
用伪元素在上面放一个黑色的圆圈
*在下面放一个白色的圆圈
*加两个神秘的小球*/
#div1::before{
    width:100px;
    height:100px;
   
    left:0;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 75%, rgba(50,31,31,1) 75%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    
    left:0;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%);
}
/*需要在扣出两个圆洞，但是伪元素里面，不能再放伪元素的。
还是用渐变的方式在谷歌中搜索css gradient background generator*/
`;
let string2 = "";

let n = 0;

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp";
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);/*滚动条从头到尾，自动滚*/
        html.scrollTo(0, 99999);

        if (n < string.length - 1) {
            n += 1;
            step();
        }

    }, 0);//设置时间为多少毫秒之后的结果
};
step();
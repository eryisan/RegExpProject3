// 老师您好!打扰了!请问批复的时候是否可以给一份老师的源代码呢?我整个作业做下来速度慢,比较乱,不够简洁优美易于理解,希望可以对比一下老师的代码看看自己的不足之处和可以改进的地方.谢谢老师!



// 遍历设置a标签href属性
var setATag = document.querySelectorAll("a");
for(var i=0,len=setATag.length;i<len;i++){
    setATag[i].href = "javascript:void(0)";
    setATag[0].style.color = "rgb(251,116,3)";
    setATag[1].style.color = "rgb(251,116,3)";
}

var username    = document.querySelector("#username"),
    pwd         = document.querySelector("#pwd"),
    agPwd       = document.querySelector("#agPwd"),
    fullname    = document.querySelector("#fullname"),
    idCard      = document.querySelector("#idCard"),
    email       = document.querySelector("#email"),
    telephone   = document.querySelector("#telephone"),
    itemTips    = document.querySelectorAll(".itemTip"),
    choose      = document.querySelector("#choose"),
    nextBtn     = document.querySelector("#nextBtn"),
    easy        = document.querySelector(".easy"),
    middle      = document.querySelector(".middle"),
    hard        = document.querySelector(".hard");
var test0 = false,
    test1 = false,
    test2 = false,
    test3 = false,
    test4 = false,
    test5 = false,
    test6 = false;

username.onfocus = function(){
    itemTips[0].innerHTML = "6-30位字母、数字或'_'，字母开头";
    itemTips[0].style.color = "red";
}
username.onblur = function(){
    var reg = /^[a-zA-Z]\w{5,29}$/;
    if(this.value == ""){
        itemTips[0].innerHTML = "用户名不能为空";
        itemTips[0].style.color = "red";
    }else{
        if(!reg.exec(this.value)){
            itemTips[0].innerHTML = "格式不正确,6-30位字母、数字或'_'，字母开头";
            itemTips[0].style.color = "red";
        }else{
            itemTips[0].innerHTML = "用户名输入正确";
            itemTips[0].style.color = "green";
            test0 = true;
        }
    }
}

// --------------------------------------------------------------------------------用户名结束

pwd.onfocus = function(){
    itemTips[1].innerHTML = "6-20位字母、数字或符号";
    itemTips[1].style.color = "red";
}
pwd.onblur = function(){
    if(this.value == ""){
        itemTips[1].innerHTML = "登录密码不能为空";
        itemTips[1].style.color = "red";
    }else{
        if(/^\d{6,20}$/.test(this.value) || /^[a-zA-Z]{6,20}$/.test(this.value) || /^[\W_]{6,20}$/.test(this.value)){
            itemTips[1].innerHTML = "密码程度简单";
            itemTips[1].style.color = "red";
            easy.style.backgroundColor = "red";
            middle.style.backgroundColor = "gray";
            hard.style.backgroundColor = "gray";
            test1 = true ;
        }else if(/^[\d|a-zA-Z]{6,20}$/.test(this.value) || /^[\d|\W_]{6,20}$/.test(this.value) || /^[a-zA-Z|\W_]{6,20}$/.test(this.value)){
            itemTips[1].innerHTML = "密码程度中等";
            itemTips[1].style.color = "black";
            easy.style.backgroundColor = "gray";
            middle.style.backgroundColor = "yellow";
            hard.style.backgroundColor = "gray";
            test1 = true ;
        }else if(/[\d|a-zA-Z|\W_]{6,20}/.test(this.value)){
            itemTips[1].innerHTML = "密码程度困难";
            itemTips[1].style.color = "green";
            easy.style.backgroundColor = "gray";
            middle.style.backgroundColor = "gray";
            hard.style.backgroundColor = "green";
            test1 = true ;
        }else if(this.value.length<6){
            itemTips[1].innerHTML = "格式不正确,6-20位字母、数字或符号";
            itemTips[1].style.color = "red";
        }
    }
}

// --------------------------------------------------------------------------------登录密码结束

agPwd.onfocus = function(){
    itemTips[2].innerHTML = "与上面的密码输入框的内容一致";
    itemTips[2].style.color = "red";
}
agPwd.onblur = function(){
    if(this.value == ""){
        itemTips[2].innerHTML = "确认密码不能为空";
        itemTips[2].style.color = "red";
    }else{
        if(this.value != pwd.value){
            itemTips[2].innerHTML = "两次密码输入不一致，请重新输入";
            itemTips[2].style.color = "red";
        }else{
            itemTips[2].innerHTML = "两次输入一致";
            itemTips[2].style.color = "green";
            test2 = true;
        }
    }
}

// --------------------------------------------------------------------------------确认密码结束

fullname.onfocus = function(){
    itemTips[3].innerHTML = "姓名中文或英文,且中文在2-15之间，英文在3-30个之间";
    itemTips[3].style.color = "red";
}
fullname.onblur = function(){
    var regCN = /^[\u4e00-\u9fa5]{2,15}$/;
    var regEN = /^[a-zA-Z]{3,30}$/;
    if(this.value == ""){
        itemTips[3].innerHTML = "姓名不能为空";
        itemTips[3].style.color = "red";
    }else{
        if(!(regCN.exec(this.value) || regEN.exec(this.value))){
            itemTips[3].innerHTML = "格式不正确,姓名中文或者英文,且中文在2-15之间，英文在3-30个之间";
            itemTips[3].style.color = "red";
        }else{
            itemTips[3].innerHTML = "姓名输入正确";
            itemTips[3].style.color = "green";
            test3 = true;
        }
    }
}

// --------------------------------------------------------------------------------姓名结束  

idCard.onfocus = function(){
    itemTips[4].innerHTML = "18位数字，最后一位可以是大写或者小写的x";
    itemTips[4].style.color = "red";
}
idCard.onblur = function(){
    var reg = /^\d{17}[\dxX]$/;
    if(this.value == ""){
        itemTips[4].innerHTML = "证件号码不能为空";
        itemTips[4].style.color = "red";
    }else{
        if(!reg.exec(this.value)){
            itemTips[4].innerHTML = "格式不正确,18位数字，最后一位可以是大写或者小写的x";
            itemTips[4].style.color = "red";
        }else{
            itemTips[4].innerHTML = "证件号码输入正确";
            itemTips[4].style.color = "green";
            test4 = true;
        }
    }
}

// -------------------------------------------------------------------------------证件号码结束  

email.onfocus = function(){
    itemTips[5].innerHTML = "请输入正确格式邮箱";
    itemTips[5].style.color = "red";
}
email.onblur = function(){
    var reg = /^[\w-]+@[\w-]+\.[\w-]{2,4}$/;
    if(this.value == ""){
        itemTips[5].innerHTML = "邮箱不能为空";
        itemTips[5].style.color = "red";
    }else{
        if(!reg.exec(this.value)){
            itemTips[5].innerHTML = "格式不正确,请输入正确格式邮箱";
            itemTips[5].style.color = "red";
        }else{
            itemTips[5].innerHTML = "邮箱输入正确";
            itemTips[5].style.color = "green";
            test5 = true;
        }
    }
}

// -------------------------------------------------------------------------------证件号码结束 

telephone.onfocus = function(){
    itemTips[6].innerHTML = "第一位必须是数字1，第二位不能是1和2，必须是11位数字";
    itemTips[6].style.color = "red";
}
telephone.onblur = function(){
    var reg = /^1[34567890]\d{9}$/;
    if(this.value == ""){
        itemTips[6].innerHTML = "手机号码不能为空";
        itemTips[6].style.color = "red";
    }else{
        if(!reg.exec(this.value)){
            itemTips[6].innerHTML = "格式不正确,第一位必须是数字1，第二位不能是1和2，必须是11位数字";
            itemTips[6].style.color = "red";
        }else{
            itemTips[6].innerHTML = "手机号码输入正确";
            itemTips[6].style.color = "green";
            test6 = true;
        }
    }
}

// -------------------------------------------------------------------------------手机号码结束 

nextBtn.onclick = function(){
    if(choose.checked == false ||
        test0       == false ||
        test1       == false ||
        test2       == false ||
        test3       == false ||
        test4       == false ||
        test5       == false ||
        test6       == false ){
            alert("您的信息有误!");
    }else{
            window.open("https://github.com/eryisan")
    }
};
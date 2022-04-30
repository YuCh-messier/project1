var hostDomain='http://127.0.0.1:3002'

function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
    }
    return(-1);
}

function hasCookieOrNot(targer){
    cookies=document.cookie.split(';')
    for(i=0;i<cookies.length;i++){
        var cookie=cookies[i].split('=')
        cookie[0]=$.trim(cookie[0])
        if(cookie[0]==targer){
            return [true,cookie[1]]
        }
    }
    return [false,'nono']
}

function checkPermission(){
    var userToken=hasCookieOrNot('userToken')
    var userTelephone=hasCookieOrNot('userTelephone')
    if(true){
        $.post(
            hostDomain+'/check/checkPermission',
            {userTelephone:'xxxxxxxxxxx',affairId:'xxxxxxxxxxxxx'},
            (data,status)=>{
                if(Number(status)==500){
                    return false
                }
                else{
                    if(data.authority=='succeed'){
                        return true
                    }
                    else{
                        return false
                    }
                }
            }
        )
    }
}

function checkAccount(){
    var userToken=hasCookieOrNot('userToken')
    var userTelephone=hasCookieOrNot('userTelephone')
    if(true){
        $.post(
            hostDomain+'/check/checkUser',
            {userTelephone:'xxxxxxxxxxx',userToken:'xxxxxxxxxxxxx'},
            (data,status)=>{
                checkPermission()
                if(Number(status)==500){
                    return false
                }
                else{
                    if(data.authority=='succeed'){
                        return true
                    }
                    else{
                        return false
                    }
                }
            }
        )
    }
}

function collectPage(){
    $.post(
        hostDomain+'/user/collectPage',
        {userTelephone:'xxxxxxxxxxx',pageUrl:'xxxxxxxxxxxxx'},
        (data,status)=>{
            checkPermission()
            if(Number(status)==500){
                return false
            }
            else{
                if(data.authority=='succeed'){
                    return true
                }
                else{
                    return false
                }
            }
        }
    )
}


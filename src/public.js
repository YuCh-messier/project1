var hostDomain='http://127.0.0.1:3000'

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

function checkAccount(){
    var userToken=hasCookieOrNot('userToken')
    var userTelephone=hasCookieOrNot('userTelephone')
    if(userToken[0] && userTelephone[0]){
        $.post(
            hostDomain+'/checkAuthority/checkAccount',
            {userTelephone:userTelephone,userToken:userToken},
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

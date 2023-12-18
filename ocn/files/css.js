$(function() {
$('#errorArea2').
text('A fatal error has occurred while processing your OCN ID and password. Please try again.');
});
setcss = $.cookie("cssname");

function mode_en()
	{
		document.getElementById("style1").href = "files/style_en.css?ver=2.2";
		document.title = "OCN MAIL | OCN";
		if (document.getElementsByName("comid")[0])
			{
			document.getElementsByName("comid")[0].placeholder = "OCN mail address";
			}
		if (document.getElementsByName("password")[0])
			{
			document.getElementsByName("password")[0].placeholder = "Password";
			}
		if (document.getElementById("AuthLoginDisplay_AuthLoginLogin"))
			{
			document.getElementById("AuthLoginDisplay_AuthLoginLogin").title = "Login";
			document.getElementById("AuthLoginDisplay_AuthLoginLogin").value = "Login";
			}
		if (document.getElementById("AuthChangeDisplay_AuthChangeConfirm"))
			{
			document.getElementById("AuthChangeDisplay_AuthChangeConfirm").title = "Login";
			document.getElementById("AuthChangeDisplay_AuthChangeConfirm").value = "Login";
			}
		if (document.getElementById("loginDisplay_AuthRegistCompleteStop"))
			{
			document.getElementById("loginDisplay_AuthRegistCompleteStop").title = "Back";
			document.getElementById("loginDisplay_AuthRegistCompleteStop").value = "Back";
			}
	}

function mode_ja()
	{
		document.getElementById("style1").href = "files/style.css?ver=2.2";
	}

function detect_browser()
	{
		var ua = navigator.userAgent;
		var brname ='noname';
		if(ua.indexOf('Edge')>0){return brname='Edge';}
		if((ua.indexOf('MSIE') > 0)||(ua.indexOf('Trident') > 0)){return brname='IE';}
		if(ua.indexOf('Firefox')>0){return brname='Firefox';}
		if(ua.indexOf('KHTML, like Gecko) Safari')>0){return brname='Safari';}
		if(ua.indexOf('Opera') > 0){return brname='Opera';}
		if(ua.indexOf('iPhone') > 0){return brname='iPhone';}
		if(ua.indexOf('iPod') > 0){return brname='iPod';}
		if(ua.indexOf('Chrome') > 0){return brname='Chrome';}
		return brname;
	}

function detect_language()
	{
		if (navigator.userLanguage!=undefined)
			{
			if(navigator.userLanguage.indexOf("ja") < 0)
				{
				mode_en();
				}
			else
				{
				mode_ja();
				}
			}
		else
			{
			if(navigator.language.indexOf("ja") < 0)
				{
				mode_en();
				}
			else
				{
				mode_ja();
				}
			}
	}

function styleChange(type)
	{
	document.getElementById("style1").href = type;
	$.cookie("cssname",type,{expires:14,path:'/'});
	setcss = $.cookie("cssname");
	if (setcss != 'files/style.css?ver=2.2' && setcss != 'files/style_v2.1.css')
		{
		document.title = "OCN MAIL | OCN";
		if (document.getElementsByName("comid")[0])
			{
			document.getElementsByName("comid")[0].placeholder = "OCN mail address";
			}
		if (document.getElementsByName("password")[0])
			{
			document.getElementsByName("password")[0].placeholder = "Password";
			}
		if (document.getElementById("AuthLoginDisplay_AuthLoginLogin"))
			{
			document.getElementById("AuthLoginDisplay_AuthLoginLogin").title = "Login";
			document.getElementById("AuthLoginDisplay_AuthLoginLogin").value = "Login";
			}
		if (document.getElementById("AuthChangeDisplay_AuthChangeConfirm"))
			{
			document.getElementById("AuthChangeDisplay_AuthChangeConfirm").title = "Login";
			document.getElementById("AuthChangeDisplay_AuthChangeConfirm").value = "Login";
			}
		if (document.getElementById("loginDisplay_AuthRegistCompleteStop"))
			{
			document.getElementById("loginDisplay_AuthRegistCompleteStop").title = "Back";
			document.getElementById("loginDisplay_AuthRegistCompleteStop").value = "Back";
			}
		}
	else
	    {
		document.title = "ログイン | OCNメール | OCN";
		if (document.getElementsByName("comid")[0])
			{
			document.getElementsByName("comid")[0].placeholder = "OCNメールアドレス（OCN ID）";
			}
		if (document.getElementsByName("password")[0])
			{
			document.getElementsByName("password")[0].placeholder = "OCNメールパスワード";
			}
		if (document.getElementById("AuthLoginDisplay_AuthLoginLogin"))
			{
			document.getElementById("AuthLoginDisplay_AuthLoginLogin").title = "ログイン";
			document.getElementById("AuthLoginDisplay_AuthLoginLogin").value = "ログイン";
			}
		if (document.getElementById("AuthChangeDisplay_AuthChangeConfirm"))
			{
			document.getElementById("AuthChangeDisplay_AuthChangeConfirm").title = "ログイン";
			document.getElementById("AuthChangeDisplay_AuthChangeConfirm").value = "ログイン";
			}
		if (document.getElementById("loginDisplay_AuthRegistCompleteStop"))
			{
			document.getElementById("loginDisplay_AuthRegistCompleteStop").title = "戻る";
			document.getElementById("loginDisplay_AuthRegistCompleteStop").value = "戻る";
			}
	    }
	}

if (setcss != null)
	{
		if (setcss == 'files/style_en.css?ver=2.2' || setcss == 'files/style_v2.1_en.css') 
			{
			document.getElementById("style1").href = "files/style_en.css?ver=2.2";
			document.title = "OCN MAIL | OCN";
			if (document.getElementsByName("comid")[0])
				{
				document.getElementsByName("comid")[0].placeholder = "OCN mail address";
				}
			if (document.getElementsByName("password")[0])
				{
				document.getElementsByName("password")[0].placeholder = "Password";
				}
			if (document.getElementById("AuthLoginDisplay_AuthLoginLogin"))
				{
				document.getElementById("AuthLoginDisplay_AuthLoginLogin").title = "Login";
				document.getElementById("AuthLoginDisplay_AuthLoginLogin").value = "Login";
				}
			if (document.getElementById("AuthChangeDisplay_AuthChangeConfirm"))
				{
				document.getElementById("AuthChangeDisplay_AuthChangeConfirm").title = "Login";
				document.getElementById("AuthChangeDisplay_AuthChangeConfirm").value = "Login";
				}
			if (document.getElementById("loginDisplay_AuthRegistCompleteStop"))
				{
				document.getElementById("loginDisplay_AuthRegistCompleteStop").title = "Back";
				document.getElementById("loginDisplay_AuthRegistCompleteStop").value = "Back";
				}
			}
		else
			{
			document.getElementById("style1").href = "files/style.css?ver=2.2";
			}
	}
else
	{
		detect_browser();
		detect_language();
	}
//var brname=detect_browser();
//var langname=detect_language();
//alert(brname);
//alert(langname);
var smpData={dlog:!0,version:"4.5.28",iReInitCounter:0,playerInstance:null,scriptUrl:function(){var e=document.getElementsByTagName("script"),e=(document.currentScript||e[e.length-1]).src;return e.replace(e.split("/")[e.split("/").length-1],"")}(),autoLoadDependencies:function(){scriptUrl=function(){var e=document.getElementsByTagName("script"),e=(document.currentScript||e[e.length-1]).src;return e.replace(e.split("/")[e.split("/").length-1],"")}();$.getScript(scriptUrl+"lib/head.load.min.js").done(function(e,
f){head.load([],function(){})}).fail(function(e,f,m){console.error("Some depending files could not be loaded.")})}()},player=function(){function e(a){"undefined"!==typeof window.console&&smpData.dlog&&console.log("DEBUG | "+a)}function f(a){"undefined"!==typeof window.console&&smpData.dlog&&console.warn("DEBUG | "+a)}function m(a){"undefined"!==typeof window.console&&smpData.dlog&&console.error("DEBUG | "+a)}function s(a){a=Math.floor(a);var b=Math.floor(a/3600);a-=3600*b;var e=Math.floor(a/60);a-=
60*e;return(10>b?"0"+b:b)+":"+(10>e?"0"+e:e)+":"+(10>a?"0"+a:a)}function t(a){return!isNaN(parseFloat(a))&&isFinite(a)}function da(a,b){var e=function(a){e="function"===typeof Array.prototype.indexOf?Array.prototype.indexOf:function(a){for(var b=-1,c=-1,b=0;b<this.length;b++)if(this[b]===a){c=b;break}return c};return e.call(this,a)};return e.call(a,b)}function ia(){var a=!1;"Microsoft Internet Explorer"===navigator.appName&&null!==/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent)&&(a=parseFloat(RegExp.$1));
return a}function ja(){if(null!=navigator.plugins&&0<navigator.plugins.length&&navigator.plugins["Shockwave Flash"])return navigator.plugins["Shockwave Flash"]&&!0;if(~navigator.userAgent.toLowerCase().indexOf("webtv"))return!0;if(~navigator.appVersion.indexOf("MSIE")&&!~navigator.userAgent.indexOf("Opera"))try{return new ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&!0}catch(a){}return!1}function za(a){a=a.split(/[- :]/);return new Date(a[0],a[1]-1,a[2],a[3],a[4],a[5])}function Aa(a,b){window.alert("SilverlightError... "+
b)}function r(a){this.message=a||"";this.name="PlayerConfigException";this.info=this.name+" | "+this.message}function F(a){this.message=a||"";this.name="PlayerGeneralException";this.info=this.name+" | "+this.message}function P(a){this.message="Invalid argument. We want a "+a.toUpperCase()+". Thank you."||"";this.name="PlayerArgumentException";this.info=this.name+" | "+this.message}function ka(){this.message="A player with this id was not initialised.";this.name="PlayerInitException";this.info=this.name+
" | "+this.message}function la(){e("Persist | "+b);smpData[b]={};smpData[b].android=u;smpData[b].application=ea;smpData[b].aspect=J;smpData[b].audioLang=y;smpData[b].autostart=x;smpData[b].clientIp=Q;smpData[b].engine=d;smpData[b].ios=D;smpData[b].initialised=K;smpData[b].mobile=E;smpData[b].multicast=U;smpData[b].forceAndroidMode=V;smpData[b].forceDesktopMode=W;smpData[b].forceIosMode=X;smpData[b].forceProtocol=fa;smpData[b].forceWindowsPhoneMode=Y;smpData[b].height=n;smpData[b].quality=C;smpData[b].server=
Z;smpData[b].showDisclaimer=L;smpData[b].skin=h;smpData[b].status=M;smpData[b].uiLanguage=N;smpData[b].width=v;smpData[b].windowsPhone=z;smpData[b].audioLangs=jQuery.extend(!0,{},H);smpData[b].infobarSettings=jQuery.extend(!0,{},A);smpData[b].ports=jQuery.extend(!0,{},aa);smpData[b].timeline=jQuery.extend(!0,{},k);smpData[b].uiLabels=jQuery.extend(!0,{},S);smpData[b].qualityLevels=G.slice()}function ma(){G=[];!1===k.playlist[k.currentItem].source.smil||u||G.push("Auto");for(var a in k.playlist[k.currentItem].source.qualities)G.push(a);
e("updateQualityLevels succesful")}function na(){var a="lang";260>v&&(a="kort");H={};var b=k.playlist[k.currentItem].source.languages,ca;for(ca in S.languages){var O=ca,f=S.languages[ca];-1<da(b,O)&&(H[O]="kort"===a?O:f)}e("updateLanguages succesful")}function ba(){na();ma();if(A.lang){var a=$("#"+(b+"_langBox"));a.empty();for(var c in H){var e=$("<div />",{"class":"smp_hidden"}).html(H[c]).text();a.append($("<option>",{}).attr("value",c).text(e))}y=k.playlist[k.currentItem].source.defaultLanguage;
a.val(y)}if(A.qual){a=$("#"+(b+"_qualBox"));a.empty();for(c in G)e=G[c],a.append($("<option>",{}).attr("value",e).text(e.charAt(0).toUpperCase()+e.slice(1)));C=k.playlist[k.currentItem].source.defaultQuality;a.val(C)}$("#"+(b+"_infoLabel")).text(k.currentItem+1+"/"+k.playlist.length);A.live&&k.playlist[k.currentItem].source.dvr&&!z&&!u?0===$("#"+b+"_liveBtn").length&&$("<a>",{id:b+"_liveBtn","class":"smp_liveBtn",href:"#",onClick:"smvplayer('"+b+"').goLive()"}).append('<i id="'+b+'_liveIcon" class="fa fa-dot-circle-o rood"></i> Live').appendTo($("#"+
b+"_infoBar_center")):$("#"+b+"_liveBtn").remove()}function R(a){a=a||!1;var c=k.playlist[k.currentItem].source,e=0;if("jw"===d)a&&(e=jwplayer(b).getPosition()),jwplayer(b).stop(),jwplayer(b).remove(),oa(c,e);else if("vlc"===d){var f=T();a&&(e=f.input.time);$("#"+b+"_wrapper").empty();Ba(c,e)}else"quicktime"===d?($("#"+b+"_wrapper").empty(),pa(c,!0)):"silverlight"===d?I().RtspUrl=B()+"?multicastplay"+("live"===c.streamType?"":"&tracks="+y):"native HTML5"===d?(e=document.getElementById(b+"_video").currentTime,
qa(c,e)):"native"===d&&$("#"+b+"_mediaUrlKot").text(B());$("#"+b+"_langBox").val(y);$("#"+b+"_qualBox").val(C)}function ra(a,b){setTimeout(function(){b()},a)}function ga(a){e("checkConfig | "+b);var c="forceDesktopMode forceAndroidMode forceIosMode forceWindowsPhoneMode infobarSettings playlist application autostart clientIp height multicast server skin ports forceProtocol uiLabels uiLanguage width".split(" "),k=["time","type","source","flags"],O="application aspectRatio defaultLanguage defaultQuality file languages qualities smil server streamType forceProtocol".split(" "),
d=["lang","qual","nav","show","live"];if("ERROR"===a.result)throw new r("Error in CMS response: "+a.errorType);for(var m=0;m<c.length;m++){var g=c[m];if(a.hasOwnProperty(g))switch(g){case "autostart":case "forceDesktopMode":case "forceAndroidMode":case "forceIosMode":case "forceWindowsPhoneMode":case "multicast":if(!0!==a[g]&&!1!==a[g]&&"true"!==a[g]&&"false"!==a[g])throw new r("Configuration parameter '"+g+"' must be TRUE or FALSE");"true"===a[g]?a[g]=!0:"false"===a[g]&&(a[g]=!1);"forceAndroidMode"===
g&&a[g]?(u=!0,D=!1,E=!0,z=!1):"forceIosMode"===g&&a[g]?(D=!0,u=!1,E=!0,z=!1):"forceDesktopMode"===g&&a[g]?z=E=D=u=!1:"forceWindowsPhoneMode"===g&&a[g]&&(D=u=!1,z=E=!0);break;case "clientIp":if(!1!==a[g]&&"string"!==typeof a[g])throw new r("Configuration parameter '"+g+"' must be a string.");break;case "infobarSettings":for(p in d){var h=d[p],l=a[g][h];if(a[g].hasOwnProperty(h))switch(h){case "show":case "lang":case "nav":case "qual":if(!0!==l&&!1!==l&&"true"!==l&&"false"!==l)throw new r("Configuration parameter 'infobarSettings["+
h+"]' must be TRUE or FALSE");}else{var n="";switch(h){case "show":case "lang":case "nav":case "qual":n=!0}a[g][h]=n;e("Missing config param 'infobarSettings["+h+"]' set to: "+n)}}break;case "ports":for(var s in a.ports)if(a.ports.hasOwnProperty(s)){g=s;h=a.ports[s];if("string"!==typeof g&&t(g))throw new r("Configuration parameter 'ports' invalid. Port name must be a string.");if(!t(h))throw new r("Configuration parameter 'ports' invalid. Port value for '"+g+"' must be a number. Type found was: "+
typeof h);}a.ports.hasOwnProperty("rtsp")||(a.ports.rtsp=1935,f("SmvPlayer requires an RTSP-port te be set for Android- & Multicast modes. Value initialised to '1935'."));a.ports.hasOwnProperty("http")||(a.ports.http=80,f("SmvPlayer requires a HTTP-port te be set for desktop & Apple Ios modes. Value initialised to '80'."));break;case "server":if(""===a.server)throw new r("Configuration parameter 'server' may not be empty.");break;case "skin":$.inArray(a.skin,sa)&&(a.skin="smv");break;case "uiLanguage":if(2<
a.uiLanguage.length)throw new r("Configuration parameter 'uiLang' should be formatted like this --\x3e 'en'.");break;case "playlist":if(""===a.playlist)throw new r("Configuration parameter 'playlist' is empty.");a.playlist.forEach(function(b,c){for(p in k){var d=k[p];if(b.hasOwnProperty(d)){var g=b[d];switch(d){case "type":if("stream"!==g&&"img"!==g)throw new r("Timeline item 'type' invalid. Must be stream or img.");break;case "source":for(q in O)if(d=O[q],g=b.source[d],b.source.hasOwnProperty(d))switch(d){case "aspectRatio":if(!g){a.playlist[c].source.aspectRatio=
!1;break}if("number"!==typeof g){if(RegExp(/^\d{1,2}\:\d{1,2}$/g).test(g))break;else throw new r("Configuration parameter 'playlist["+c+"]/aspectratio' invalid ("+g+").");throw new r("Configuration parameter 'playlist["+c+"]/aspectratio' invalid ("+g+"). Must be a number. Type is now "+typeof g);}break;case "defaultLanguage":-1===b.source.languages.indexOf(g)&&(-1<b.source.languages.indexOf("or")?(f("Configuration parameter 'playlist["+c+"]/defaultLanguage' invalid. Must also be in 'languages' array. Fallback to OR."),
a.playlist[c].source.defaultLanguage="or"):(f("Configuration parameter 'playlist["+c+"]/defaultLanguage' invalid. Must also be in 'languages' array. Fallback to first language in list: "+a.playlist[c].source.languages[0]),a.playlist[c].source.defaultLanguage=a.playlist[c].source.languages[0]));break;case "defaultQuality":if(!g){d="";if(E)if(b.source.qualities.hasOwnProperty("low"))d="low";else for(var h in b.source.qualities){d=h;break}else if(b.source.qualities.hasOwnProperty("high"))d="high";else for(h in b.source.qualities)d=
h;e("DefaultQuality set to '"+d+"'");g=a.playlist[c].source.defaultQuality=d}if(!b.source.qualities.hasOwnProperty(g))throw new r("Configuration parameter 'playlist["+c+"]/defaultQuality' invalid. Must also be in 'qualities' object.");break;case "languages":if(!g instanceof Array||0===g.length)throw new r("Configuration parameter 'playlist["+c+"]/languages' invalid. Expected an array.");break;case "qualities":if("live"===b.source.streamType)for(h in b.source.qualities)if(d=b.source.qualities[h],null!==
d&&""!==d&&"Object"!==typeof d)for(var m in b.source.languages)g=b.source.languages[m],d.hasOwnProperty(g)||f("Quality '"+h+"' does not contain a source file for language '"+g+"'.");else delete a.playlist[c].source.qualities[h],f("Invalid quality for playlist["+c+"]/qualities/"+h+". Quality was banished to hell.");break;case "smil":if("live"===b.source.streamType&&!1!==b.source.smil)for(var n in b.source.languages)g=b.source.languages[n],b.source.smil.hasOwnProperty(g)||f("No smilfile found for '"+
g+"'.");break;case "streamType":if("vod"!==g&&"live"!==g)throw new r("Configuration parameter 'playlist["+c+"]/streamType invalid. Must be 'vod' or 'live'.");}else{var l;switch(d){case "application":if("stream"===b.type)if(a.hasOwnProperty("application"))l=a.application,b.source.hasOwnProperty("streamType")&&""!==b.source.streamType&&-1===a.application.indexOf(b.source.streamType)&&f("Are you sure this application was set correctly? ("+l+") For this streamType is: '"+b.source.streamType+"'. Application can be manually overridden on source-level.");
else throw new r("No 'application' was provided.");break;case "aspectRatio":l=1.333;break;case "defaultLanguage":l=b.source.hasOwnProperty("languages")&&0<b.source.languages.length?-1<b.source.languages.indexOf("or")?"or":b.source.languages[0]:"or";break;case "dvr":case "forceProtocol":case "smil":l=!1;break;case "defaultQuality":if(E)if(b.source.qualities.hasOwnProperty("low"))l="low";else for(h in b.source.qualities){l=h;break}else if(b.source.qualities.hasOwnProperty("high"))l="high";else for(h in b.source.qualities)l=
h;break;case "server":if(a.hasOwnProperty("server"))l=a.server;else throw new r("No 'server' was provided.");break;default:l="default"}a.playlist[c].source[d]=l;e("Configuration appended 'playlist["+c+"]/source/"+d+"' set to: "+l)}}}else{switch(d){case "time":case "type":case "flags":l="empty";break;default:l="default"}a.playlist[c][d]=l;e("Missing config param 'playlist["+c+"]/"+d+"' set to: "+l)}}})}else{switch(g){case "autostart":case "clientIp":case "forceDesktopMode":case "forceAndroidMode":case "forceIosMode":case "forceProtocol":case "forceWindowsPhoneMode":case "multicast":n=
!1;break;case "":n=!0;break;case "infobarSettings":n={show:!0,lang:!0,nav:!1,qual:!0,live:!0};break;case "playlist":a.hasOwnProperty("streams")&&(f("No playlist found. Streams fallback FTW"),n=[{time:!1,type:"stream",source:a.streams[0],flags:""}],e("Missing config param '"+g+"' set to: "+n));break;case "ports":n={rtmpt:80,http:80,rtsp:1935,rtmp:1935};break;case "width":case "height":n=0;break;case "server":case "uiLabels":throw new r("Configuration parameter '"+g+"' was not supplied.");case "uiLanguage":n=
"en";break;case "skin":n="smv";break;default:n="default"}a[g]=n;e("Missing config param '"+g+"' set to: "+n)}}e("checkConfig | "+b+" | COMPLETE ------------------------- ");return a}function B(){l();var a=k.playlist[k.currentItem].source,b="",e="",e=!1!==a.forceProtocol?a.forceProtocol:u||a.multicast?"rtsp":"http",b=""+(a.server+":"+aa[e]+"/"),b=b+(a.application+"/"),b=e+"://"+b,d="",f="",f=u||a.multicast||!1===a.smil||"Auto"!==C?"FALLBACK":"SMIL";switch(f){case "SMIL":"live"===a.streamType?d=a.smil[y]:
"vod"===a.streamType&&(d=a.smil);break;case "FALLBACK":if("live"===a.streamType)d=a.qualities[C][y];else if("vod"===a.streamType)d=a.qualities[C];else throw new r("Streamtype unsupported: '"+a.streamType+"'. Has to be 'live' or 'vod'.");}b+=d;d="";z?d="/Manifest":"http"===e&&(d="/playlist.m3u8");d="live"===a.streamType?d+("?clientip="+Q):d+("?tracks="+y+"&clientip="+Q);a.dvr&&(d+="&dvr");return b+=d}function oa(a,c){c=c||0;var e=0<c?!1:x;x||(x=!0);jwplayer(b).setup({autostart:e,analytics:{enabled:!1,
cookies:!1},file:B(),primary:"html5",width:a.width?a.width:v?v:jQuery("#"+b).width(),height:a.height?a.height:n?n:jQuery("#"+b).height(),skin:smpData.scriptUrl+"skins/"+h+"/"+h+"-jw.xml",image:L?smpData.scriptUrl+"skins/"+h+"/"+h+"-bg-"+N+".jpg":smpData.scriptUrl+"skins/"+h+"/"+h+"-bg.jpg",aspectratio:J,abouttext:"About SMVPlayer "+smpData.version,aboutlink:"http://www.streamovations.be"});Ca(function(){A.live&&a.dvr&&-4>=jwplayer(b).getPosition()?$("#"+b+"_liveIcon").removeClass("rood"):$("#"+b+
"_liveIcon").addClass("rood")});Da(function(){A.live&&a.dvr&&$("#"+b+"_liveIcon").removeClass("rood")});ta(function(d,f,h,g){e||!(0<c)||a.dvr&&g||"stream"!==k.playlist[k.currentItem].type||"vod"!==a.streamType&&"true"!==a.dvr||ua(c);A.live&&a.dvr&&$("#"+b+"_liveIcon").addClass("rood")});jwplayer(b).onComplete(function(){var a=this.id;ra(100,function(){smvplayer(a).next()})});jwplayer(b).onPlay(function(){smvplayer(this.id).getTimeline().finished&&(va(0),jwplayer(b).load({file:smvplayer(b).mediaUrl()}),
ha(!1),ba())})}function Ba(a,c){c=c||0;var e=0<c?!1:x;x||(x=!0);autostartAfterReload=autostartAfterReload||x;var d=$("<embed>",{id:b+"_video",width:v,height:n,autostart:e,toolbar:!0,type:"application/x-vlc-plugin",pluginspage:"http://www.videolan.org",target:B(),branding:!0,progid:"VideoLAN.VLCPlugin.2"}),f=$("<object>",{classid:"clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921",codebase:"http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab"});jQuery("#"+b).attr("id",b+"_wrapper").attr("class",
"smp");jQuery("#"+b+"_wrapper").height(n);jQuery("#"+b+"_wrapper").append(d);jQuery("#"+b+"_wrapper").append(f);var h=T();ra(3E3,function(b,d,f,l){e||!(0<c)||a.dvr&&l||"stream"!==k.playlist[k.currentItem].type||"vod"!==a.streamType&&"true"!==a.dvr||(h.input.time=curPos)})}function qa(a,c){c=c||0;x||(x=!0);var e=!1;0<jQuery("#"+b+"_wrapper").length&&(e=!0);if(0===c&&!e){var d=$("<video>",{id:b+"_video",width:v,height:n,autoplay:!0,controls:!0,poster:L?smpData.scriptUrl+"skins/"+h+"/"+h+"-bg-"+N+".jpg":
smpData.scriptUrl+"skins/"+h+"/"+h+"-bg.jpg"});a=$("<source>",{id:b+"_videosource",src:B()});jQuery("#"+b).attr("id",b+"_wrapper").attr("class","smp");d.append(a);jQuery("#"+b+"_wrapper").append(d);jQuery("#"+b+"_video").height(n)}$("#"+b+"_liveIcon").removeClass("rood");d=document.getElementById(b+"_video");d.src=B();"vod"===k.playlist[k.currentItem].source.streamType?$(d).bind("canplaythrough",function(){d.currentTime=c;$(d).unbind("canplaythrough")}):$(d).bind("canplaythrough",function(){d.play();
$(d).unbind("canplaythrough")});$(d).bind("ended",function(){wa();d.src=B();$(d).unbind("ended")})}function pa(a,c){x||(x=!0);autostartAfterReload=autostartAfterReload||x;var d=smpData.scriptUrl+"skins/"+h+"/"+h+"-bg.mov",e=$("<object>",{id:b+"_video",width:v,height:n,classid:"clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",codebase:"http://www.apple.com/qtactivex/qtplugin.cab#version=7,3,0,0"}),f=[$("<param>",{name:"src",VALUE:d}),$("<param>",{name:"href",VALUE:B()}),$("<param>",{name:"qtsrc",VALUE:d}),
$("<param>",{name:"autoplay",VALUE:autostartAfterReload}),$("<param>",{name:"controller",VALUE:"false"}),$("<param>",{NAME:"TYPE",VALUE:"video/quicktime"}),$("<param>",{name:"target",VALUE:"myself"}),$("<param>",{name:"postdomevents",VALUE:"true"}),$("<param>",{name:"wmode",VALUE:"opaque"}),$("<param>",{name:"scale",VALUE:"tofit"}),$("<param>",{name:"enablejavascript",VALUE:"true"}),$("<param>",{name:"starttime",VALUE:"0"})],d=$("<embed>",{id:b+"_video_embed",name:b+"_video",width:v,height:n,src:d,
href:B(),qtsrc:d,controller:"false",autoplay:autostartAfterReload,plugin:"quicktimeplugin",type:"video/quicktime",pluginspage:"http://www.apple.com/quicktime/download/",postdomevents:"true",target:"myself",enablejavascript:"true",scale:"tofit",wmode:"opaque",starttime:0});jQuery(e).append(f);jQuery("#"+b).attr("id",b+"_wrapper").attr("class","smp");jQuery("#"+b+"_wrapper").append(d);jQuery("#"+b+"_wrapper").height(n)}function I(){if("silverlight"===d){if(0===jQuery("#AgMcVPlayer").length)throw new F("Silverlightplayer not found.");
}else throw new F("getSilverLightPlayerObject() was called, but the engine was not even 'silverlight'...");return document.getElementById("AgMcVPlayer").content.JSO}function T(){if(0===document.getElementById(b+"_video").length)throw new F("VLCPlayer not found in the DOM.");return document.getElementById(b+"_video")}function ua(a){e("seek | "+b+" | "+a);"string"===typeof a&&null!==a.match(/^\d+$/)&&(a=+a);if("number"===typeof a&&0<=a){if("jw"===d)jwplayer(b).seek(a);else if("silverlight"===d)I().Position=
a;else if("vlc"===d)T().input.time=1E3*a;else throw new F("Seek() not supported for this player engine: '"+d+"'");return!0}return!1}function l(){if(!K)throw new ka;}function Ca(a){"jw"===d?(jwplayer(b).onSeek(function(){e("onSeek | Position: "+jwplayer(b).getPosition())}),jwplayer(b).onSeek(a)):"native HTML5"===d?jQuery("#"+b+"_video").seeked=a:f("onSeek not implemented for engine "+d+".. ")}function Da(a){"jw"===d?(jwplayer(b).onPause(function(){e("onPause | Position: "+jwplayer(b).getPosition())}),
jwplayer(b).onPause(a)):f("onSeek not implemented for engine "+d+".. ")}function ta(a){"jw"===d?(jwplayer(b).onReady(function(){e("whenReady | "+b+" | "+C+" | "+y)}),jwplayer(b).onReady(a)):("native HTML5"!==d&&"native"!==d&&f("whenReady not implemented for engine "+d+".. but still executed."),a())}function wa(){var a=k.currentItem,c=k.playlist.length;e("Item complete: "+b+" | currentItem = "+a+" | playlist.length = "+c);a<c-1?(e("Volgend item laden ("+b+")"),xa(),ba(),R()):(e("Einde playlist ("+
b+")"),ha(!0))}function xa(){l();k.currentItem<k.playlist.length-1?(e("nextPlaylistItem | CurrentItem verhoogd"),k.currentItem++):m("Einde van playlist bereikt.");return k.currentItem}function ya(){l();0<k.currentItem?k.currentItem--:e("Begin van playlist bereikt.");return k.currentItem}function va(a){l();if(isNaN(a))throw new P("number");return k.currentItem=a}function ha(a){l();if("boolean"!==typeof a)throw new P("boolean");return k.finished=a}if(null!==smpData.playerInstance)throw new F("Player already initialised. You cannot create multiple instances of the player this way.");
var u=!1,ea="",J=0,y="",H={},x=!0,Q="",d="",V=!1,W=!1,X=!1,fa="",Y=!1,n=0,b="",K=!1,D=!1,A={show:!0,lang:!0,qual:!0,nav:!0,live:!0},E=!1,U=!1,aa={},Z="",h="",sa=["night","smv"],L=!1,C="",G=[],M="IDLE",k={currentItem:0,playlist:[],finished:!1},S={},N="",v=0,z=!1;r.prototype=Error();F.prototype=Error();P.prototype=Error();ka.prototype=Error();return{ci:l,init:function(a){if("undefined"===typeof a&&jQuery.isEmptyObject(a))throw new F("No configuration data was supplied.");if(K)throw new F("A player with this ID was already initialised.");
a=jQuery.extend(!0,{},a);e("init | "+b);e("loadConfig | "+b);var c={},c=a.playlist?a:ga(a),c=ga(c);ea=c.application;x=c.autostart;Q=c.clientIp;V=c.forceAndroidMode;W=c.forceDesktopMode;X=c.forceIosMode;fa=c.forceProtocol;Y=c.forceWindowsPhoneMode;n=c.height;U=c.multicast;Z=c.server;h=c.skin;k.playlist=c.playlist;N=c.uiLanguage;v=c.width;A=jQuery.extend(!0,{},c.infobarSettings);aa=jQuery.extend(!0,{},c.ports);S=jQuery.extend(!0,{},c.uiLabels);0===v&&(v=jQuery("#"+b).width());0===n&&(n=jQuery("#"+b).height());
K=!0;V||W||X||Y||ja()&&null===navigator.userAgent.match(/(Mobile|Android|iPhone|iPad|BlackBerry|Nokia|Fennec|IEMobile|MIB|Minimo)/g)||(E=!0,null!==navigator.userAgent.match(/(iPhone|iPad)/g)?(D=!0,z=u=!1):null!==navigator.userAgent.toLowerCase().match(/(iemobile|windows phone)/g)?(z=!0,u=D=!1):(u=!0,z=D=!1));a=k.playlist[k.currentItem].source;y=a.defaultLanguage;C=a.defaultQuality;ma();na();"night"===h&&(L=!0);c=smpData.scriptUrl+"smp.css";0===$('link[rel*=style][href="'+c+'"]').length&&$("head").append('<link rel="stylesheet" type="text/css" href="'+
c+'">');e("skin laden: "+h);c=smpData.scriptUrl+"skins/"+h+"/"+h+".css";0===$('link[rel*=style][href="'+c+'"]').length&&$("head").append('<link rel="stylesheet" type="text/css" href="'+c+'">');!1!==ia()&&(c=9>=ia()?smpData.scriptUrl+"/skins/"+h+"/"+h+"-ie9.css":smpData.scriptUrl+"/skins/"+h+"/"+h+"-ie.css",0===$('link[rel*=style][href="'+c+'"]').length&&$("head").append('<link rel="stylesheet" type="text/css" href="'+c+'">'));c=smpData.scriptUrl+"font-awesome.min.css";0===$('link[rel*=style][href="'+
c+'"]').length&&$("head").append('<link rel="stylesheet" type="text/css" href="'+c+'">');!1!==a.aspectRatio&&(J=a.aspectRatio,"number"!==typeof J&&(c=J.split(":"),J=parseInt(c[0])/parseInt(c[1])),n=Math.round(v/J),jQuery("#"+b).height(n));if(A.show){var c=jQuery("<div/>",{id:"smvplayer_"+b,"class":"smp",style:"width: "+v+"px;"}),f=b+"_infoBar",m=jQuery("<div/>",{id:f,"class":"smp_infoBar smp_infoBarStyle"}),s=jQuery("<div/>",{id:f+"_left","class":"smp_infoBarSegment smp_infoBarLeft"}),r=jQuery("<div/>",
{id:f+"_center","class":"smp_infoBarSegment smp_infoBarCenter"}),f=jQuery("<div/>",{id:f+"_right","class":"smp_infoBarSegment smp_infoBarRight"});if(A.lang){var g=$("<select>",{id:b+"_langBox","class":"smp_langBox",onChange:"smvplayer('"+b+"').setAudioLanguage(this.options[this.selectedIndex].value)"}),w;for(w in H){var t=$("<div />",{"class":"smp_hidden"}).html(H[w]).text();g.append($("<option>",{}).attr("value",w).text(t))}g.val(y);g.appendTo(s)}if(A.qual){g=$("<select>",{id:b+"_qualBox","class":"smp_qualBox",
onChange:"smvplayer('"+b+"').setQualityLevel(this.options[this.selectedIndex].value)"});for(w in G)t=G[w],g.append($("<option>",{}).attr("value",t).text(t.charAt(0).toUpperCase()+t.slice(1)));g.val(C);g.appendTo(f)}A.live&&a.dvr&&!z&&!u&&$("<a>",{id:b+"_liveBtn","class":"smp_liveBtn",href:"#",onClick:"smvplayer('"+b+"').goLive()"}).append('<i id="'+b+'_liveIcon" class="fa fa-dot-circle-o rood"></i> Live').appendTo(r);A.nav&&(g=b+"_nextBtn",w=$("<input>",{id:b+"_prevBtn","class":"smp_nav",type:"button",
value:"<",onClick:"smvplayer('"+b+"').previous()"}),g=$("<input>",{id:g,"class":"smp_nav",type:"button",value:">",onClick:"smvplayer('"+b+"').next()"}),t=$("<span>",{id:b+"_infoLabel","class":"smp_infoLabel"}).text(k.currentItem+1+"/"+k.playlist.length),w.appendTo(r),g.appendTo(r),t.appendTo(r));jQuery("#"+b).wrap(c);s.appendTo(m);r.appendTo(m);f.appendTo(m);m.appendTo("#smvplayer_"+b)}if(u)d="native",w='<div class="smp_androidPlayBtnQualContainer" onclick="'+("smvplayer(&#39;"+b+"&#39;).loadNativePlayer()")+
'"></div>',jQuery("#"+b).attr("id",b+"_wrapper").attr("class","smp smp_androidwrapper"),a=L?smpData.scriptUrl+"skins/"+h+"/"+h+"-bg-"+N+".jpg":smpData.scriptUrl+"skins/"+h+"/"+h+"-bg.jpg",jQuery("#"+b+"_wrapper").css("background",'url("'+a+'")'),jQuery("#"+b+"_wrapper").css("background-size","contain"),jQuery("#"+b+"_wrapper").css("background-repeat","no-repeat"),jQuery("#"+b+"_wrapper").css("background-position","center"),jQuery("#"+b+"_wrapper").append(jQuery("<div/>",{"class":"smp_linksWrapper",
style:"height: "+n}).append(w)),jQuery(".androidPlayBtn").css("line-height",n/30);else if(z)w=b+"_mediaUrlKot",c=$("<textarea>",{id:w,"class":"smp_mediaUrlKot"}),c.text(B()),jQuery("#"+b).attr("id",b+"_wrapper").attr("class","smp smp_androidwrapper"),a=L?smpData.scriptUrl+"skins/"+h+"/"+h+"-bg-"+N+".jpg":smpData.scriptUrl+"skins/"+h+"/"+h+"-bg.jpg",jQuery("#"+b+"_wrapper").css("background",'url("'+a+'")'),jQuery("#"+b+"_wrapper").css("background-size","contain"),jQuery("#"+b+"_wrapper").css("background-repeat",
"no-repeat"),jQuery("#"+b+"_wrapper").css("background-position","center"),jQuery("#"+b+"_wrapper").append(jQuery("<div/>",{"class":"smp_linksWrapper",style:"height: "+n}).append(c)),jQuery("#"+w).css("margin-top",n/5),jQuery("#"+w).css("height",n/5),d="native";else if(D)qa(a),d="native HTML5";else if(!a.multicast||""===a.streamType&&a.multicast)l(),w=B(),"rtsp"===w.substring(0,w.indexOf(":"))?(d="quicktime",pa(a)):(d="jw",oa(a));else if(!E&&a.multicast&&"live"===a.streamType)d="silverlight",Silverlight.createObject("smvplayer/SSLMP3.xap",
document.getElementById(b),"AgMcVPlayer",{isWindowless:"false",width:a.width?a.width:v,height:a.height?a.height:n,background:"black",version:"4.0.50826.0"},{onError:Aa},"RtspUrl="+B()+"?multicastplay,ProxyUrl="+a.multicastProxy,null);else throw new F("No suitable player engine found.");},mediaUrl:B,persist:la,recall:function(a){e("Recall | Wissel dataset: "+b+" --\x3e "+a);u=smpData[a].android;ea=smpData[a].application;J=smpData[a].aspect;y=smpData[a].audioLang;x=smpData[a].autostart;Q=smpData[a].clientIp;
d=smpData[a].engine;n=smpData[a].height;K=smpData[a].initialised;D=smpData[a].ios;E=smpData[a].mobile;U=smpData[a].multicast;V=smpData[a].forceAndroidMode;W=smpData[a].forceDesktopMode;X=smpData[a].forceIosMode;fa=smpData[a].forceProtocol;Y=smpData[a].forceWindowsPhoneMode;C=smpData[a].quality;Z=smpData[a].server;L=smpData[a].showDisclaimer;h=smpData[a].skin;M=smpData[a].status;N=smpData[a].uiLanguage;v=smpData[a].width;z=smpData[a].windowsPhone;H=jQuery.extend(!0,{},smpData[a].audioLangs);A=jQuery.extend(!0,
{},smpData[a].infobarSettings);aa=jQuery.extend(!0,{},smpData[a].ports);k=jQuery.extend(!0,{},smpData[a].timeline);S=jQuery.extend(!0,{},smpData[a].uiLabels);G=smpData[a].qualityLevels.slice()},getAudioLanguage:function(){l();return y},getAudioLanguages:function(){l();return H},getClientIp:function(){l();return Q},getCurrentPlaylistItem:function(){l();return k.playlist[k.currentItem]},getDuration:function(a){l();a=a||!1;var c=0;"jw"===d?c=Math.floor(jwplayer(b).getDuration()):"silverlight"===d&&(c=
0);a&&(c=s(c));return c},getEngine:function(){l();return d},getId:function(){return b},getPlaylist:function(){l();return k.playlist},getPosition:function(a){l();a=a||!1;var c="";"jw"===d?c=Math.floor(jwplayer(b).getPosition()):"silverlight"===d&&(c=Math.floor(I().Position));a&&(c=s(c));return c},getQuality:function(){l();return C},getQualities:function(){l();return G},getRenderingMode:function(){l();var a="";"jw"===d&&(a=jwplayer(b).renderingMode);return d+a},getServer:function(){l();return Z},getSkins:function(){return sa},
getStatus:function(){l();var a="";"jw"===d?a=jwplayer(b).getState():"silverlight"===d?(a=I(),a.CurrentState.toUpperCase(),a=a.CurrentState.toUpperCase()):a="NONE";""===a&&(a="ERROR");return a},getTimeline:function(){l();return k},getWidth:function(){l();return v},goLive:function(){l();R(!0)},isAndroid:function(){l();return u},isFlashSupported:ja,isMobile:function(){l();return E},isMulticast:function(){l();return U},isInitialised:function(){return K},isIos:function(){l();return D},isWindowsPhone:function(){l();
return z},setAudioLanguage:function(a){l();if(-1<k.playlist[k.currentItem].source.languages.indexOf(a))y=a;else throw new F("setAudioLanguage: invalid language ("+a+").");R(!0)},setCurrentPlaylistItem:va,setId:function(a){b=a},setInitialised:function(a){K=a},setQualityLevel:function(a){l();C=a;R(!0)},setTimelineFinished:ha,mute:function(a){if("jw"===d)return jwplayer(b).setMute(a).getMute();if("silverlight"===d){var c=I();c.Mute=a?a?!0:!1:!c.Mute;return c.Mute}},next:wa,play:function(){if(k.playlist.length){var a;
if("jw"===d)a=jwplayer(b).getState(),"BUFFERING"!==a&&(M="PLAYING"!==a?"PLAYING":"PAUSED",jwplayer(b).play("PLAYING"!==a));else if("vlc"===d)T().playlist.play();else if("silverlight"===d){var c=I();a=c.CurrentState.toUpperCase();"PLAYING"===a?c.Stop():c.Play(0);M="PLAYING"===a?"PAUSED":"PLAYING"}}else M="PLAYING"===M?"PAUSED":"PLAYING"},previous:function(){var a=k.currentItem;e("Item complete: "+b+" | currentItem = "+a+" | playlist.length = "+k.playlist.length);0<a?(e("Vorig item laden ("+b+")"),
ya(),ba(),R()):e("Begin playlist ("+b+")")},stop:function(){"jw"===d?"IDLE"!==jwplayer(b).getState()&&jwplayer(b).stop():"vlc"===d?T().playlist.stop():"silverlight"===d&&I().Stop();M="STOPPED"},seek:ua,volume:function(a){var c;if("undefined"===typeof a){if("jw"===d)return jwplayer(b).getVolume();if("silverlight"===d)return c=I(),c.Volume}else if(!("number"!==typeof a||100<a||0>a)){if("jw"===d)return jwplayer(b).setVolume(a).getVolume();if("silverlight"===d)return c=I(),c.Volume=a,c.Volume}return!1},
addRelativeToRealTime:function(a,b){l();if(!a||""===a||!t(a))throw m("addRelativeToRealTime() expected first parameter 'playlist cms id' to be a number"),new P("number");if(!b||""===b||!t(b))throw m("addRelativeToRealTime() expected second parameter 'relative time' to be a number"),new P("number");var d=k.playlist.filter(function(b){return b.fileId==a}),d=za(d[0].time);return new Date(d.getTime()+1E3*b)},loadPlaylist:function(a){if(!(a&&a instanceof Array&&0!==a.length))throw new P("array");la();
var c=jQuery.extend(!0,{},smpData[b]);c.playlist=[];c.playlist=a;a=ga(c);k.playlist=a.playlist;k.currentItem=0;k.finished=!1;ba();R()},loadNativePlayer:function(){window.top.location.href=B()},nextPlaylistItem:xa,previousPlaylistItem:ya,show_slide:function(a){if("undefined"!==typeof a&&a&&!(-1<a.indexOf('"')||-1<a.indexOf("<"))){var c=b+"_smvSlide";jQuery("#"+c).attr("src")!==a&&(jQuery("#"+c).remove(),jQuery("body").append('<img src="'+a+'" id="'+c+'" style="position:fixed;"/>'),self=this,jQuery("#"+
c).one("load",function(){var a=jQuery("#"+c).width(),b=jQuery("#"+c).height();if(a!==self.width||b!==self.height)a/b>=self.width/self.height?(b*=self.width/a,a=self.width):(a*=self.height/b,b=self.height);jQuery("#"+self.id).empty();jQuery("#"+c).appendTo("#"+self.id).css({position:"static",width:a+"px",height:b+"px",visibility:"visible"})}).each(function(){this.complete&&jQuery(this).load()}))}},version:smpData.version,whenReady:ta}}();
"bind"in Function.prototype||(Function.prototype.bind=function(e){var f=this;if(1>=arguments.length)return function(){return f.apply(e,arguments)};var m=Array.prototype.slice.call(arguments,1);return function(){return f.apply(e,0===arguments.length?m:m.concat(Array.prototype.slice.call(arguments)))}});"trim"in String.prototype||(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")});
"indexOf"in Array.prototype||(Array.prototype.indexOf=function(e,f){void 0===f&&(f=0);0>f&&(f+=this.length);0>f&&(f=0);for(var m=this.length;f<m;f++)if(f in this&&this[f]===e)return f;return-1});"lastIndexOf"in Array.prototype||(Array.prototype.lastIndexOf=function(e,f){void 0===f&&(f=this.length-1);0>f&&(f+=this.length);f>this.length-1&&(f=this.length-1);for(f++;0<f--;)if(f in this&&this[f]===e)return f;return-1});
"forEach"in Array.prototype||(Array.prototype.forEach=function(e,f){for(var m=0,s=this.length;m<s;m++)m in this&&e.call(f,this[m],m,this)});"map"in Array.prototype||(Array.prototype.map=function(e,f){for(var m=Array(this.length),s=0,t=this.length;s<t;s++)s in this&&(m[s]=e.call(f,this[s],s,this));return m});"filter"in Array.prototype||(Array.prototype.filter=function(e,f){for(var m=[],s,t=0,da=this.length;t<da;t++)t in this&&e.call(f,s=this[t],t,this)&&m.push(s);return m});
"every"in Array.prototype||(Array.prototype.every=function(e,f){for(var m=0,s=this.length;m<s;m++)if(m in this&&!e.call(f,this[m],m,this))return!1;return!0});"some"in Array.prototype||(Array.prototype.some=function(e,f){for(var m=0,s=this.length;m<s;m++)if(m in this&&e.call(f,this[m],m,this))return!0;return!1});
function smvplayer(e){function f(e){"undefined"!==typeof window.console&&smpData.dlog&&console.log("DEBUG | "+e)}null===smpData.playerInstance&&(smpData.playerInstance=player);""!==smpData.playerInstance.getId()?smpData.hasOwnProperty(e)?smpData.playerInstance.getId()!==e&&(f("Wissel instantie van "+smpData.playerInstance.getId()+" naar "+e),smpData.playerInstance.persist(),smpData.playerInstance.recall(e),smpData.playerInstance.setId(e)):smpData.playerInstance.getId()!==e&&"undefined"!==typeof e&&
(f("Persist voor "+smpData.playerInstance.getId()+", nieuwe instantie voor "+e),smpData.playerInstance.persist(),smpData.playerInstance.setId(e),smpData.playerInstance.setInitialised(!1)):"undefined"!==typeof e&&(f("Eerste keer voor "+e),smpData.playerInstance.setId(e));return smpData.playerInstance};

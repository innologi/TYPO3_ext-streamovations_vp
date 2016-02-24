/*
 http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
*/
var SvpStarter=function(e){function i(a){console.log("SVPS | "+a)}function H(){var a=e("."+f.container);if(n.topic)o.topic=e(".topics .topic",a).not(".template").length;if(n.speaker)o.speaker=e(".speakers .speaker",a).not(".template").length}function I(){if(z>0)if(typeof SvpPolling!=="undefined"){var a=z*1E3,b=e("#"+f.data).attr("data-hash");c.player.onPlay(function(){SvpPolling.init(b,J,a)});c.player.onPause(function(){SvpPolling.stop();p("speaker");p("topic")})}else i(j.no_svpp,true);else i(j.svpp_off,
false)}function A(a,b){a=a[a.length-1].id;q[b]!==a&&v(a,b)}function B(a,b){var d=e("."+f.container+" ."+b+"s ."+b).last(),l=d.parent();if(d.hasClass("template")){d.removeClass("template");d.remove();l.removeClass("template")}for(var k=0;k<a.length;k++){var m=d.clone(),r=a[k];switch(b){case "speaker":e(".speaker-avatar",m).attr("src",K+r.photo);e(".speaker-data",m).html(r.firstname+" "+r.lastname);break;case "topic":e(".topic-title",m).html(r.title);e(".topic-description",m).html(r.description)}m.attr("data-"+
b,r.id).removeClass("active");l.append(m);o[b].length++}}function L(a){for(var b in a)if(a.hasOwnProperty(b))s.playlist[a[b].streamfileId]=parseInt(b,10)}function M(){var a=null;if(n.topic){e("."+f.container+" .topics").on("click",".topic .topic-link",function(k){k.preventDefault();c.jumpToTopic(e(this).parent(".topic").attr("data-topic"))});var b=e("#"+f.topicTimeline).first();if(b.exists()){try{a=JSON.parse(b.html())}catch(d){i(j.no_json_support,true);return false}a.length>0&&C("topic",a,true);
b.html("")}i(j.events_topic_init,false)}if(n.speaker){b=e("#"+f.speakerTimeline).first();if(b.exists()){a=null;try{a=JSON.parse(b.html())}catch(l){i(j.no_json_support,true);return false}a.length>0&&C("speaker",a,false);b.html("")}i(j.events_speaker_init,false)}}function C(a,b,d){for(var l=0;l<b.length;l++){var k=b[l],m=l+1;k.start=Math.floor(k.relativeTime/1E3);k.end=m<b.length&&k.streamfileId===b[m].streamfileId?Math.floor(b[m].relativeTime/1E3):Number.MAX_SAFE_INTEGER;if(d)s[a][k.id]={playlist:s.playlist[k.streamfileId],
time:k.start};c.player.onTime(w.onTime(k,a));c.player.onSeek(w.onSeek(k,a))}c.player.onSeek(w.onSeekFinal(a))}function u(){c.jw=jwplayer(f.player);c.jw.onReady(function(){p("speaker");p("topic");N()})}function N(){var a=null;for(a in h.onTime)h.onTime.hasOwnProperty(a)&&c.jw.onTime(h.onTime[a]);for(a in h.onSeek)h.onSeek.hasOwnProperty(a)&&g.player.onSeek(h.onSeek[a]);for(a in h.onPlay)h.onPlay.hasOwnProperty(a)&&g.player.onPlay(h.onPlay[a]);for(a in h.onPause)h.onPause.hasOwnProperty(a)&&g.player.onPause(h.onPause[a]);
i(j.events_re,false)}function p(a){if(n[a]){var b=e("."+f.container+" ."+a+"s");e("."+a+".active",b).removeClass("active");q[a]=0;b.trigger("SVPS:inactive-"+a)}}function v(a,b){var d=e("."+f.container+" ."+b+"s"),l=e("."+b+"[data-"+b+"="+a+"]",d);e("."+b+".active",d).removeClass("active");q[b]=a;l.first().addClass("active");d.trigger("SVPS:active-"+b,{id:a,index:l.index()});i(j.activate+" "+b+" "+a,false)}function D(a,b,d){c.player.playlistNext();a++;a<b?c.jw.onReady(function(){setTimeout(function(){D(a,
b,d)},50)}):x(d)}function E(a,b,d){c.player.playlistPrev();a--;a>b?c.jw.onReady(function(){setTimeout(function(){E(a,b,d)},50)}):x(d)}function x(a){if((typeof c.player.getStatus!=="undefined"?c.player.getStatus():c.player.getState()).toUpperCase()!=="PLAYING"){O(a);c.player.play(true)}else c.player.seek(a.time)}function O(a){t.hasOwnProperty(a.playlist)||(t[a.playlist]={});t[a.playlist][a.time]=true;c.jw.onPlay(function(){if(t[a.playlist][a.time]){c.player.seek(a.time);t[a.playlist][a.time]=false}})}
function F(a){return s.playlist[a.streamfileId]===c.player.getPlaylistIndex()}function G(){if(typeof jwplayer==="undefined"){i(j.no_jwplayer,true);return false}jwplayer.key="###JWPLAYER_KEY###";return true}function P(a){if(G(true)){if(typeof smvplayer!=="undefined"){c.player=smvplayer(f.player);c.player.init(a);f.player="smvplayer_engineWrapper_"+f.player;c.jw=jwplayer(f.player);c.player.onTime=function(b){h.onTime.push(b);c.jw.onTime(b)};g.player.onSeek=c.player.onSeek;c.player.onSeek=function(b){h.onSeek.push(b);
g.player.onSeek(b)};g.player.onPlay=c.player.onPlay;c.player.onPlay=function(b){h.onPlay.push(b);g.player.onPlay(b)};g.player.onPause=c.player.onPause;c.player.onPause=function(b){h.onPause.push(b);g.player.onPause(b)};g.player.next=c.player.next;c.player.next=function(){g.player.next();u()};g.player.previous=c.player.previous;c.player.previous=function(){g.player.previous();u()};g.player.setQualityLevel=c.player.setQualityLevel;c.player.setQualityLevel=function(b){g.player.setQualityLevel(b);u()};
g.player.setAudioLanguage=c.player.setAudioLanguage;c.player.setAudioLanguage=function(b){g.player.setAudioLanguage(b);u()};c.player.getPlaylistIndex=function(){return c.player.getTimeline().currentItem};c.player.playlistNext=function(){c.player.next()};c.player.playlistPrev=function(){c.player.previous()};c.player.playlistItem=function(b,d){b=b-c.player.getPlaylistIndex();if(b>0)D(0,b,d);else b<0&&E(0,b,d);return 2};return true}i(j.no_smvplayer,true)}return false}function Q(a){if(G(false)){jwplayer(f.player).setup(a);
c.player=jwplayer(f.player);c.jw=c.player;c.player.onPlaylistItem(function(){p("speaker");p("topic")});return true}return false}var K="###SPEAKER_IMAGE_DIR###",z=parseInt("###POLLING_INTERVAL###",10),J=parseInt("###CURRENT_PAGE_ID###",10),R=parseInt("###PLAYER_TYPE###",10),n={topic:parseInt("###MEETINGDATA_TOPICS###",10),speaker:parseInt("###MEETINGDATA_SPEAKERS###",10)},s={playlist:{},topic:{}},o={topic:0,speaker:0},q={topic:0,speaker:0},g={player:{onSeek:null,onPlay:null,onPause:null,next:null,
previous:null,setQualityLevel:null,setAudioLanguage:null}},h={onTime:[],onSeek:[],onPlay:[],onPause:[]},t={},y={topic:false,speaker:false},w={onTime:function(a,b){return function(d){d.position>=a.start&&d.position<a.start+0.4&&a.id!==q[b]&&F(a)&&v(a.id,b)}},onSeek:function(a,b){return function(d){if(d.offset>=a.start&&d.offset<a.end&&F(a)){a.id!==q[b]&&v(a.id,b);y[b]=true}}},onSeekFinal:function(a){return function(){!y[a]&&q[a]!==0&&p(a);y[a]=false}}},f={player:"tx-streamovations-vp-play",playerContainer:"video-player-container",
data:"tx-streamovations-vp-playerdata",topicTimeline:"tx-streamovations-vp-topictimeline",speakerTimeline:"tx-streamovations-vp-speakertimeline",container:"tx-streamovations-vp"},j={no_svpp:"SVPP not loaded, polling inactive",svpp_off:"Polling disabled",no_player_data:"The player element or player data is not available",no_json_support:"No JSON.parse support in user agent",player_data_invalid:"Player data is invalid or in an unsupported format",invalid_player:"No supported player configured",no_jwplayer:"No jwplayer loaded",
no_jwplayer_key:"A jwplayer license key is required",no_smvplayer:"No smvplayer loaded",events_topic_init:"initializing topic event handlers",events_speaker_init:"initializing speaker event handlers",events_re:"Reattached event callbacks",no_timestamp:"Topic has no registered timestamps",activate:"Activated"};e.fn.exists=function(){return this.length!==0};var c={player:null,jw:null,isLiveStream:false,init:function(){var a=e("."+f.playerContainer),b=e("#"+f.data).first();if(!a.exists()||!b.exists()){i(j.no_player_data,
true);return false}var d=null;try{d=JSON.parse(b.html().trim())}catch(l){i(j.no_json_support,true);return false}b.html("");if(typeof d!=="object"){i(j.player_data_invalid,true);return false}switch(R){case 2:if(!P(d))return false;break;case 1:if(!Q(d))return false;break;default:i(j.invalid_player,true);return false}c.player.onPlay(function(){a.trigger("SVPS:play")});d.hasOwnProperty("playlist")&&L(d.playlist);if(d.hasOwnProperty("application"))this.isLiveStream=d.application==="rtplive";if(this.isLiveStream){if(n.topic||
n.speaker){H();I()}}else M();return true},processMeetingdataChange:function(a){if(n.topic){a.hasOwnProperty("topics")&&a.topics!==false&&a.topics.length>o.topic&&B(a.topics.slice(o.topic),"topic");a.hasOwnProperty("topicTimeline")&&a.topicTimeline!==false&&a.topicTimeline.length>0&&A(a.topicTimeline,"topic")}if(n.speaker){a.hasOwnProperty("speakers")&&a.speakers!==false&&a.speakers.length>o.speaker&&B(a.speakers.slice(o.speaker),"speaker");a.hasOwnProperty("speakerTimeline")&&a.speakerTimeline!==
false&&a.speakerTimeline.length>0&&A(a.speakerTimeline,"speaker")}},jumpToTopic:function(a){a=s.topic[a];if(a!==undefined){if(a.playlist!==this.player.getPlaylistIndex())if(this.player.playlistItem(a.playlist,a)===2)return;x(a)}else i(j.no_timestamp,true)}};return c}(jQuery);
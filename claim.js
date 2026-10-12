(function(){var i=byId(qid());if(!i){location.replace("cari.html");return}
$("cs").innerHTML='<div class="th" style="background:'+BG[i.cat]+'">'+thumb(i)+'</div><div><b>'+esc(i.n)+'</b><br><span class="tag">'+esc(i.cat)+'</span><br><small>📍 '+esc(i.loc)+' · 📅 '+fmt(i.date)+'</small><br><small>'+esc(i.d)+'</small></div>';
var f=document.querySelector("form[data-f]");f.addEventListener("submit",function(e){e.preventDefault();f.querySelector(".ok").classList.add("show");f.reset()})})();

(function(){var items=loadItems(),cat="";
function locs(){var l=[];items.forEach(function(i){if(l.indexOf(i.loc)<0)l.push(i.loc)});$("loc").innerHTML='<option value="">Semua lokasi</option>'+l.map(function(x){return"<option>"+esc(x)+"</option>"}).join("")}
function chips(){$("cats").innerHTML=["Semua"].concat(CATS).map(function(c){var on=(c==="Semua"&&!cat)||c===cat;return'<button class="chip'+(on?" on":"")+'" data-c="'+(c==="Semua"?"":c)+'">'+c+"</button>"}).join("")}
function render(){var q=$("q").value.toLowerCase(),l=$("loc").value,d=$("dt").value,sv=$("stt").value;
var r=items.filter(function(i){return(!q||(i.n+" "+i.d).toLowerCase().indexOf(q)>-1)&&(!cat||i.cat===cat)&&(!l||i.loc===l)&&(!d||i.date===d)&&(!sv||i.st===sv)});
$("cnt").textContent="Ditemukan "+r.length+" hasil";$("none").hidden=r.length>0;
$("list").innerHTML=r.map(function(i){return'<article class="it"><div class="th" style="background:'+BG[i.cat]+'">'+thumb(i)+'</div><div class="bd"><span class="tag">'+esc(i.cat)+"</span><h3>"+esc(i.n)+"</h3><p>📍 "+esc(i.loc)+"</p><p>📅 "+fmt(i.date)+'</p><div class="s '+(i.st==="Menunggu klaim"?"b":"a")+'">● '+i.st+'</div><div class="ac"><a class="btn alt" href="detail.html?id='+i.id+'">Detail</a><a class="btn" href="klaim.html?id='+i.id+'">Klaim</a></div></div></article>'}).join("")}
["q","loc","dt","stt"].forEach(function(i){$(i).addEventListener("input",render)});
$("cats").addEventListener("click",function(e){var b=e.target.closest("[data-c]");if(b){cat=b.dataset.c;chips();render()}});
$("rs").addEventListener("click",function(){$("q").value="";$("loc").value="";$("dt").value="";$("stt").value="";cat="";chips();render()});
var p=new URLSearchParams(location.search).get("q");if(p)$("q").value=p;
locs();chips();render()})();

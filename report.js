(function(){
document.querySelectorAll("[data-cat]").forEach(function(s){s.innerHTML='<option value="">Pilih kategori</option>'+CATS.map(function(c){return"<option>"+c+"</option>"}).join("")});
var f=document.querySelector("form[data-f]"),map=$("map");
function pick(g){document.querySelectorAll("#map [data-loc]").forEach(function(x){x.classList.remove("sel")});g.classList.add("sel");
$("t3").value=g.dataset.loc;var p=$("pin");p.setAttribute("transform","translate("+g.dataset.x+","+g.dataset.y+")");p.style.display="block";$("ml").textContent="📍 Lokasi dipilih: "+g.dataset.loc}
if(map)document.querySelectorAll("#map [data-loc]").forEach(function(g){g.addEventListener("click",function(){pick(g)});g.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();pick(g)}})});
if($("ph"))$("ph").addEventListener("change",function(){var p=this.files[0];$("pv").innerHTML="";if(!p)return;
if(p.size>5*1024*1024){alert("Ukuran foto maksimal 5 MB. Pilih foto yang lebih kecil ya.");this.value="";return}
var im=document.createElement("img");im.src=URL.createObjectURL(p);im.alt="Pratinjau foto barang";$("pv").appendChild(im)});
f.addEventListener("submit",function(e){e.preventDefault();
function done(){f.querySelector(".ok").classList.add("show");f.reset();if($("pv"))$("pv").innerHTML="";if(map){$("pin").style.display="none";$("ml").textContent="";document.querySelectorAll("#map .sel").forEach(function(x){x.classList.remove("sel")})}}
if(f.dataset.f==="temuan"){var g=function(n){return f.elements[n].value},file=$("ph").files[0];
var add=function(img){var a=loadItems();a.unshift({id:Date.now(),n:g("n"),cat:g("cat"),loc:g("loc"),date:g("date").slice(0,10),st:"Menunggu klaim",d:g("d"),img:img||""});saveItems(a);done()};
if(file)shrink(file,add);else add("")}
else{var items=loadItems(),c=f.querySelector("select").value,w=f.querySelector("input").value.toLowerCase().split(" ");
var m=items.filter(function(i){return i.cat===c||w.some(function(x){return x.length>2&&i.n.toLowerCase().indexOf(x)>-1})});
$("mt").innerHTML=m.length?"<br><b>Barang yang mungkin cocok:</b><br>"+m.map(function(i){return EMO[i.cat]+" "+esc(i.n)+" · "+esc(i.loc)}).join("<br>")+'<br><a href="cari.html">Lihat di Cari Barang</a>':"";done()}})})();

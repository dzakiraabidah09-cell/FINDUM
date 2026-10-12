var CATS=["Tas","Elektronik","Dompet","Kartu","Tumbler","Pakaian","Alat Tulis","Lainnya"];
var EMO={Tas:"🎒",Elektronik:"🎧",Dompet:"👛",Kartu:"💳",Tumbler:"🧴",Pakaian:"👕","Alat Tulis":"✏️",Lainnya:"📦"};
var BG={Tas:"#dbe8ff",Elektronik:"#e8e4ff",Dompet:"#f5eadf",Kartu:"#dff6ea",Tumbler:"#dff3ff","Alat Tulis":"#fff3cf",Pakaian:"#ffe3ee",Lainnya:"#ececec"};
var SEED=[
{id:1,n:"Tumbler Hitam",cat:"Tumbler",loc:"Gedung FIK",date:"2026-10-05",st:"Menunggu klaim",d:"Tumbler hitam, tutup stainless."},
{id:2,n:"Dompet Cokelat",cat:"Dompet",loc:"Perpustakaan",date:"2026-10-04",st:"Dalam proses verifikasi",d:"Dompet kulit warna cokelat."},
{id:3,n:"KTM Mahasiswa",cat:"Kartu",loc:"Gedung Kuliah Bersama",date:"2026-10-03",st:"Menunggu klaim",d:"Kartu tanda mahasiswa."},
{id:4,n:"Kotak Alat Tulis",cat:"Alat Tulis",loc:"Lapangan",date:"2026-10-02",st:"Menunggu klaim",d:"Kotak pensil berisi alat tulis."},
{id:5,n:"Earphone Wireless",cat:"Elektronik",loc:"Gedung A",date:"2026-10-03",st:"Menunggu klaim",d:"Earphone dengan case putih."},
{id:6,n:"Tas Ransel Hitam",cat:"Tas",loc:"Gedung G",date:"2026-10-02",st:"Menunggu klaim",d:"Tas ransel hitam dengan dua ruang utama."}];
var $=function(i){return document.getElementById(i)};
function loadItems(){try{var s=JSON.parse(localStorage.getItem("findum_items"));if(s&&s.length)return s}catch(e){}return SEED.slice()}
function saveItems(a){try{localStorage.setItem("findum_items",JSON.stringify(a))}catch(e){alert("Penyimpanan penuh, laporan tidak tersimpan.")}}
function byId(id){return loadItems().filter(function(i){return i.id===id})[0]}
function qid(){return +new URLSearchParams(location.search).get("id")}
function fmt(d){return new Date(d+"T00:00").toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function thumb(i){return i.img?'<img src="'+i.img+'" alt="Foto '+esc(i.n)+'">':EMO[i.cat]}
function shrink(file,cb){var r=new FileReader();r.onload=function(){var im=new Image();im.onload=function(){var k=Math.min(1,600/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=im.width*k;c.height=im.height*k;c.getContext("2d").drawImage(im,0,0,c.width,c.height);cb(c.toDataURL("image/jpeg",.7))};im.src=r.result};r.readAsDataURL(file)}

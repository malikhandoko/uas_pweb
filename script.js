const tampildata = document.querySelector('#tampildata');
tampildata.style.display = 'none';

function tampilkan(){

    tampildata.style.display = 'block';

    var bonus; var ht=0; var biayabg=0; var biayaAsuransi=0; var diskon=0; var total=0;

    // Detail NAMA
    var nama=document.getElementById('inp_nama').value; var tampilnama=document.getElementById("tampilnama").innerHTML=nama;

    // Detail tujuan
    var tujuan=document.getElementById("inp_tujuan").value; var tampiltujuan=document.getElementById("tampiltujuan").innerHTML=tujuan;

    // Detail jumlah_tiket
    var jumlah=parseFloat(document.getElementById("inp_jumlah").value); var tampiljumlah=document.getElementById("tampiljumlah").innerHTML=jumlah;

    if (jumlah>=3) {
        // Detail Diskon 30%;
        diskon=0.3;
        var tampildiskon=document.getElementById("disc").innerHTML="(Get Discount "+ "30%)";
    }
    else{
        diskon=0.0;
        var tampildiskon=document.getElementById("disc").innerHTML="(No Discount)";
    }

    // Detail Kelas
    var e = document.getElementById("inp_kelas"); var setKelas = e.options[e.selectedIndex].text;
    tampilkelas.innerHTML=setKelas
    var kelas = document.getElementById("inp_kelas").value;
    if(kelas==1){
        ht=1000000;
        bonus="Air Aqua 300 ML";
        var harga=document.getElementById("tampilharga").innerHTML=ht;
        var getbonus=document.getElementById("tampilbonus").innerHTML="(Air Aqua 300 ML)";
    } 
    else if(kelas==2){
        ht=2000000;
        bonus="Roti";
        var harga=document.getElementById("tampilharga").innerHTML=ht;
        var getbonus=document.getElementById("tampilbonus").innerHTML="(Roti)";
    }
    else if(kelas==3){
        ht=3000000;
        bonus="Makan";
        var harga=document.getElementById("tampilharga").innerHTML=ht;
        var getbonus=document.getElementById("tampilbonus").innerHTML="(Makan)";
    } 
    else{
        ht=0;
    }

    // Detail Bagasi
    var bg;
    if (document.getElementById('bg1').checked) {
        biayabg=100000;
        bg=document.getElementById('bg1').value;
    }
    else if (document.getElementById('bg2').checked) {
        biayabg=150000;
        bg = document.getElementById('bg2').value;
    }
    else if (document.getElementById('bg3').checked) {
        biayabg=200000;
        bg = document.getElementById('bg3').value;
    }
    else{
        biayabg=0;
    }
    document.getElementById('tampilbagasi').innerHTML = bg;

    var getHargaBagasi=document.getElementById("tampilhargabagasi").value=biayabg;
    tampilhargabagasi.innerHTML=getHargaBagasi;

    // Detail Asuransi
    var nAsuransi=document.querySelectorAll("input[name=asuransi]:checked");
        var hAsuransi=[];
        for(var a=0;a<nAsuransi.length;a++){
            hAsuransi.push(nAsuransi[a].value)
        }
    document.getElementById("tampilasuransi").innerHTML=hAsuransi.join(",");


    if(document.getElementById("asuransi1").checked){
        biayaAsuransi=50000;
    }
    else if(document.getElementById("asuransi2").checked){
        biayaAsuransi=50000;
    }
    else if(document.getElementById("asuransi3").checked){
        biayaAsuransi=50000;
    }
    else{
        biayaAsuransi=0;
    }

    jumlahbiaya=biayaAsuransi*hAsuransi.length;
    document.getElementById("tampilbiayaAsuransi").innerHTML=jumlahbiaya;

    // Detail Total
    if(diskon==0.3){
        var sub=harga*jumlah;
        var disc=0.3*sub;
        total=sub-disc+biayabg+jumlahbiaya;
        document.getElementById("inp_total").innerHTML=eval(total);
    }
    else{
        total=harga*jumlah-0+biayabg+jumlahbiaya;
        document.getElementById("inp_total").innerHTML=eval(total);
    }

    tampildata.onclick = tampilkan;
}
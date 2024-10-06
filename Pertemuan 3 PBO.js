class Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar){
        this.nama = nama;
        this.jenis = jenis; 
        this.kapasitas = kapasitas;
        this.panjang = panjang;
        this.lebar = lebar;
    }
    getStatus (){
        this._status 
        return this._status
     }        
     
     setStatustersedia (){
        this._status = 'Tersedia'
        return `${this.nama} ${this._status}`
        
     }
    
     setStatusTidaktersedia (){
        this._status = 'Tidak Tersedia'
        return `${this.nama} ${this._status}`
     }

    infoKapal(){
        return `Kapal ini bernama ${this.nama}, berjenis ${this.jenis} dengan kapasitas ${this.kapasitas} penumpang, 
        memiliki dimensi ${this.panjang} x ${this.lebar} meter.`;
    }


}

class TiketKapal extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, hargaTiket){
        super(nama, jenis, kapasitas, panjang, lebar);
        this.hargaTiket = hargaTiket;
    }

    infoTiket(){
        return `Harga tiket kapal ${this.nama} adalah Rp${this.hargaTiket}.`;
    }
}

class TurunKapal extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, waktuTurun){
        super(nama, jenis, kapasitas, panjang, lebar);
        this.waktuTurun = waktuTurun;
    }

    infoTurun(){
        return `Kapal ${this.nama} akan turun di dermaga pada pukul ${this.waktuTurun}.`;
    }
}

let kapalPenumpang = new Kapal("Hari Prayitno", "Ferry", 500, 200, 100);
// console.log(kapalPenumpang.infoKapal());

let tiketKapal = new TiketKapal("Hari Prayitno", "Ferry", 500, 200, 100, 150000);
console.log(tiketKapal.infoTiket());

let turunKapal = new TurunKapal("Hari Prayitno", "Ferry", 500, 200, 100, "15:00");
console.log(turunKapal.infoTurun());

document.getElementById("object").innerHTML = kapalPenumpang.infoKapal();
document.getElementById("object").innerHTML = kapalPenumpang.setStatustersedia();
document.getElementById("object2").innerHTML = tiketKapal.infoTiket();
document.getElementById("object3").innerHTML = turunKapal.infoTurun();

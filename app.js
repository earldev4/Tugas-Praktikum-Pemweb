//PEMROGRAMAN PBO 
class hitungNilaiAkhir {
        constructor() {
        // Mendapatkan elemen HTML
        this.nilaiTugas = document.getElementById("tugas");
        this.nilaiUTS = document.getElementById("uts");
        this.nilaiUAS = document.getElementById("uas");
        this.outputWrong = document.getElementById("outputWrong");
        this.outputDisplay = document.getElementById("outputDisplay");
        this.outputTugas = document.getElementById("outputTugas");
        this.outputUTS = document.getElementById("outputUTS");
        this.outputUAS = document.getElementById("outputUAS");
        this.outputAvg = document.getElementById("outputAvg");
        this.outputAkhir = document.getElementById("outputAkhir");
        this.outputKelulusan = document.getElementById("outputKelulusan");
    }
    // Method untuk memeriksa apakah input valid (Input harus berupa angka antara 0 - 100)
    validasiInput(value) {
        return !isNaN(value) && value >= 0 && value <= 100;
    }
    // Method untuk melakukan perhitungan
    calculate() {
        let tugas = parseInt(this.nilaiTugas.value); //Karena input berupa teks (string), maka perlu dikonversi terlebih dahulu ke interger
        let uts = parseInt(this.nilaiUTS.value); //Karena input berupa teks (string), maka perlu dikonversi terlebih dahulu ke interger
        let uas = parseInt(this.nilaiUAS.value); //Karena input berupa teks (string), maka perlu dikonversi terlebih dahulu ke interger

        if (!this.validasiInput(tugas) || !this.validasiInput(uts) || !this.validasiInput(uas)) {
            this.displayError("Inputan harus berupa angka antara 0 - 100");
            return;
        }
        const persentaseTugas = (tugas / 100) * 30; //Menghitung persentase tugas
        const persentaseUTS = (uts / 100) * 30; //Menghitung persentase UTS
        const persentaseUAS = (uas / 100) * 40; //Menghitung persentase UAS
        const nilaiAkhir = persentaseTugas + persentaseUTS + persentaseUAS; //Menghitung nilai akhir
        const ratarata = nilaiAkhir / 3; //Menghitung rata-rata

        this.updateTampilan(persentaseTugas, persentaseUTS, persentaseUAS, ratarata, nilaiAkhir); //Menampilkan hasil perhitungan
        this.displayKelulusan(nilaiAkhir); //Menampilkan status kelulusan
    }
    // Method untuk menampilkan hasil perhitungan
    updateTampilan(tugas, uts, uas, avg, akhir) {
        this.outputWrong.classList.add("d-none"); //Menghilangkan pesan kesalahan
        this.outputDisplay.classList.remove("d-none"); //Menampilkan tampilan
        this.outputTugas.textContent = Math.floor(tugas); //Menampilkan hasil perhitungan
        this.outputUTS.textContent = Math.floor(uts); //Menampilkan nilai akhir
        this.outputUAS.textContent = Math.floor(uas); //Menampilkan rata-rata
        this.outputAvg.textContent = Math.floor(avg); //Menampilkan status kelulusan
        this.outputAkhir.textContent = Math.floor(akhir); //Menampilkan status kelulusan
    }
    // Method untuk menampilkan status kelulusan
    displayKelulusan(nilaiAkhir) {
        if (nilaiAkhir >= 90 && nilaiAkhir <= 100) {
            this.outputKelulusan.innerHTML = `Selamat, anda dinyatakan <b class="text-success">LULUS</b> dengan nilai <b class="text-warning">A</b>`;
        } else if (nilaiAkhir >= 80 && nilaiAkhir <= 89) {
            this.outputKelulusan.innerHTML = `Selamat, anda dinyatakan <b class="text-success">LULUS</b> dengan nilai <b class="text-success">B</b>`;
        } else if (nilaiAkhir >= 70 && nilaiAkhir <= 79) {
            this.outputKelulusan.innerHTML = `Selamat, anda dinyatakan <b class="text-success">LULUS</b> dengan nilai <b class="text-primary">C</b>`;
        } else if (nilaiAkhir >= 60 && nilaiAkhir <= 69) {
            this.outputKelulusan.innerHTML = `Selamat, anda dinyatakan <b class="text-success">LULUS</b> dengan nilai <b class="text-info">D</b>`;
        } else {
            this.outputKelulusan.innerHTML = `<b class="text-danger">TIDAK LULUS</b>`;
        }
    }

    // Method untuk menampilkan pesan kesalahan
    displayError(message) {
        this.outputWrong.textContent = message; 
        this.outputWrong.classList.remove("d-none");
        this.outputDisplay.classList.add("d-none");
    }
}

// Inisialisasi objek dan event listener
const calculator = new hitungNilaiAkhir();
document.getElementById("hitung").onclick = () => calculator.calculate();

//PEMROGRAMAN PROSEDURAL 
// const hitungNilaiAkhir = () =>{
//     let nilaiTugas = document.getElementById("tugas").value;
//     let nilaiUTS = document.getElementById("uts").value;
//     let nilaiUAS = document.getElementById("uas").value;
//     let outputWrong = document.getElementById("outputWrong");
//     let outputDisplay = document.getElementById("outputDisplay");
//     let outputTugas = document.getElementById("outputTugas");
//     let outputUTS = document.getElementById("outputUTS");
//     let outputUAS = document.getElementById("outputUAS");
//     let outputAvg = document.getElementById("outputAvg");
//     let outputAkhir = document.getElementById("outputAkhir");
//     let outputKelulusan = document.getElementById("outputKelulusan");
//     if (isNaN(nilaiTugas) || isNaN(nilaiUTS) || isNaN(nilaiUAS)) {
//         outputWrong.textContent = "Inputan harus berupa angka";
//         outputWrong.classList.remove("d-none");
//         outputDisplay.classList.add("d-none");
//     }else{
//         nilaiTugas = parseInt(nilaiTugas);
//         nilaiUTS = parseInt(nilaiUTS);
//         nilaiUAS = parseInt(nilaiUAS);
//         if (nilaiTugas >= 0 && nilaiTugas <= 100 && nilaiUTS >= 0 && nilaiUTS <= 100 && nilaiUAS >= 0 && nilaiUAS <= 100) {
//             outputWrong.classList.add("d-none");
//             const persentaseTugas = (nilaiTugas / 100) * 30;
//             const persentaseUTS = (nilaiTugas / 100) * 30;
//             const persentaseUAS = (nilaiTugas / 100) * 40;
//             const nilaiAkhir = persentaseTugas + persentaseUTS + persentaseUAS;
//             const ratarata = (persentaseTugas + persentaseUTS + persentaseUAS) / 3;
//             outputTugas.textContent = persentaseTugas;
//             outputUTS.textContent = persentaseUTS;
//             outputUAS.textContent = persentaseUAS;
//             outputAvg.textContent = ratarata;
//             outputAkhir.textContent = nilaiAkhir;
//             if (nilaiAkhir >= 90 && nilaiAkhir <= 100) {
//                 outputKelulusan.innerHTML = `Selamat, anda dinyatakan <b class="text-success">LULUS</b> dengan nilai <b class="text-warning">A</b>`;
//             } else if (nilaiAkhir >= 80 && nilaiAkhir <= 89) {
//                 outputKelulusan.innerHTML = `Selamat, anda dinyatakan <b class="text-success">LULUS</b> dengan nilai <b class="text-success">B</b>`;
//             } else if (nilaiAkhir >= 70 && nilaiAkhir <= 79) {
//                 outputKelulusan.innerHTML = `Selamat, anda dinyatakan <b class="text-success">LULUS</b> dengan nilai <b class="text-primary">C</b>`;
//             } else if (nilaiAkhir >= 60 && nilaiAkhir <= 69) {
//                 outputKelulusan.innerHTML = `Selamat, anda dinyatakan <b class="text-success">LULUS</b> dengan nilai <b class="text-info">D</b>`;
//             } else{
//                 outputKelulusan.innerHTML = `<b class="text-danger">TIDAK LULUS</b>`
//             }
//             outputDisplay.classList.remove("d-none");
//         } else{
//             outputWrong.textContent = "Inputan harus berkisar antara 1 - 100";
//             outputWrong.classList.remove("d-none");
//             outputDisplay.classList.add("d-none");
//         }
//     }
// }
// document.getElementById("hitung").onclick = hitungNilaiAkhir
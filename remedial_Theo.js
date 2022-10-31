// IF
var angka = 1;
if(angka === 1) {
    alert ('anda memasukkan angka 1');
}

// IF ELSE
var angka = 3;
if(angka % 2 == 0) {
    alert (angka + 'adalah bilangan GENAP');
} else {
    alert (angka + 'adalah bilangan GANJIL');
}

// SWTICH CASE
var warna = "merah";
 
		switch (warna){
			case "hitam":
				teks = "warna hitam";
				break;
			case "merah":
				teks = "Warna merah";
				break;
			case "hijau":
				teks = "Warna hijau";
				break;
			default:
			    teks = "Warna tidak terdeteksi";
		}

// FOR
for(let i = 0; i < 10; i++){
    document.write("<p>Perulangan ke-" + i + "</p>")
}

// WHILE
var ulangi = confirm("Apakah anda mau mengulang?");
var counter = 0;

while(ulangi){
    counter++;
    ulangi = confirm("Apakah anda mau mengulang?");
}

document.write("Perulangan sudah dilakuakn sebanyak "+ counter +" kali");

// DO/WHILE
var ulangi = confirm("Apakah anda mau mengulang?");;
var counter = 0;

do {
    counter++;
    ulangi = confirm("Apakah anda mau mengulang?");
} while(ulangi)

document.write("Perulangan sudah dilakuakn sebanyak "+ counter +" kali");
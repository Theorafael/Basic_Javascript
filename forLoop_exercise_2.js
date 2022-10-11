/*
var i = 10;
for (a = 10; a >= 1; a--) {
    console.log (a);
}
*/


/* Segitiga
function segitiga2(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = panjang; j > i; j--) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga2(5));

function segitiga1(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga1(5));

 Diamond
function segitiga3(panjang) {
    let hasil = '';
    for (let i = panjang; i > 0; i--) {
        for (let j = 1; j <= panjang; j++) {
            if (j >= i) {
                hasil += '* ';
            } else {
                hasil += ' '
            }
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga3(5));

function segitiga4(panjang) {
    let hasil = '';
    for (let i = panjang; i > 0; i--) {
        for (let j = panjang; j > 0; j--) {
            if (j > i) {
                hasil += ' ';
            } else {
                hasil += '* '
            }
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga4(5));
*/


const bintang = "*";
const spasi = " ";
for (var baris = 5, bbintang=1; baris > 0; baris--, bbintang++) {
    console.log(spasi.repeat(baris-1)+bintang.repeat(bbintang));
}
for (var baris = 0, bbintang=5; bbintang > 0; baris++, bbintang--) {
    console.log(bintang.repeat(bbintang)+spasi.repeat(baris));
}

var n = 6;

for (let i = n / 2; i < n; i += 2) {
  // print first spaces
  for (let j = 1; j < n - i; j += 2) {
    process.stdout.write(' ')
  }
  // print first stars
  for (let j = 1; j < i + 1; j++) {
    process.stdout.write('*')
  }
  // print second spaces
  for (let j = 1; j < n - i + 1; j++) {
    process.stdout.write(' ')
  }
  // print second stars
  for (let j = 1; j < i + 1; j++) {
    process.stdout.write('*')
  }
  console.log();
}
// lower part
// inverted pyramid
for (let i = n; i > 0; i--) {
  for (let j = 0; j < n - i; j++) {
    process.stdout.write(' ')
  }
  for (let j = 1; j < i * 2; j++) {
    process.stdout.write('*')
  }
  console.log();
}

var k = 8;
var l = "";

for(let i = 1; i < k; i++) {
    for(let j = 0; j < k; j++) {
      if(i === 0 || i === k - 1) {
        l += "*";
      }
      else {
        if(j === 0 || j === k - 1) {
          l += "*";
        }
        else {
          l += " ";
        }
      }
    }
    l += "\n";
  }
  console.log(l);
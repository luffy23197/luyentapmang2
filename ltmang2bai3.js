let a = ['a', '1', 'b', '0', '9', 'x', '5'];
let n = a.length;

let dem = 0;
for (let ch of a) {
    if (ch >= '0' && ch <= '9') dem++;
}

console.log("Kích thước mảng:", n);
console.log("Số ký tự số (0-9):", dem);
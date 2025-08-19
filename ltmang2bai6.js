let a = ['a','-','b','-','c','-'];
for (let i = 0; i < a.length; i++) if (a[i] === '-') a[i] = '_';
console.log(a);
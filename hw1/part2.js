#!/usr/bin/env node

var is_prime = function(num){
	if (num < 2) {
		return false;
    }
	if (num === 2) {
		return true;
    }
	if (!(num & 1)) {
		return false;
    }
    
    for (x = 3; x < parseInt(Math.sqrt(num) + 1); x += 2) {
        if (num % x === 0) {
            return false;
        }
    }
    return true;
}

var fs = require('fs');
var outfile = "primes.txt";
var out = "";
var i = 2;
var new_a = new Array();

while (new_a.length < 100) {
    if (is_prime(i)) {
        new_a.push(i);
    }
    i++;
}

for (i = 0; i < new_a.length; i++) {
    if (i === new_a.length - 1) {
        out += new_a[i];
    } else {
        out += new_a[i] + ',';
    }
}    

fs.writeFileSync(outfile, out);


function digital_root(n) {
    n = n.toString()
     sum = 0;
 //     if (n.length === 1) { 
 //         return n;
 //     } else {
         for (i=0; i<n.length; i++) { 
           sum += parseInt(n[i])
         }
 //     }
     return sum
 }

 console.log(digital_root(456))
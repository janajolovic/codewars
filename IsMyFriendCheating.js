function removeNb (n) {
    var results = [];
    for (i = 1; i <= n; i++) {
      var a = (n * (n + 1) / 2 - i) / (i + 1);
      if (a % 1 === 0 && a <= n) results.push([i, a]);
    }
    return results;
  }
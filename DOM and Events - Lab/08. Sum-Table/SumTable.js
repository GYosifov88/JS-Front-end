function sumTable() {
    let rows = Array.from(document.querySelectorAll("td"));
  
    result = 0;
  
    for (let i = 1; i < rows.length - 2; i += 2) {
      result += Number(rows[i].textContent);
    }

    document.getElementById("sum").textContent = result;
  }
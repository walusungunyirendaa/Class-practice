function timesTableGrid(size) {
  for (let row = 1; row <= size; row++) {
    let rowString = "";

    for (let col = 1; col <= size; col++) {
      let product = row * col;
      
      rowString += product.toString().padEnd(4);
    }

    console.log(rowString);
  }
}

timesTableGrid(7);

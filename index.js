var date = new Date()
var tanggal = date.getDate()
var bulan = date.getMonth()
var tahun = date.getFullYear()

// level 1
console.log(`full date = ${date}`);
console.log(`date = ${tanggal}`);
console.log(`month = ${bulan}`);
console.log(`year = ${tahun}`);


// level 2
function getDate(date) {
  return date.getDate();
}

function getMonth(date) {
  bulan = date.getMonth()

  return bulan;
}

function getStringMonthFromDate(date) {
  bulan = date.getMonth()
  listBulan = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  return listBulan[bulan];
}

function getStringMonthFromInt(int) {
  listBulan = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  return listBulan[int];
}
console.log(getStringMonthFromDate(date));

// level 3
console.log(getStringMonthFromInt(getMonth(date)))
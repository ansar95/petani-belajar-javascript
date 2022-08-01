const dataBarang = [
  "Susu",
 ];

function showBarang(){
  const listBarang = document.getElementById("list-barang");
  //clear list Barang
  listBarang.innerHTML = "";

  //cetak barang dengan perulangan
  for(let i= 0; i < dataBarang.length; i++ ){
    const btnEdit = "<a href='#' onclick='editBarang("+i+")'> Edit  </a>";
    const btnHapus = "<a href='#' onclick='deleteBarang("+i+")'> Hapus </a>";

    listBarang.innerHTML += "<li>" + dataBarang[i] +" [" +btnEdit  + "|" + btnHapus + "] </li>";

  }
}

function addBarang(){
  const addBarang = document.querySelector("input[name='barang']");
  dataBarang.push(addBarang.value);
  showBarang();
}


function editBarang(id){
  const newBarang = prompt("Nama baru", dataBarang[id]);
  dataBarang[id] = newBarang;
  showBarang();
}

function deleteBarang(id){
  dataBarang.splice(id, 1);
  showBarang();
}

showBarang();
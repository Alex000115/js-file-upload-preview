function preview(e){
  const img = document.getElementById('img');
  img.src = URL.createObjectURL(e.target.files[0]);
  img.style.display = 'block';
}

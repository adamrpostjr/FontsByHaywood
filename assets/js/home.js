// function prev() {
//   const font = document.querySelectorAll('#fonthead')
//   const prev = document.getElementById('prev')
// 
//   prev.addEventListener('input', updateValue);
//   function updateValue(e) {
//     if (prev.value.length < 1) {
//       font.textContent = "YouNameItVPN"
//       console.log('test');
//     }else {
//       font[0].textContent = e.target.value;
//     }
//   }
// }
// prev()


function reset() {
  console.log('reset');
  fonthead[0].textContent = "Fonts should be free, what the heck?"
  fonthead[1].textContent = "James Is Terrible"
  fonthead[2].textContent = "His Fonts are terrible"
  fonthead[3].textContent = "Dang It!"
  fonthead[4].textContent = "This is not Legal"
}

function prev() {
  const fonthead = document.querySelectorAll('#fonthead')
  const preview = document.getElementById('prev')
  

  preview.addEventListener('input', updateValue);
  function updateValue(e) {
    if (preview.value.length < 1) {
      reset();
    }else {
      fonthead[0].textContent = preview.value
      fonthead[1].textContent = preview.value
      fonthead[2].textContent = preview.value
      fonthead[3].textContent = preview.value
      fonthead[4].textContent =preview.value
      console.log('working');
    }
  }
}
prev()



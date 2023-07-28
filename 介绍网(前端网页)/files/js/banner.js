window.onload = function () {
  function school() {
    const speed = 50
    const leftbottom = document.querySelector('.leftbottom')
    leftbottom.innerHTML += leftbottom.innerHTML
    const span = document.querySelectorAll('.leftbottom>span')
    let time1 = window.setInterval(marquee, speed)
    leftbottom.onmouseover = function () {
      clearInterval(time1)
    }
    leftbottom.onmouseout = function () {
      time1 = setInterval(marquee, speed)
    }
    function marquee() {
      if (leftbottom.scrollLeft > span[0].offsetWidth) {
        leftbottom.scrollLeft = 0
      } else {
        ++leftbottom.scrollLeft
      }
    }
  }
  const bigImg = document.querySelector('.bigImg')
  const leftbottom = document.querySelector('.leftbottom')
  leftbottom.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
      console.log(e.target.src)
      bigImg.src = e.target.src
      console.log(bigImg.innerHTML)
    }

  })
  school()
}
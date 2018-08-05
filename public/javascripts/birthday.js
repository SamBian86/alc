/*
* @Author: bxdsam
* @Date:   2018-08-05 23:35:22
* @Last Modified by:   bxdsam
* @Last Modified time: 2018-08-06 00:25:09
*/
(function(win) {
  const cake = document.querySelector('.cake')
  const point = document.querySelector('.point')
  const qiqiuG = document.querySelector('.qiqiu-g')
  const qiqiuY = document.querySelector('.qiqiu-y')
  const hatRed = document.querySelector('.hat-red')
  const hatWhite = document.querySelector('.hat-white')
  const hatYellow = document.querySelector('.hat-yellow')
  const yaoqinghan = document.querySelector('.yaoqinghan')
  const audio = document.getElementById('audio')

  audio.src = '/video/qingcunwuqu.mp3'
  audio.loop = true
  audio.autoplay = true

  window.setTimeout(function() {
    cake.classList.add('show')
    point.classList.add('show')

    window.setTimeout(function(){
      qiqiuG.classList.add('show')
      window.setTimeout(function(){
        qiqiuY.classList.add('show')
      },200)

      window.setTimeout(function(){
        yaoqinghan.classList.add('show')

        window.setTimeout(function(){
          hatWhite.classList.add('show')
        },1200)
        window.setTimeout(function(){
          hatYellow.classList.add('show')
        },1400)
        window.setTimeout(function(){
          hatRed.classList.add('show')
        },1600)
      },1000)
    },1200)
  }, 1000)
})(window)

var cursor = document.querySelector('.cursor');
var link = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener('mousedown', function(){
cursor.classList.add('cursor__active');
});

document.addEventListener('mouseup', function(){
cursor.classList.remove('cursor__active');
});

link.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('link__hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('link__hover');
    });
  })
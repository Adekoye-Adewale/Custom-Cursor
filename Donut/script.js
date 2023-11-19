var cursor = document.querySelector('.cursor__donut');
var cursordot = document.querySelector('.cursor__dot');
var link = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursordot.style.left = x + 'px';
  cursordot.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursordot.classList.add('cursor__dot__active');
});

document.addEventListener('mouseup', function(){
  cursordot.classList.remove('cursor__dot__active');
});

link.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('link__hover');
    cursordot.classList.add('cursor__dot__link__hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('link__hover');
    cursordot.classList.remove('cursor__dot__link__hover');
  });
})
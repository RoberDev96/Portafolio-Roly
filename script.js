(function(){
  var box=document.getElementById('ba-box'),big=document.getElementById('ba-big');
  function close(){box.hidden=true;big.removeAttribute('src');}
  document.addEventListener('click',function(e){
    var z=e.target.closest('.ba-zoom');
    if(z){var im=z.querySelector('img');big.src=im.src;big.alt=im.alt;box.hidden=false;return;}
    var b=e.target.closest('.ba-alt button');
    if(b){
      var fig=b.closest('.ba-panel'),im2=fig.querySelector('.ba-zoom img');
      im2.src=b.getAttribute('data-img');im2.alt=b.getAttribute('data-alt');
      fig.querySelectorAll('.ba-alt button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});
      return;
    }
    if(e.target.closest('#ba-box'))close();
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
})();

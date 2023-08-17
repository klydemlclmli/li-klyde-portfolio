export function lazyLoader(){
  const targets = document.querySelectorAll('.lazyMe');

  const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;

          if (img.hasAttribute('lazyPic')){
            const src = img.getAttribute('lazyPic');
            img.setAttribute('src', src);
            img.addEventListener('load', () => {
            img.classList.add('unlazyMe');
          });
          }else{
            img.classList.add('unlazyMe');
          }

          observer.disconnect();
        }

      });

    });

    io.observe(target)
  };

  targets.forEach(lazyLoad);
}
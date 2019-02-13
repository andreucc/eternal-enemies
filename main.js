'use strict';
const main = () => {
  console.log("hey");


  const buildDom = (html) => {
    const main = document.querySelector('main');
    main.innerHTML = html;
    return main;
  }


  const buidSplashScreen = () => {
    const splashScreen = buildDom(`
    <section class="splas-screen">
      <h1>hello</h1>  
      <button>start</button>
    </section>  
      
      
      
      
      `)
  };



buidSplashScreen();
};


window.addEventListener('load', main);
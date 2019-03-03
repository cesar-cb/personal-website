if (module.hot) {
  module.hot.dispose(() => {
    console.log('disposing old ones');
    button.removeEventListener('click', sayHi);
  });
}
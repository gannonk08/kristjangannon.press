(function () {

  console.log('sanity check!');

  $('.button-collapse').sideNav({
       menuWidth: 300,
       edge: 'right',
       closeOnClick: true
     }
   );

  $('#backgroundIMG').sideNav('hide');
  $('#nav-wrapper').sideNav('hide');

})();

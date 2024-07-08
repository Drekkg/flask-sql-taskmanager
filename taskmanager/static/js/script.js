// sidenav initialisation

document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  });

// date-picker
  let datepicker= document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmmm, yyyy",
    i18n: {done : "Select"}
  });



//select init
let selects = document.querySelectorAll('select');
M.FormSelect.init(selects);


//collapsible
let collapsibles  = document.querySelectorAll('.collapsible');
M.Collapsible.init(collapsibles);
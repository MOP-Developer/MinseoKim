function colorsetting(color){
  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i<alist.length) {
    console.log(alist[i]);
    alist[i].style.color = 'color';
    i = i + 1;
  }
}
var Body = {
  Color: function (color) {
    document.querySelector('body').style.color = color;
  },
  BackgroundColor: function (color) {
    document.querySelector('body').style.backgroundColor = color;
  }
}

function NDchange(me){
  var hey = document.querySelector('body');
  if (me.value === 'Night'){
    Body.BackgroundColor('navy');
    Body.Color('white');
    me.value = 'Day';

    colorsetting('#F2C0D2');

  } else {
    Body.BackgroundColor('powderblue');
    Body.Color('black');
    me.value = 'Night';

    colorsetting('#0A5277');
  }
}

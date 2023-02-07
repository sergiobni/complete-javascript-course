'use strict';

//function expressions que sólo se usan una vez, sin que tengan que ser guardadas en memoria

(() => {
  console.log('una vez');
  const isPrivate = 23;
})();

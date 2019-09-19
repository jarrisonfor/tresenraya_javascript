function dibujador(entrada) {
  let p = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (entrada == `${p}`) {
        arr[i][j] = 'o'
      }
      if (arr[i][j] == 'x') {
        equis[p].style.display = 'inline'
        casillas[p].onclick = null;
      } else if (arr[i][j] == 'o') {
        circulos[p].style.display = 'inline'
        casillas[p].onclick = null;
      } else {
        equis[p].style.display = 'none'
        circulos[p].style.display = 'none'
      }
      p++;
    }
  }
}

function contador(circulos, equis) {
  let x = 0
  let o = 0
  /* comprobacion diagonal */
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][i] == 'x') {
      x++
    } else if (arr[i][i] == 'o') {
      o++
    }
  }
  if (o == circulos && x == equis) {
    for (let e = 0; e < arr.length; e++) {
      if (arr[e][e] == '') {
        arr[e][e] = 'x'
        return true
      }
    }
  }
  o = 0;
  x = 0;
  j = arr.length - 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][j] == 'x') {
      x++
    } else if (arr[i][j] == 'o') {
      o++
    }
    j--
  }
  j = arr.length - 1
  if (o == circulos && x == equis) {
    for (let e = 0; e < arr.length; e++) {
      if (arr[e][j] == '') {
        arr[e][j] = 'x'
        return true
      }
      j--
    }
  }
  o = 0;
  x = 0;
  /* comprobacion horizontal */
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 'x') {
        x++
      } else if (arr[i][j] == 'o') {
        o++
      }
    }
    if (o == circulos && x == equis) {
      for (let e = 0; e < arr[i].length; e++) {
        if (arr[i][e] == '') {
          arr[i][e] = 'x'
          return true
        }
      }
    }
    o = 0;
    x = 0;
  }
  /* comprobacion vertical */
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[j][i] == 'x') {
        x++
      } else if (arr[j][i] == 'o') {
        o++
      }
    }
    if (o == circulos && x == equis) {
      for (let e = 0; e < arr[i].length; e++) {
        if (arr[e][i] == '') {
          arr[e][i] = 'x'
          return true
        }
      }
    }
    o = 0;
    x = 0;
  }
  return false
}

function bodyblock() {
  if (contador(0, 2)) {
    /* comprueba que la maquina puede ganar */
    document.getElementById('derrota').style.display = 'inline'
    for (let i = 0; i < casillas.length; i++) {
      casillas[i].onclick = null;
    }
  } else if (contador(2, 0)) {
    /* comprueba que el jugador puede ganar */
    console.log('Casi campeon')
  } else if (arr[1][2] == 'o' && arr[2][1] == 'o') {
    /* si intenta engañar a la maquina pondra una x en la esquina derecha */
    arr[0][2] = 'x'
  } else if (arr[1][1] == '') {
    /* si el medio esta vacio lo ocupa la x */
    arr[1][1] = 'x'
  } else if (arr[1][1] == 'o' && arr[0][2] == '') {
    /* si el medio esta ocupado pondra una x en una esquina */
    arr[0][2] = 'x'
  } else if (contador(0, 1)) {
    /* la maquina ira a hacer un 3 en raya */
    console.log('A mi no me la juegas')
  } else {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] == '') {
          arr[i][j] = 'x'
          return false
        }
      }
    }
  }
}

function principal(casilla) {
  turno++;
  dibujador(casilla.className[casilla.className.length - 1])
  bodyblock()
  dibujador()
  if (turno >= 6) {
    document.getElementById('empate').style.display = 'inline'
  }
}

var casillas = document.getElementsByClassName("ctd");
var equis = document.getElementsByClassName("ximg");
var circulos = document.getElementsByClassName('oimg');
var turno = 1;
var arr = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
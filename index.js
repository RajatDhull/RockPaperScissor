let mxscore;
function MaxScore() {
  mxscore = prompt("Enter the max score!!!");
}
let us = document.getElementById("us");
let usersc = 0,
  cpusc = 0;
let cs = document.getElementById("cs");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let res = document.getElementsByClassName("result");
let arr = ["Rock", "Paper", "Scissor"];
function whitener(xyz) {
  xyz.style.borderColor = "white";
}

function reset0(){
        setTimeout(() => {
          res[0].innerHTML="";
        }, 5000);
}
function won(){
  setTimeout(() => {
    res[0].innerHTML="You Won!!! &#129321;&#129321;&#127881;&#127881;";
  }, 2000);
  setTimeout(() => {
  cs.innerHTML = 0;
  us.innerHTML = 0;
}, 4000);
}       
function lost() {
  setTimeout(() => { 
    res[0].innerHTML="You Lost!! &#128557;&#128557;"
  }, 2000);
  setTimeout(() => {
    cs.innerHTML = 0;
    us.innerHTML = 0;
  }, 4000);
}
function randomgenrock() {
  if (usersc == mxscore|| cpusc == mxscore) {
    cpusc = 0, usersc = 0;
    cs.innerHTML = 0;
    us.innerHTML = 0;
  } else {
    let rand = Math.floor(Math.random() * 3);
    if (rand == 1) {
      cpusc++;
      rock.style.borderColor = "red";
      setTimeout(whitener, 500, rock);
      cs.innerHTML = cpusc;
      res[0].style.color = "Red";
      res[0].innerHTML = "Computer Point &#128546;";
      if (usersc == mxscore || cpusc == mxscore) {
        if(usersc>cpusc){
          won();
          reset0();
      }
      else{
        lost();
        reset0();
      }}
    } else if (rand == 2) {
      usersc++;
      rock.style.borderColor = "green";
      setTimeout(whitener, 500, rock);
      us.innerHTML = usersc;
      res[0].style.color = "green";
      res[0].innerHTML = "Your Point &#128522;";
      if (usersc == mxscore || cpusc == mxscore) {
        if(usersc>cpusc){
          won();
          reset0();
      }
      else{
        lost();
        reset0();

      }}
    } else {
      rock.style.borderColor = "blue";
      res[0].style.color = "blue";
      res[0].innerHTML = "Tie!!";
      setTimeout(whitener, 500, rock);
    }
  }
}
function randomgenpaper() {
  if (usersc == mxscore || cpusc == mxscore) {
    (cpusc = 0), (usersc = 0);
    cs.innerHTML = 0;
    us.innerHTML = 0;
  } else {
    let rand = Math.floor(Math.random() * 3);
    if (rand == 2) {
      cpusc++;
      paper.style.borderColor = "red";
      setTimeout(whitener, 500, paper);
      cs.innerHTML = cpusc;
      res[0].style.color = "Red";
      res[0].innerHTML = "Computer Point &#128546;";
      if (usersc == mxscore || cpusc == mxscore) {
      if(usersc>cpusc){
        won();
        reset0();
    }
    else{
      lost();
      reset0();
    }}
    } else if (rand == 0) {
      usersc++;
      paper.style.borderColor = "green";
      setTimeout(whitener, 500, paper);
      us.innerHTML = usersc;
      res[0].style.color = "Green";
      res[0].innerHTML = "Your Point &#128522;";
      if (usersc == mxscore || cpusc == mxscore) {
        if(usersc>cpusc){
          won();
          reset0();
      }
      else{
        lost();
        reset0();

      }}
    } else {
      paper.style.borderColor = "blue";
      res[0].style.color = "blue";
      res[0].innerHTML = "Tie!!";
      setTimeout(whitener, 500, paper);
    }
  }
}
function randomgenscissor() {
  if (usersc == mxscore || cpusc == mxscore) {
    (cpusc = 0), (usersc = 0);
    cs.innerHTML = 0;
    us.innerHTML = 0;
  } else {
    let rand = Math.floor(Math.random() * 3);
    if (rand == 0) {
      cpusc++;
      scissor.style.borderColor = "red";
      setTimeout(whitener, 500, scissor);
      cs.innerHTML = cpusc;
      res[0].style.color = "Red";
      res[0].innerHTML = "Computer Point &#128546;";
      if (usersc == mxscore || cpusc == mxscore) {
        if(usersc>cpusc){
          setTimeout(() => {
            res[0].innerHTML="You Won!!! &#129321;&#129321;&#127881;&#127881;";
          }, 2000);
          won();

          reset0();

      }
      else{
        setTimeout(() => { 
          res[0].innerHTML="You Lost!! &#128557;&#128557;"
        }, 2000);
        lost();

        reset0();

      }}
    } else if (rand == 1) {
      usersc++;
      scissor.style.borderColor = "green";
      setTimeout(whitener, 500, scissor);
      us.innerHTML = usersc;
      res[0].style.color = "green";
      res[0].innerHTML = "Your Point &#128522;";
      if (usersc == mxscore || cpusc == mxscore) {
        if(usersc>cpusc){
          setTimeout(() => {
            res[0].innerHTML="You Won!!! &#129321;&#129321;&#127881;&#127881;";
          }, 2000);
          won();
          reset0();

      }
      else{
        setTimeout(() => { 
          res[0].innerHTML="You Lost!! &#128557;&#128557;"
        }, 2000);
        lost();
        reset0();

      }}
    } else {
      scissor.style.borderColor = "blue";
      res[0].style.color = "blue";
      res[0].innerHTML = "Tie!!";
      setTimeout(whitener, 500, scissor);
    }
  }
}

rock.addEventListener("click", randomgenrock);
paper.addEventListener("click", randomgenpaper);
scissor.addEventListener("click", randomgenscissor);
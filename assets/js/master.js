function mouseStatus() {

  onmousemove = function(m){
    //console.log("mouse location:", m.clientX, m.clientY)
    document.getElementById('mouseTracker').style.visibility = 'unset'
    document.getElementById('mouseTracker').style.left = m.pageX+4+'px'
    document.getElementById('mouseTracker').style.top = m.pageY+5+'px'
  }
  onmousedown = function(d){
    document.getElementById("mouseTracker").src = "/assets/images/jamesheadOpenMouth.png"
  }
  onmouseup = function(u){
    document.getElementById("mouseTracker").src = "/assets/images/jameshead.png"
  }

  document.getElementById("menu").onmouseover = function(o){
    document.getElementById("mouseTracker").classList.add('rotating')
  }
  document.getElementById("menu").onmouseout = function(mo){
    document.getElementById("mouseTracker").classList.remove('rotating')
  }

}
mouseStatus()

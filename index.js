
const image_id = document.getElementById('imageID')
const x_text = document.getElementById("x_text")
const y_text = document.getElementById("y_text")
const list =  document.getElementById("list")


class Installer {

    constructor() {
        const self = this

        this.x = 0
        this.y = 0

        this.setup()

    }

    setup() {
        // TODO LOAD IMAGE FROM DATABASE or API CALL
        
        // Image
        image_id.src= "lee.jpg"
        this.image = image_id

        // Text
        self.texts = {
            x_text: x_text,
            y_text: y_text
        }
        self.listpoints = []

        self.lists = {
            list: list
        }

        self.position = {
            x: this.x,
            y: this.y
        }
        this.addEventdOnImage() //().bind(this)
        this.onChange()
    }
    onChange(){
        $(document).ready(function(){
            $('#texts').bind("DOMSubtreeModified",function(){
                let points = self.listpoints
                let points_lenght = points.length
                
                if ( points_lenght > 0 ){
                    console.log( "more of zero with lenght", points_lenght )
                    console.log('points are', points)
                    //.getElementById('list').innerHTML = points[i] 
                }
            //document.getElementById("name") 
        });
        })
    }
    addEventdOnImage(){
        this.GetCoordinates()
    }
    
    showList(){
       list.children[0].innerHTML += "<li>"+names[names.length-1]+"</li>"; 
    }
    GetCoordinates(){
        $(document).ready(function() {
            $("#imageID").on("click", function(event) {
                var x = event.pageX - this.offsetLeft;
                var y = event.pageY - this.offsetTop;
                let points =  new Object({
                    x: 0,
                    y: 0
                })

                points.x = x
                points.y = y
                self.listpoints.push(points)

                self.texts.x_text.innerHTML = `X: ${x}`
                self.texts.y_text.innerHTML = `Y: ${y}`
                console.log(self.listpoints)
            });
        });
    }
}

function startInstaller() {
    window.install = new Installer()
}


/*
function FindPosition(oElement)
{
  if(typeof( oElement.offsetParent ) != "undefined")
  {
    for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
    {
      posX += oElement.offsetLeft;
      posY += oElement.offsetTop;
    }
      return [ posX, posY ];
    }
    else
    {
      return [ oElement.x, oElement.y ];
    }
}

function GetCoordinates(e)
{
  var PosX = 0;
  var PosY = 0;
  var ImgPos;
  ImgPos = FindPosition(myImg);
  if (!e) var e = window.event;
  if (e.pageX || e.pageY)
  {
    PosX = e.pageX;
    PosY = e.pageY;
  }
  else if (e.clientX || e.clientY)
    {
      PosX = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      PosY = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
  PosX = PosX - ImgPos[0];
  PosY = PosY - ImgPos[1];
  document.getElementById("x").innerHTML = PosX;
  document.getElementById("y").innerHTML = PosY;
}
*/
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
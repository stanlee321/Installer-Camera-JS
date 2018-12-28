const image_id = document.getElementById('imageID')
const x_text = document.getElementById("x_text")
const y_text = document.getElementById("y_text")
const list =  document.getElementById("list")
const points_text = document.getElementById("points")
const button_start = document.getElementById("btnEmpezar")
const button_delete = document.getElementById("DeleteLast")

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

        // Change button state
        button_start.innerHTML = "Instalando..."
        button_start.disabled = true

        self.points_text = points_text

        // Delete button state
        self.button_delete = button_delete

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
        this.onDeleteLast()
    }
    onChange(){
        $(document).ready(function(){
            $('#texts').bind("DOMSubtreeModified",function(){
                self.points_text.innerHTML = JSON.stringify(self.listpoints, null, 4);
        });
        })
    }
    onDeleteLast(){
        $("#DeleteLast").click(function() {
            console.log('Deleting...')
            self.listpoints.pop();
            self.points_text.innerHTML = JSON.stringify(self.listpoints, null, 4);
          });
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
            });
        });
    }
}

function startInstaller() {
    window.install = new Installer()
}
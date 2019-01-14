const image_id = document.getElementById('imageID')
const x_text = document.getElementById("x_text")
const y_text = document.getElementById("y_text")
const list =  document.getElementById("list")
const points_text = document.getElementById("points")
const button_start = document.getElementById("btnEmpezar")
const button_delete = document.getElementById("DeleteLast")
const button_send = document.getElementById("SendData")

class Installer {

    // Setup constructor
    constructor() {
        const self = this

        this.x = 0
        this.y = 0
        this.response = Object
        this.image_path = Object
        this.setup()

    }

    _get_data(){
        let response
        response = $.get("http://127.0.0.1:5000/api/v1/resources/image");
        console.log('RESPONSE FROM GET: ',response)
        console.log('Status code', response.state)
        console.log('image_path', response.responseJSON)

        if (response.status===200) {
            this.image_path = response.responseJSON
        }else {
            this.image_path = 'none'
        }
        console.log('IMAGE_PATH: ', this.image_path)
        return this.image_path
    }

    setup() {
        // TODO LOAD IMAGE FROM DATABASE or API CALL
        
        // Image
        image_id.src= this._get_data();
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
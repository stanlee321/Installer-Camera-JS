## Server for serve the installer
import flask
from flask import request, jsonify, Response, render_template
import os

app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def home():
    ##return "<h1>Distant Reading Archive</h1><p>This site is a prototype API for distant reading of science fiction novels.</p>"
    message='hello world'
    return render_template('index.html')

@app.route('/api/v1/resources/save_json', methods=['POST']) #GET requests will be blocked
def graph_inputs():
    req_data = request.get_json()
    print('INPUT DATA IS: ', req_data )
    return jsonify(req_data)

@app.route('/api/v1/resources/image', methods=['GET'])
def get_data():
    image_path = "/static/images/lee.jpg"
    response = jsonify(
        {
        'image_path': image_path
        }
    )
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

app.run()
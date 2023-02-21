import json
import uuid

from flask import Flask, render_template, request
from flask_cors import CORS

app = Flask(__name__)

# calling CORS on the app allows everyone to get info from the app. By default, servers an only request from themselves
CORS(app)

# This function will run when the "/" route is called with a GET request.

@app.route('/', methods=['POST'])
def index():
    return render_template('index.html')

@app.route('/post', methods=['POST'])
def post():
    return "recived: {}".format(request.form)

if __name__ == "__main__":
    # debug=True will rerun the code whenever a change is made.
    app.run(debug=True)



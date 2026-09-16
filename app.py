from flask import Flask

app = Flask(__name__)

# default end point (route)
@app.route('/')
def home():
    return '''
<html>
<head><title>hello</title></head>
<body>
    <h1>Hello i am flask </h1>
</body>
</html>'''

@app.route('/hello')
def hello():
    return '''
<html>
<head><title>hello</title></head>
<body>
    <h1>Hello i am hello route </h1>
</body>
</html>'''

app.run(debug=True)


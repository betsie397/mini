from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/home', methods=['GET', 'POST'])
def home():
    if request.method == 'GET':
        file = open("practice_log.csv", "r")
        data = file.read()
        file.close()
        return render_template('./home.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)
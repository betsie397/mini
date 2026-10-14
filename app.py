from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'GET':
        file = open("practice_log.csv", "r")
        data = file.read()
        file.close()
        return render_template('./home.html', data=data)
    if request.method == "POST":
        date = request.form.get("date")
        duration = request.form.get("duration")
        instrument = request.form.get("instrument")
        scales = request.form.get("scales")
        exercises = request.form.get("exercises")
        pieces = request.form.get("pieces")
        description = request.form.get("description")
        insert = str(date) + ", " + str(duration) + ", " + str(instrument) + ", " + str(scales) + ", " + str(exercises) + ", " + str(pieces) + ", " + str(description)
        file = open("practice_log.csv", "a")
        file.write(insert)
        file.close()
        file = open("practice_log.csv", "r")
        data = file.read()
        file.close()
        return render_template('./home.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask, request, jsonify, render_template, redirect, url_for
import csv
from datetime import datetime

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    today = datetime.today().strftime('%Y-%m-%d')
    if request.method == 'GET':
        with open('./practice_log.csv', 'r') as file:
            reader = csv.DictReader(file, delimiter = ',', quotechar = '"', quoting = csv.QUOTE_ALL, skipinitialspace = True)
            data = list(reader)
        with open('./instruments.txt', 'r') as file:
            options = file.readlines()
        options = [option.strip('\n') for option in options]
        print(options)
        return render_template('./home.html', data = data, today = today, options = options)
    if request.method == "POST":
        date = request.form.get("date")
        duration = request.form.get("duration")
        instrument = request.form.get("instrument")
        scales = request.form.get("scales")
        exercises = request.form.get("exercises")
        pieces = request.form.get("pieces")
        description = request.form.get("description")
        insert = str(date) + ", " + str(duration) + ", " + str(instrument) + ", " + str(scales) + ", " + str(exercises) + ", " + str(pieces) + ", \"" + str(description) + "\", " + str(today)
        file = open("./practice_log.csv", "a")
        file.write("\n" + insert )
        file.close()
        return redirect(url_for('home'))

@app.route('/second', methods=["GET"])
def second():
    return render_template('./second.html')

if __name__ == '__main__':
    app.run(debug=True)
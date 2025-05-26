from flask import Flask, jsonify
from flask_cors import CORS
import csv

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

def read_products_from_csv():
    products = []
    with open('products.csv', mode='r', encoding='utf-8') as file:
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            row['nutrients'] = row['nutrients'].split(',')
            row['tags'] = row['tags'].split(',')
            row['id'] = int(row['id'])
            products.append(row)
    return products

@app.route('/api/products', methods=['GET'])
def get_products():
    products = read_products_from_csv()
    return jsonify(products)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
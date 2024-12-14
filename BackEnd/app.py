from pymongo import MongoClient
from flask import Flask,jsonify,request
from flask_cors import CORS
from flask_pymongo import ObjectId


client = MongoClient("mongodb+srv://Meta:Meta@cluster0.xtoxd9q.mongodb.net/?retryWrites=true&w=majority")
app = Flask(__name__)
CORS(app)
db = client['METACOMMERCE']

# Inserting signup data
@app.route("/signup/<username>/<password>/<email>/<gender>",methods=['POST'])
def signup(username,password,email,gender):
       if request.method == "POST":
              collection = db['signup']
              collection.insert_one({"username":username,"password":password,"email":email,"gender":gender})
              return "Inserted"

# Aythenticating data
@app.route("/login",methods=['GET'])
def HOME():
       if request.method == "GET":
              collection = db['login']
              users = []
              for doc in collection.find():
                     users.append({
                            '_id':str(ObjectId(doc['_id'])),
                            'username':doc['username'],
                            'password':doc['password']
                     })
              return jsonify(users)

if __name__ == "__main__":
       app.run(debug=True)
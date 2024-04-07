from flask import Flask, request, jsonify
from flask_migrate import Migrate 
from flask_cors import CORS
from model import db, User, Service, Review 
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'your_secret_key'
CORS(app)
migrate = Migrate(app, db)
db.init_app(app)

# Routes for user authentication (sign up, log in, log out)
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    password_confirmation = data.get('password_confirmation')

    if not username or not password or not password_confirmation:
        return jsonify({'error': 'Username, password, and password confirmation are required'}), 400

    if password != password_confirmation:
        return jsonify({'error': 'Password and password confirmation do not match'}), 400

    existing_user = User.query.filter_by(username=username).first()
    if existing_user:
        return jsonify({'error': 'Username already exists'}), 400

    new_user = User(username=username)
    new_user.set_password(password)  # Set password using the set_password method
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User signed up successfully'}), 200

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error': 'Username and password are required'}), 400

    user = User.query.filter_by(username=username).first()
    if not user or not user.check_password(password):
        return jsonify({'error': 'Invalid username or password'}), 401

    # Here you can implement your login logic, such as setting session cookies or JWT tokens
    return jsonify({'message': 'User logged in successfully'}), 200

@app.route('/logout', methods=['GET'])
def logout():
    # Implement user logout logic here, such as clearing session cookies or JWT tokens
    return jsonify({'message': 'User logged out successfully'}), 200

# Routes for services (GET, POST, PATCH, DELETE)
@app.route('/services', methods=['GET'])
def get_services():
    services = Service.query.all()
    return jsonify([service.serialize() for service in services]), 200

@app.route('/services', methods=['POST'])
def create_service():
    data = request.get_json()
    name = data.get('name')
    category = data.get('category')

    if not name or not category:
        return jsonify({'error': 'Name and category are required'}), 400

    new_service = Service(name=name, category=category)
    db.session.add(new_service)
    db.session.commit()

    return jsonify({'message': 'Service created successfully'}), 201

@app.route('/services/<int:service_id>', methods=['PATCH'])
def update_service(service_id):
    service = Service.query.get(service_id)
    if not service:
        return jsonify({'error': 'Service not found'}), 404

    data = request.get_json()
    name = data.get('name')
    category = data.get('category')

    if name:
        service.name = name
    if category:
        service.category = category

    db.session.commit()
    return jsonify({'message': 'Service updated successfully'}), 200

@app.route('/services/<int:service_id>', methods=['DELETE'])
def delete_service(service_id):
    service = Service.query.get(service_id)
    if not service:
        return jsonify({'error': 'Service not found'}), 404

    db.session.delete(service)
    db.session.commit()
    return jsonify({'message': 'Service deleted successfully'}), 200

# Routes for reviews (GET, POST, PATCH, DELETE)
@app.route('/services/<int:service_id>/reviews', methods=['GET'])
def get_reviews(service_id):
    service = Service.query.get(service_id)
    if not service:
        return jsonify({'error': 'Service not found'}), 404
    return jsonify([review.serialize() for review in service.reviews]), 200

@app.route('/services/<int:service_id>/reviews', methods=['POST'])
def create_review(service_id):
    data = request.get_json()
    rating = data.get('rating')
    comment = data.get('comment')
    user_id = data.get('user_id')

    if not rating or not comment or not user_id:
        return jsonify({'error': 'Rating, comment, and user_id are required'}), 400

    new_review = Review(rating=rating, comment=comment, user_id=user_id, service_id=service_id)
    db.session.add(new_review)
    db.session.commit()

    return jsonify({'message': 'Review created successfully'}), 201

@app.route('/services/<int:service_id>/reviews/<int:review_id>', methods=['PATCH'])
def update_review(service_id, review_id):
    review = Review.query.filter_by(id=review_id, service_id=service_id).first()
    if not review:
        return jsonify({'error': 'Review not found'}), 404

    data = request.get_json()
    rating = data.get('rating')
    comment = data.get('comment')

    if rating:
        review.rating = rating
    if comment:
        review.comment = comment

    db.session.commit()
    return jsonify({'message': 'Review updated successfully'}), 200

@app.route('/services/<int:service_id>/reviews/<int:review_id>', methods=['DELETE'])
def delete_review(service_id, review_id):
    review = Review.query.filter_by(id=review_id, service_id=service_id).first()
    if not review:
        return jsonify({'error': 'Review not found'}), 404

    db.session.delete(review)
    db.session.commit()
    return jsonify({'message': 'Review deleted successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)

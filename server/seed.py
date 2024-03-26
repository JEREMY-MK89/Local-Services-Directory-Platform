from app import app, db
from model import User, Service, Review

def seed_data():
    with app.app_context():
        # Create users
        user1 = User(username='user1', password='password1')
        user2 = User(username='user2', password='password2')
        user3 = User(username='user3', password='password3')

        db.session.add_all([user1, user2, user3])
        db.session.commit()

        # Create services
        service1 = Service(name='Clinic A', category='Clinic')
        service2 = Service(name='Salon B', category='Salon')
        service3 = Service(name='Shopping Mall C', category='Shopping Mall')

        db.session.add_all([service1, service2, service3])
        db.session.commit()

        # Create reviews
        review1 = Review(rating=5, comment='Great service!', service=service1, user=user1)
        review2 = Review(rating=3, comment='Average experience.', service=service2, user=user2)
        review3 = Review(rating=2, comment='Poor service quality.', service=service3, user=user3)

        db.session.add_all([review1, review2, review3])
        db.session.commit()

if __name__ == '__main__':
    seed_data()

def generate_offer(user_id: int):
    # Simple rule-based personalization
    if user_id % 2 == 0:
        return {
            "offer": "10% discount on fashion products"
        }
    else:
        return {
            "offer": "Free delivery on your next order"
        }

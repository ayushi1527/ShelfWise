import pandas as pd

# Dummy user-product interaction data
data = {
    "user_id": [1, 1, 1, 2, 2, 3],
    "product": ["Shoes", "Watch", "Shoes", "Bag", "Shoes", "Watch"]
}

df = pd.DataFrame(data)

def recommend_products(user_id: int, top_n: int = 3):
    # Products already bought by user
    user_products = df[df["user_id"] == user_id]["product"].tolist()

    # Recommend most common products not already bought
    popular_products = (
        df["product"].value_counts().index.tolist()
    )

    recommendations = [
        product for product in popular_products
        if product not in user_products
    ]

    return recommendations[:top_n]

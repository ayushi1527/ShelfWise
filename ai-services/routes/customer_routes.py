from fastapi import APIRouter
from models.recommendation.recommender import recommend_products
from models.recommendation.offers import generate_offer

router = APIRouter()

@router.get("/recommend")
def get_recommendations(user_id: int):
    return {
        "recommended_products": recommend_products(user_id)
    }

@router.get("/offers")
def get_offers(user_id: int):
    return generate_offer(user_id)

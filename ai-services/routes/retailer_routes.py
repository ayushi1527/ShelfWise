from fastapi import APIRouter
from forecasting.demand_forecast import forecast_demand
from inventory.expiry_detector import detect_near_expiry

router = APIRouter()

@router.post("/forecast-demand")
def demand_forecast(data: dict):
    return forecast_demand(data)

@router.get("/near-expiry")
def near_expiry():
    return detect_near_expiry()

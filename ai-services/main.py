from fastapi import FastAPI
from routes.retailer_routes import router as retailer_router

app = FastAPI(title="Retail AI Services")

app.include_router(retailer_router, prefix="/retailer")

@app.get("/")
def home():
    return {"status": "Retail AI Service Running"}

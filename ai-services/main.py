from fastapi import FastAPI

# Import routers
from routes.retailer_routes import router as retailer_router
from routes.customer_routes import router as customer_router

# Create FastAPI app
app = FastAPI(title="Retail AI Services")

# Include Retailer APIs
app.include_router(retailer_router, prefix="/retailer")

# Include Customer APIs
app.include_router(customer_router, prefix="/ai/customer")

# Health check
@app.get("/")
def home():
    return {"status": "Retail AI Service Running"}

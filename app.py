from fastapi import FastAPI
from routes.customer_routes import router as customer_router

# Create FastAPI app
app = FastAPI(title="Customer AI Service")

# Health check endpoint
@app.get("/")
def health_check():
    return {"status": "Customer AI Service is running"}

# Include customer AI routes (recommendations + offers)
app.include_router(customer_router, prefix="/ai/customer")

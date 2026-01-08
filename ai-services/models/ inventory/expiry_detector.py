from datetime import datetime

def detect_near_expiry():
    products = [
        {"name": "Milk", "expiry": "2026-01-10"},
        {"name": "Bread", "expiry": "2026-01-08"},
        {"name": "Cheese", "expiry": "2026-02-01"}
    ]

    today = datetime.today()
    alerts = []

    for p in products:
        expiry_date = datetime.strptime(p["expiry"], "%Y-%m-%d")
        days_left = (expiry_date - today).days

        if days_left <= 7:
            alerts.append({
                "product": p["name"],
                "days_left": days_left,
                "suggested_discount": "20%"
            })

    return alerts

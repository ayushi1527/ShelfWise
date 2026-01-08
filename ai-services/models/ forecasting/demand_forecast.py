from sklearn.linear_model import LinearRegression
import numpy as np

def forecast_demand(data):
    X = np.arange(len(data)).reshape(-1, 1)
    y = np.array(data)

    model = LinearRegression()
    model.fit(X, y)

    future = np.array([[len(data)]])
    return model.predict(future)[0]

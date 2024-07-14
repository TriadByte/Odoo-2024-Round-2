from fastapi import APIRouter
from api.v1.routes import router as v1_router
from api.v2.routes import router as v2_router

router = APIRouter()

@router.get("/", response_description="Api Version Manager route")
# Define the API Version Manager Route
async def hello_world():
    return {
        "location" : "api/",
        "message" : "Hello World",
        "version" : "1.0.0",
        "status" : 200,
        "status_message" : "OK",
        "data" : {
            "message" : "Welcome to the API"
        }
    }

router.include_router(v1_router, tags=["/v1"], prefix="/v1")

# API Updates Goes Here
router.include_router(v2_router, tags=["/v2"], prefix="/v2")

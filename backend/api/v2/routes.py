from fastapi import APIRouter

router = APIRouter()

@router.get("/", response_description="Api Version Manager route")
async def hello_world():
    return {
        "location" : "api/v2",
        "message" : "New API Version V2",
        "version" : "1.0.0",
        "status" : 200,
        "status_message" : "OK",
        "data" : {
            "message" : "Welcome to the API"
        }
    }

import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from sockets import sio_app
from api.routes import router

import os


app = FastAPI()

# Mount the static files

app.mount("/static", StaticFiles(directory='static'), name="static")
app.mount('/', app=sio_app)

# Mount the static files

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




def start_server():
    port = int(os.getenv('BACKEND_PORT', 5000))
    uvicorn.run("server:app", port=port ,reload=True)

if __name__ == '__main__':
    start_server()

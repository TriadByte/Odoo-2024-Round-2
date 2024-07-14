from fastapi import FastAPI
from firebaseConfig import *
from api.routes import router

import socketio
import json

sio_server = socketio.AsyncServer(
    async_mode='asgi',
    cors_allowed_origins=[]
)

app = FastAPI()

app.dbApi = dbAPI
app.fsApi = fsAPI
app.authApi = authAPI

# Mount the API Here
app.include_router(router , tags=["/api"], prefix="/api")

sio_app = socketio.ASGIApp(
    socketio_server=sio_server,
    socketio_path='sockets',
    other_asgi_app=app
)

# Define Socket.IO event handlers
@sio_server.event
async def connect(sid, environ):
    print(f"Client connected: {sid}")
    await sio_server.emit('message', {'data': 'Welcome!'}, to=sid)

@sio_server.event
async def disconnect(sid):
    print(f"Client disconnected: {sid}")

@sio_server.event
async def handshake(sid, data):
    try:
        print(f"Message from {sid}: {data}")
        resp = {'data': 'Welcome!'}
        data_resp = json.dumps(resp)
        await sio_server.emit('responseHandshake', data_resp, to=sid)
    except Exception as e:
        print(f"Error handling handshake: {e}")

@sio_server.event
async def my_event(sid, data):
    try:
        print(f"Message from {sid}: {data}")
        await sio_server.emit('response', {'data': f"Received your message: {data}"}, to=sid)
    except Exception as e:
        print(f"Error handling my_event: {e}")

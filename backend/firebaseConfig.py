#  FIrebase Variables
import os
import firebase_admin
from firebase_admin import credentials, auth, firestore, storage
from dotenv import load_dotenv
load_dotenv()
cred = credentials.Certificate(os.environ['GOOGLE_APP_JSON'])
firebase_admin.initialize_app(cred , {
    "storageBucket": "template-project-5370b.appspot.com"
})

authAPI = auth
dbAPI = firestore.client()
fsAPI = storage.bucket()
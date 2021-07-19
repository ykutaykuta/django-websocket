from api import consumers
from django.urls import path
from api import consumers

websocket_urlpatterns = [
    path("ws/register/<str:name>", consumers.Consumer.as_asgi()),
]

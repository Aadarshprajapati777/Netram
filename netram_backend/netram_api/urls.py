# from django.conf.urls import url
from django.urls import path, include
from .views import (
    TodoListApiView,
)

urlpatterns = [
    path ('api-auth/', include('rest_framework.urls')),
    path('api', TodoListApiView.as_view()),
]
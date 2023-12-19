from django.urls import path
from .views import homepage, post_detail, add_post, delete_post
from django.views.generic.base import RedirectView

urlpatterns = [
    path('', homepage, name='homepage'),
    path('post/<int:pk>/', post_detail, name='post_detail'),
    path('add_post/', add_post, name='add_post'),
    path('delete_post/<int:pk>/', delete_post, name='delete_post'),
]

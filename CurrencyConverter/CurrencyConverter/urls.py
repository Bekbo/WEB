from django.contrib import admin
from django.urls import path, include
from .views import root
urlpatterns = [
    # link to admin page, def by django
    path('admin/', admin.site.urls),
    # link to main page, definde by creator with imported root view
    path('', root),
]


from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView


urlpatterns = [
    
    path('admin/', admin.site.urls),
    path('home/', include('Main.urls')),
    path('newCoords/', include('Main.urls')),
    path('', RedirectView.as_view(url='/main/'))
]

from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_protect
from .models import points
import json


# Create your views here.
def home(request):
    return render(request, 'main.html')
    #return HttpResponse('poggers')


@csrf_protect
def newCoords(request):
    if request.method =='POST':
        pointName = request.POST['pointName']
        fieldPoints= request.POST['fieldPoints']
        point = points(pointName= pointName,fieldPoints=json.dump(fieldPoints))
        point.save


def getCoords(request):
    
        return

from django.shortcuts import render
from django.http import HttpResponse

from .models import points
import json


# Create your views here.
def home(request):
    return render(request, 'main.html')
    #return HttpResponse('poggers')


def newCoords(request):
    if request.method =='POST':
        pointName = request.POST['pointName']
        fieldPoints= request.POST['fieldPoints']
        point = points(pointName= pointName,fieldPoints=json.dump(fieldPoints))
        point.save
    else:
        print('well fuck')

def getCoords(request):
    
        return

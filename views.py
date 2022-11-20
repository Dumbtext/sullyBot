from django.shortcuts import render
from django.http import HttpResponse
from .models import points


# Create your views here.
def home(request):
    return render(request, 'main.html')
    #return HttpResponse('poggers')

def newCoords(request):
    if request.method =='POST':
        pointName = request.POST['pointName']
        fieldPoints= request.POST['fieldPoints']
        point = points(pointName= pointName,fieldPoints=fieldPoints)
        point.save


def getCoords(request):
    
        return

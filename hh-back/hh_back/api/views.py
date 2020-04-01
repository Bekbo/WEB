from django.shortcuts import render
from .models import Vacancy, Company
from django.http.response import JsonResponse
# Create your views here.
def companies(request):
    if request.method == 'GET':
        json_comps = [c.to_json() for c in Company.objects.all()]
        return JsonResponse(json_comps, safe=False)
    else:
        return JsonResponse("error", safe=False)

def company(request, id):
    if request.method == 'GET':
        json_comp = Company.objects.get(id=id).to_json()
        return JsonResponse(json_comp, safe=False)
    else:
        return JsonResponse("error", safe=False)

def compVacancies(request, id):
    if request.method == 'GET':
        json_vacs = [v.to_json() for v in Company.objects.get(id=id).vacancy_set.all()]
        return JsonResponse(json_vacs, safe=False)
    else:
        return JsonResponse("error", safe=False)

def vacancies(request):
    if request.method == 'GET':
        json_vacs = [v.to_json() for v in Vacancy.objects.all()]
        return JsonResponse(json_vacs, safe=False)
    else:
        return JsonResponse("error", safe=False)

def vacancy(request, id):
    if request.method == 'GET':
        json_vac = Vacancy.objects.get(id=id).to_json()
        return JsonResponse(json_vac, safe=False)
    else:
        return JsonResponse("error", safe=False)

def vacanciesTopTen(request):
    if request.method == 'GET':
        json_vacs = [v.to_json() for v in Vacancy.objects.all().order_by('-salary')[:10]]
        return JsonResponse(json_vacs, safe=False)
    else:
        return JsonResponse("error", safe=False)

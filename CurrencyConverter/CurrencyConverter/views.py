from django.shortcuts import render
import requests
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from bs4 import BeautifulSoup
from django import forms


class ResultForm(forms.Form):
    result = forms.FloatField(label="result")


def getEthToDoll():
    ethToDollar = 'https://eth.currencyrate.today/usd'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36'}
    page = requests.get(ethToDollar, headers=headers)
    soup = BeautifulSoup(page.content, 'html.parser')
    filtering = soup.findAll("span", {"class": "cc-result"})
    return float(filtering[1].text[:6])


@api_view(['POST', 'GET'])
@csrf_exempt
def root(request):
    if request.method == 'GET':
        return render(request, 'index.html')
    elif request.method == 'POST':
        form = ResultForm(request.POST)
        eth = request.POST.get('eth')
        eth_doll = float(getEthToDoll())
        if int(eth) > 0:
            dollar = round(int(eth) * eth_doll, 2)
            form.result = dollar
            return render(request, 'index.html', {'form': form.result})
        else:
            return Response({"result": 'null', "error": "Incorrect Ethereum number"}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({"error": "Wrong request method"}, status=status.HTTP_404_NOT_FOUND)
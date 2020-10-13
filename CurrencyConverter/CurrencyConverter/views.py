from django.shortcuts import render
import requests
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from bs4 import BeautifulSoup
from django import forms

# a class to form forms from requests and return that form
class ResultForm(forms.Form):
    # only 1 float field to write the result
    result = forms.FloatField(label="result")


def getEthToDoll():
    # link to get eth cost on dollars
    ethToDollar = 'https://eth.currencyrate.today/usd'
    # assign headers for request, so the site think that the real user is asking the page
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36'}
    # get page with get request with following headers
    page = requests.get(ethToDollar, headers=headers)
    # get page content on html by BeautifulSoup
    soup = BeautifulSoup(page.content, 'html.parser')
    # get filtered data by span, thats classes are cc-result
    filtering = soup.findAll("span", {"class": "cc-result"})
    # return float number from filtered arrays's 1 elems 6 position
    return float(filtering[1].text[:6])


@api_view(['POST', 'GET'])
@csrf_exempt
def root(request):
    # main func for request
    # if request type of get redirect to tempate page
    if request.method == 'GET':
        return render(request, 'index.html')
    # if request method is post convert and return result
    elif request.method == 'POST':
        # get form from request
        form = ResultForm(request.POST)
        # get entered eth from request
        eth = request.POST.get('eth')
        # get current cost of 1 eth from legal website
        eth_doll = float(getEthToDoll())
        # if eth is valid
        if int(eth) > 0:
            # assign dollar miltiplication of two values, number of eths and cost of 1 eth
            # round to hundreeth
            dollar = round(int(eth) * eth_doll, 2)
            # assign a result to form
            form.result = dollar
            # return form to template
            return render(request, 'index.html', {'form': form.result})
        else:
            # return error as eth number is incorrect
            return Response({"result": 'null', "error": "Incorrect Ethereum number"}, status=status.HTTP_400_BAD_REQUEST)
    else:
        # if any other requests appear return error
        return Response({"error": "Wrong request method"}, status=status.HTTP_404_NOT_FOUND)
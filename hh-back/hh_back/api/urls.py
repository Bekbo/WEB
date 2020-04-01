from django.urls import path

from . import views

urlpatterns = [
    path('companies', views.companies),
    path('companies/<int:id>', views.company),
    path('companies/<int:id>/vacancies', views.compVacancies),
    path('vacancies', views.vacancies),
    path('vacancies/<int:id>', views.vacancy),
    path('vacancies/top_ten', views.vacanciesTopTen)
]
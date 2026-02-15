from django.contrib import admin
from django.urls import path
from .import views

urlpatterns = [
path('transactions/' , views.TransactionListCreateView.as_view() )

]

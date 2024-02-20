from django.urls import path
from . import views


urlpatterns=[
	path('question/<str:field>',views.QuestionView.as_view(),name="question")
]
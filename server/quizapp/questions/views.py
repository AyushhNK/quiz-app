from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Question
from .serializers import QuestionSerializer

# Create your views here.
class QuestionView(APIView):
	def get(self,request):
		questions=Question.objects.all()
		serilized=QuestionSerializer(questions,many=True)
		return Response(serilized.data)
	def post(self,request):
		field=request.data.get('field')
		question_text=request.data.get('question_text')
		option1=request.data.get('option1')
		option2=request.data.get('option2')
		option3=request.data.get('option3')
		option4=request.data.get('option4')
		correct_option=request.data.get('correct_option')
		Question.objects.create(field=field,question_text=question_text,option1=option1,option2=option2,option3=option3,option4=option4,correct_option=correct_option)
		return Response({"message":"created"})
from django.db import models

class Question(models.Model):
    FIELD_CHOICES = [
        ('science', 'Science'),
        ('gk', 'General Knowledge'),
        # Add more field choices as needed
    ]

    field = models.CharField(max_length=20, choices=FIELD_CHOICES)
    question_text = models.CharField(max_length=200)
    option1 = models.CharField(max_length=100)
    option2 = models.CharField(max_length=100)
    option3 = models.CharField(max_length=100)
    option4 = models.CharField(max_length=100)
    correct_option = models.CharField(max_length=100)

    def __str__(self):
        return self.question_text

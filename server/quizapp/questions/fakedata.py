# Import the Question model
from .models import Question

# Example data for 'gk' field
Question.objects.create(
    field='gk',
    question_text='Who wrote "Pride and Prejudice"?',
    option1='Charles Dickens',
    option2='Jane Austen',
    option3='Leo Tolstoy',
    option4='Mark Twain',
    correct_option='Jane Austen'
)

Question.objects.create(
    field='gk',
    question_text='What is the capital city of Australia?',
    option1='Sydney',
    option2='Melbourne',
    option3='Canberra',
    option4='Brisbane',
    correct_option='Canberra'
)

Question.objects.create(
    field='gk',
    question_text='Which planet is known as the "Blue Planet"?',
    option1='Earth',
    option2='Mars',
    option3='Venus',
    option4='Jupiter',
    correct_option='Earth'
)

Question.objects.create(
    field='gk',
    question_text='Who was the first President of the United States?',
    option1='Thomas Jefferson',
    option2='John Adams',
    option3='George Washington',
    option4='James Madison',
    correct_option='George Washington'
)

Question.objects.create(
    field='gk',
    question_text='What is the currency of Japan?',
    option1='Yuan',
    option2='Won',
    option3='Yen',
    option4='Ringgit',
    correct_option='Yen'
)

Question.objects.create(
    field='gk',
    question_text='Who painted the Mona Lisa?',
    option1='Vincent van Gogh',
    option2='Leonardo da Vinci',
    option3='Pablo Picasso',
    option4='Claude Monet',
    correct_option='Leonardo da Vinci'
)

Question.objects.create(
    field='gk',
    question_text='Which country is known as the "Land of the Rising Sun"?',
    option1='China',
    option2='India',
    option3='Japan',
    option4='South Korea',
    correct_option='Japan'
)

Question.objects.create(
    field='gk',
    question_text='What is the largest ocean on Earth?',
    option1='Atlantic Ocean',
    option2='Indian Ocean',
    option3='Southern Ocean',
    option4='Pacific Ocean',
    correct_option='Pacific Ocean'
)

Question.objects.create(
    field='gk',
    question_text='Who discovered penicillin?',
    option1='Alexander Fleming',
    option2='Marie Curie',
    option3='Louis Pasteur',
    option4='Robert Koch',
    correct_option='Alexander Fleming'
)

Question.objects.create(
    field='gk',
    question_text='What is the main ingredient in guacamole?',
    option1='Tomato',
    option2='Avocado',
    option3='Onion',
    option4='Lime',
    correct_option='Avocado'
)

# Example data for 'science' field
Question.objects.create(
    field='science',
    question_text='What is the molecular formula for water?',
    option1='H2O',
    option2='CO2',
    option3='O2',
    option4='NaCl',
    correct_option='H2O'
)

Question.objects.create(
    field='science',
    question_text='Which gas is essential for photosynthesis?',
    option1='Oxygen',
    option2='Carbon Dioxide',
    option3='Nitrogen',
    option4='Methane',
    correct_option='Carbon Dioxide'
)

Question.objects.create(
    field='science',
    question_text='What is the speed of light in a vacuum?',
    option1='300,000 km/s',
    option2='150,000 km/s',
    option3='450,000 km/s',
    option4='600,000 km/s',
    correct_option='300,000 km/s'
)

Question.objects.create(
    field='science',
    question_text='Which element has the chemical symbol "O"?',
    option1='Osmium',
    option2='Oxygen',
    option3='Gold',
    option4='Iron',
    correct_option='Oxygen'
)

Question.objects.create(
    field='science',
    question_text='What is the powerhouse of the cell?',
    option1='Nucleus',
    option2='Mitochondria',
    option3='Endoplasmic Reticulum',
    option4='Golgi Apparatus',
    correct_option='Mitochondria'
)

Question.objects.create(
    field='science',
    question_text='What is the largest planet in our solar system?',
    option1='Earth',
    option2='Jupiter',
    option3='Mars',
    option4='Saturn',
    correct_option='Jupiter'
)

Question.objects.create(
    field='science',
    question_text='Which scientist is known for the theory of general relativity?',
    option1='Isaac Newton',
    option2='Galileo Galilei',
    option3='Albert Einstein',
    option4='Niels Bohr',
    correct_option='Albert Einstein'
)

Question.objects.create(
    field='science',
    question_text='What is the chemical symbol for iron?',
    option1='Fe',
    option2='Au',
    option3='Ag',
    option4='Cu',
    correct_option='Fe'
)

Question.objects.create(
    field='science',
    question_text='Which planet is known as the Red Planet?',
    option1='Earth',
    option2='Mars',
    option3='Venus',
    option4='Jupiter',
    correct_option='Mars'
)

Question.objects.create(
    field='science',
    question_text='What is the process by which plants make their own food?',
    option1='Photosynthesis',
    option2='Respiration',
    option3='Fermentation',
    option4='Transpiration',
    correct_option='Photosynthesis'
)

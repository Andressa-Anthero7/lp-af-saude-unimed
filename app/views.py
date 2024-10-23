from django.shortcuts import render
import requests


from django.shortcuts import render
import requests

# Create your views here.
def index(request):
    if request.method == 'POST':
        # Capturar os dados do formulário
        nome_leads = request.POST.get('nome') 
        whats_app_leads = request.POST.get('whatsapp')

        whats_app_receptor = "5516993379492"
        
        # Montar a mensagem
        message = f"Olá, Adriana! Voçe recebeu novo leads- Nome:{nome_leads} - WhatsApp:{whats_app_leads}"

        # Sua API Key fornecida pelo CallMeBot
        api_key = "1271569"  # Substitua pela sua API Key

        # URL da API do CallMeBot (o WhatsApp deve estar no formato internacional)
        url = f'https://api.callmebot.com/whatsapp.php?phone={whats_app_receptor}&text={message}&apikey={api_key}'

        # Enviar a mensagem via requisição GET
        response = requests.get(url)

        # Verificar a resposta
        if response.status_code == 200:
            print("Mensagem enviada com sucesso!")
            return render(request, 'site/index.html')
        else:
            print("Falha ao enviar a mensagem.")
            print(f"Status code: {response.status_code}")
    else:
        print("GET")
        return render(request, 'site/index.html')

    


from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render_to_response
from django.shortcuts import render
from django.core.mail import send_mail, BadHeaderError

from .forms import ContactForm
# Create your views here.


def main_page(request):
    return render(request, 'mysite/index.html', {})


def send_mail(request):
    if request.method == 'POST':
        your_givenname = request.POST.get('', '')
        your_surname = request.POST.get('', '')
        your_email = request.POST.get('', '')
        email_text = request.POST.get('', '')

        if your_givenname and your_surname and your_email and email_text:
            try:
                send_mail('Email z portfolia', email_text, your_email, ['thomas.hudecek@gmail.com'])
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            return HttpResponseRedirect('/contact/thankouy/')
        else:
            return render_to_response('index.gtml', {'form': ContactForm})

        return render_to_response('index.gtml', {'form': ContactForm()}, RequestContext(request))


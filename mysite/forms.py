from django import forms


class ContactForm(forms.Form):
    your_givenname = forms.CharField(label='Vaše jméno', max_length=50)
    your_surname = forms.CharField(label='Vaše příjmení', max_length=50)
    your_email = forms.EmailField(label='Váš email')
    email_text = forms.CharField(label='Vaše zpráva pro mě')


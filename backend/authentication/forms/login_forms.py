from django import forms

class LogInForm(forms.Form):
    username = forms.CharField(max_length=191, label='Email')
    password = forms.CharField(widget=forms.PasswordInput)
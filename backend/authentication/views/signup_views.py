from django.shortcuts import redirect, render
from ..forms.signup_forms import SignUpForm

def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            # Handle successful sign up
            return redirect('signup_success')
    else:
        form = SignUpForm()
    return render(request, '../templates/signup.html', {'form': form})

def signup_success(request):
    return render(request, '../templates/signup_success.html')
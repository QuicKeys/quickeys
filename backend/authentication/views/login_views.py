from django.shortcuts import redirect, render
from django.contrib.auth import authenticate, login
from ..forms.login_forms import LogInForm

def login_func(request):
    if request.method == 'POST':
        form = LogInForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                # Handle successful login
                return redirect('login-success')
            else:
                # Invalid credentials, show error message
                form.add_error(None, 'Invalid email or password')
    else:
        form = LogInForm()
    return render(request, '../templates/login.html', {'form': form})
    
def login_success(request):
    return render(request, '../templates/login_success.html')
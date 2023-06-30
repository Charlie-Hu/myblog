from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import User
from django.http import JsonResponse


def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        password_again = request.POST.get('password_again')

        if len(password) < 8 or len(username) < 8:
            return JsonResponse(
                {'success': False, 'message': 'the length of the Passwords and Username is less than 8'})

        if password != password_again:
            return JsonResponse({'success': False, 'message': 'Passwords do not match'})

        if User.objects.filter(username=username).exists():
            return JsonResponse({'success': False, 'message': 'Username already exists'})

        if User.objects.filter(email=email).exists():
            return JsonResponse({'success': False, 'message': 'Email already exists'})

        user = User.objects.create_user(username=username, email=email, password=password)
        return JsonResponse({'success': True, 'message': 'User registered successfully'})

    return JsonResponse({'success': False, 'message': 'Invalid request method'})

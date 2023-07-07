import json
from datetime import datetime

from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.core.paginator import Paginator
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from myapp.models import UserComment


@csrf_exempt
def register(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
        password_again = data.get('password_again')
        # print(request.body)
        if len(password) < 8 or len(username) < 8:
            return JsonResponse(
                {'success': False, 'message': 'the length of the Passwords or Username is less than 8'})

        if password != password_again:
            return JsonResponse({'success': False, 'message': 'Passwords do not match'})

        if User.objects.filter(username=username).exists():
            return JsonResponse({'success': False, 'message': 'Username already exists'})

        if User.objects.filter(email=email).exists():
            return JsonResponse({'success': False, 'message': 'Email already exists'})

        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()
        return JsonResponse({'success': True, 'message': 'User registered successfully'})

    return JsonResponse({'success': False, 'message': 'Invalid request method'})


@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        print(username, password)
        user = authenticate(request, username=username, password=password)
        print(user)
        if user is not None:
            login(request, user)
            return JsonResponse({'login': True, 'message': 'Login successful', 'username': user.username})
        else:
            return JsonResponse({'login': False, 'message': 'Wrong username or password', 'username': ""})
    return JsonResponse({'login': False, 'message': 'Invalid request method', 'username': ""})

@csrf_exempt
def user_comment(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        comment = data.get('comment')
        currentTime = datetime.now()
        user = User.objects.get(username=username)
        userComment = UserComment(user=user, comment=comment, time=currentTime)
        userComment.save()
    page_number = request.GET.get('page', 1)
    user_comments = UserComment.objects.all().order_by('-time')
    paginator = Paginator(user_comments, 5)
    try:
        page = paginator.get_page(page_number)
        comments = []

        for comment in page:
            comment_data = {
                'username': comment.user.username,
                'comment': comment.comment,
                'time': comment.time.strftime('%Y-%m-%d %H:%M:%S')
            }
            comments.append(comment_data)
        return JsonResponse({'success': True, 'comments': comments})
    except Exception as e:
        return JsonResponse({'success': False, 'error': str(e)})

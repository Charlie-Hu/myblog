from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone


class UserComment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.TextField()
    time = models.DateTimeField(default=timezone.now)

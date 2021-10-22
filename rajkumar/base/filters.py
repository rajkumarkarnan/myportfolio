import django_filters
from django_filters import CharFilter

from .models import *

class PostFilter(django_filters.FilterSet):

	class Meta:
		model = Post
		fields = ['headline', 'tags']
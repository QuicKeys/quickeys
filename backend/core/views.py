from .mixins import IsAdminMixin
from rest_framework.views import APIView


class BaseAPIView(IsAdminMixin, APIView):
    pass
from .mixins import IsAdminMixin, IsAuthenticatedMixin
from rest_framework.views import APIView


class BaseAdminAPIView(IsAdminMixin, APIView):
    pass

class BaseAuthenticatedAPIView(IsAuthenticatedMixin, APIView):
    pass
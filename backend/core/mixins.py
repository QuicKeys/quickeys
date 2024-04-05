from rest_framework import permissions


class IsStaffUserPermission(permissions.BasePermission):
    """
    Allows access only to staff users.
    """
    def has_permission(self, request, view):
        return request.user and request.user.is_staff

class IsStaffUserMixin:
    """
    Mixin class to apply IsStaffUser permission to views.
    """
    permission_classes = [IsStaffUserPermission]
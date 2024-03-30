from ninja import NinjaAPI
from items.api import router as items_router
from users.api import router as users_router

api = NinjaAPI()

api.add_router('items', items_router)
api.add_router('users', users_router)
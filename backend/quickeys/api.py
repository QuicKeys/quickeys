from ninja import NinjaAPI
from items.api.item_type_api import router as item_type_router
from items.api.item_api import router as item_router
from user_profiling.api.user_profile_api import router as user_profile_router
from authentication.api.authentication_api import router as authentication_router

api = NinjaAPI()

api.add_router('items/item-type', item_type_router)
api.add_router('items', item_router)
api.add_router('user-profile', user_profile_router)
api.add_router('authentication', authentication_router)
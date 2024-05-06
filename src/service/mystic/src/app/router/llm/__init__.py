from fastapi	import APIRouter
from .			import connect
from .			import disconnect
from .			import chat

router = APIRouter()
router.include_router(connect.router, tags=["connect"])
router.include_router(disconnect.router, tags=["disconnect"])
router.include_router(chat.router, tags=["chat"])
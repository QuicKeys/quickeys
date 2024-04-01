from ninja import Schema


class UserSignUp(Schema):
    first_name: str
    last_name: str
    email: str
    password: str

class UserSignIn(Schema):
    username: str
    password: str

class UserSignUpResponse(Schema):
    message: str

class UserSignInResponse(Schema):
    token: str
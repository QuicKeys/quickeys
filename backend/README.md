
## Quickeys Backend
[![Python](https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
## Table of Contents
- [Tech Stack](#tech-stack)
    - [Core Framework and Languages](#core-framework-and-languages)
    - [API Framework](#api-framework)
    - [Middleware](#middleware)
    - [Authentication and Authorization](#authentication-and-authorization)
    - [Database](#database)
    - [Database Connector](#database-connector)
- [Tools Used](#tools-used)
- [Database Design](#database-design)
- [Setup Guide](#setup-guide)
    - [Requirements](#requirements)
    - [Database Setup](#database-setup)
    - [Development Server Setup](#development-server-setup)

## Tech Stack
### Core Framework and Languages:

- [**Python**](https://www.python.org/): High-level, general-purpose programming language
- [**Django**](https://www.djangoproject.com/): Free and open-source Python-based backend web framework

### API Framework:
- [**Django REST Framework**](https://www.django-rest-framework.org/): Python library built on top of Django used for creating REST APIs

### Middleware:
- [**Django CORS Headers**](https://pypi.org/project/django-cors-headers/): Django app that adds Cross-Origin Resource Sharing (CORS) headers to responses

### Authentication and Authorization:
- [**PyJWT**](https://pyjwt.readthedocs.io/en/stable/): Python library which allows you to encode and decode JSON Web Tokens (JWT)

### Database:
- [**PostgreSQL**](https://www.postgresql.org/): Free and open-source relational database management system

### Database Connector:
- [**Psycopg 3**](https://www.psycopg.org/psycopg3/): PostgreSQL adapter for Python


## Tools Used
- [**DBeaver**](https://dbeaver.io): SQL client software application and database administration tool
- [**Bruno**](https://www.usebruno.com/): Free and open-source API client
- [**Visual Studio Code**](https://code.visualstudio.com/): Code editor
- [**Git**](https://git-scm.com/): Free and open-source version control system
- [**GitHub**](https://github.com): Online developer platform used to collaborate on software projects
## Database Design
**auth_user**

|Type        |Column Name |
|------------|------------|
|integer     |id          |
|varchar(128)|password    |
|timestamp   |last_login  |
|boolean     |is_superuser|
|varchar(150)|username    |
|varchar(150)|first_name  |
|varchar(150)|last_name   |
|varchar(254)|email       |
|boolean     |is_staff    |
|boolean     |is_active   |
|timestamp   |date_joined |

**user_profile**

|Type       |Column Name |
|-----------|------------|
|integer    |user_id     |
|integer    |auth_user_id|
|date       |birthdate   |
|varchar(11)|contact_no  |

**user_address**

|Type        |Column Name    |
|------------|---------------|
|integer     |user_address_id|
|integer     |user_id        |
|varchar(255)|user_address   |

**orders**

|Type     |Column Name   |
|---------|--------------|
|integer  |order_id      |
|integer  |user_id       |
|integer  |order_status  |
|integer  |payment_status|
|timestamp|order_date    |

**keyboard_builder**

|Type   |Column Name        |
|-------|-------------------|
|integer|keyboard_builder_id|
|integer|user_id            |
|integer|keyboard_assembly  |

**item_type**

|Type        |Column Name   |
|------------|--------------|
|integer     |item_type_id  |
|varchar(255)|item_type_name|

**item**

|Type          |Column Name     |
|--------------|----------------|
|integer       |item_id         |
|integer       |item_type_id    |
|varchar(255)  |item_name       |
|varchar(255)  |item_description|
|decimal(15, 2)| item_price     |
|varchar(255)  |serial_number   |
|integer       |item_quantity   |
|integer       |restock_point   |
|boolean       |is_active       |

**item_property**

|Type        |Column Name           |
|------------|----------------------|
|integer     |item_property_id      |
|varchar(255)|item_property_name    |
|varchar(255)|item_property_datatype|

**item_property_value**

|Type        |Column Name           |
|------------|----------------------|
|integer     |item_property_value_id|
|integer     |item_id               |
|integer     |item_property_id      |
|varchar(255)|item_property_value   |

**keyboard_builder_item**

|Type   |Column Name             |
|-------|------------------------|
|integer|keyboard_builder_item_id|
|integer|keyboard_builder_id     |
|integer|item_id                 |

**order_line**

|Type   |Column Name   |
|-------|--------------|
|integer|order_line_id |
|integer|order_id      |
|integer|item_id       |
|integer|order_quantity|

## Setup Guide

### Requirements
1. **Python**: The project uses Django, a Python-based web framework for its backend. Python will also be required to create a virtual environment using its `venv` module. Download Python [here](https://www.python.org/downloads/).
2. **PostgreSQL**: The project uses PostgreSQL as its relational database management system. Download PostgreSQL [here](https://www.postgresql.org/download/). 

    > **_NOTE:_** Only `PostgreSQL Server` and `Command Line Tools` are required to run the backend. You can exclude `pgAdmin 4` and `Stack Builder` from the components in the installation wizard. See [Database Setup](#database-setup) for further instructions.
### Database Setup
1. **PostgreSQL Installation**

Ensure that your PostgreSQL configuration matches the settings specified in the Django project:

**User**: `postgres`

**Pasword**: `admin`

**Host**: `localhost`

**Port**: `5432` 

2. **Create the database**

On Windows:
```bash
createdb -U postgres quickeys-db
``` 
On Unix:
```bash
sudo -u postgres createdb quickeys-db
``` 

Should you run into issues in creating the database, see the [PostgreSQL documentation](https://www.postgresql.org/docs/16/tutorial-createdb.html).
### Development Environment/Server Setup
1. **Clone the repository**
```bash
git clone https://github.com/QuicKeys/quickeys.git
```
2. **Create a python virtual environment**
```bash
cd quickeys
```

```bash
cd backend
```

```bash
python -m venv env
```
3. **Run the virtual environment**

On Windows:
```bash
env\Scripts\activate
```
On Unix or MacOS:
```bash
source env/bin/activate
```
4. **Install backend requirements**
```bash
python -m pip install -r requirements.txt
```
5. **Apply migrations**
```bash
python manage.py migrate
```
6. **Run the backend development server**
```bash
python manage.py runserver
```
You can access the server at `http://127.0.0.1:8000/`

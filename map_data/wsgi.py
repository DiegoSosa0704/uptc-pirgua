"""
WSGI config for map_data project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.0/howto/deployment/wsgi/
"""

import os
import sys

from django.core.wsgi import get_wsgi_application

sys.path.append('/home/ubuntu/uptc-pirgua')
os.environ['DJANGO_SETTINGS_MODULE'] = "map_data.settings"
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "map_data.settings")
os.environ.setdefault("LANG", "en_US.UTF-8")
os.environ.setdefault("LC_ALL", "en_US.UTF-8")

# activate = r"/home/ubuntu/uptc-pirgua/env/bin/activate.py"

application = get_wsgi_application()

#!/bin/bash

NAME="uptc-pirgua" # Nombre dela aplicación
DJANGODIR=/home/ubuntu/uptc-pirgua # Ruta dela carpeta donde esta la aplicación reemplazar <user> con el nombre de usuario
SOCKFILE=/home/ubuntu/uptc-pirgua/run/gunicorn.sock # Ruta donde se creará el archivo de socket unix para comunicarnos
# USER=<user> # Usuario con el que vamos a correr laapp
# GROUP=<groupe> # Grupo con el quese va a correr laapp
NUM_WORKERS=3 # Número de workers quese van a utilizar para correr la aplicación
DJANGO_SETTINGS_MODULE=map_data.settings # ruta de los settings
DJANGO_WSGI_MODULE=map_data.wsgi # Nombre del módulo wsgi

echo "Starting $NAME as `whoami`"

# Activar el entorno virtual
cd $DJANGODIR 
source /home/ubuntu/uptc-pirgua/env/bin/activate
export DJANGO_SETTINGS_MODULE=$DJANGO_SETTINGS_MODULE
export PYTHONPATH=$DJANGODIR:$PYTHONPATH

# Crear la carpeta run si no existe para guardar el socket linux
RUNDIR=$(dirname $SOCKFILE)
test -d$RUNDIR || mkdir -p $RUNDIR

# Iniciar la aplicación django por medio de gunicorn
exec gunicorn ${DJANGO_WSGI_MODULE}:application \
  # --name $NAME \
  --workers $NUM_WORKERS \
  # --user=$USER --group=$GROUP \
  --bind=unix:$SOCKFILE \
  --log-level=debug \
  --log-file=-

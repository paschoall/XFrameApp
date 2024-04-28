FROM python:3.9-slim

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install -y default-libmysqlclient-dev
RUN apt-get update && apt-get install -y build-essential

RUN pip install -r requirements.txt


ENV FLASK_APP=app.py


EXPOSE 5000

CMD ["python3", "run.py", "--host=0.0.0.0:5000"]
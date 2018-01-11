FROM mhart/alpine-node:7.10.1

WORKDIR /srv
ADD . .
RUN npm install

EXPOSE 8081
CMD ["node", "server.js"]




FROM openjdk:7

COPY . /usr/src/myapp
WORKDIR /usr/src/myapp

RUN javac Main.java
CMD ["java", "Main"]




FROM python:3

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD [ "python", "./your-daemon-or-script.py" ]

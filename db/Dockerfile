#https://docs.docker.com/guides/pre-seeding/

FROM postgres:latest

COPY db_build.sql /docker-entrypoint-initdb.d/

ENV POSTGRES_PASSWORD=password

EXPOSE 5432
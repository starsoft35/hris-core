psql -h localhost -p 5434 -U postgres -c "CREATE DATABASE hris;"
psql -h localhost -p 5434 -U postgres hris < files/db/backup.sql

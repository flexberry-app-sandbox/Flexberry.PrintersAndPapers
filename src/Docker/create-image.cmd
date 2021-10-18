docker build --no-cache -f SQL\Dockerfile.PostgreSql -t printersandpapers/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t printersandpapers/app ../..

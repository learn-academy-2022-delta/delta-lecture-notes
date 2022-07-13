# Postgresql and Databases 7/13/2022

Defining the structure of the data:
```
class Student
  def initialize(name, cohort)
    @name = name
    @cohort = cohort
  end
end
```

Create instances:
Student.new('Will', 'Delta')
Student.new('Elyse', 'Alpha')


Model - class, define data
Each row in a database is an instance of the class

## PostgreSQL
SQL - structured query language, columns and rows, Postgres is a flavor of sql
NOSQL - not only structured query language, MongoDB

## Postgres (PostgreSQL)
General purpose programming languages - JavaScript, Ruby
Domaine-specific languages - HTML, RSpec, postgres

- open-source
- object-relational database management system
- oop approach to programming

## PostgreSQL Console
- `psql`
- `\l` - shows all the database on your machine
- each database on your personal computer is unique and cannot be shared
- to get back out: `q` and then `exit`

## PGAdmin
- Passwords will be the password for your computer
- Opening the left menu bar until you see countries

2.381741e+06 = 2381741

All the data: SELECT * FROM country

SELECT name, continent
FROM country

SELECT name, continent, population
FROM country
LIMIT 10

SELECT name, continent, population
FROM country
WHERE continent = 'North America'

SELECT name, continent, population
FROM country
WHERE continent != 'North America'

SELECT name, continent, population
FROM country
WHERE population < 1e6

SELECT name, continent, population
FROM country
WHERE population < 1e6
AND continent = 'North America'

SELECT name, continent, population
FROM country
WHERE population < 1e6
OR continent = 'North America'

Using LIKE and wildcard to get back all the Americas:
SELECT name, continent, population
FROM country
WHERE continent LIKE '%America'

10 most recently independent countries:
SELECT name, region, indepyear
FROM country
WHERE indepyear IS NOT null
ORDER BY indepyear DESC
LIMIT 10

Population density:
SELECT name, surfacearea, population,
population / surfacearea AS density
FROM country
WHERE population > 0
ORDER BY density
LIMIT 5

1. Of the countries with the top 10 gnp  2. which has smallest population (Canada)
WITH populated_countries AS (
SELECT name, population, gnp
FROM country
WHERE population > 0
ORDER BY gnp DESC
LIMIT 10
)
SELECT name, population, gnp
FROM populated_countries
ORDER BY population
LIMIT 1

Which countries achieved independence after 1945 and are not some kind of republic?

SELECT name, governmentform, indepyear
FROM country
WHERE governmentform
NOT LIKE '%epublic'
AND indepyear > 1945

# Node.js

## Запуск

Для передачи директории, используется параметр --path:
```bash
Пример:

nodemon server.js --path=/../../
```

## Что реализовано

* **GET** /api/repos
* **GET** /api/repos/:repositoryId/commits/:commitHash
* **GET** /api/repos/:repositoryId/commits/:commitHash/diff
* **GET** /api/repos/:repositoryId(/tree/:commitHash/:path)
* **GET** /api/repos/:repositoryId/blob/:commitHash/:pathToFile
* **DELETE** /api/repos/:repositoryId
* **POST** /api/repos + { url: ‘repo-url’ }
* **GET** /api/repos/:repositoryId/commits/:commitHash/:page?

  Пример параметра page для пагинации: /api/repos/:repositoryId/commits/:commitHash/1-10
  
  Где 1 - страница, 10 - кол-во выводимых коммитов
 

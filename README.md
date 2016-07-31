# mean-book

curl -X POST -H "Content-Type: application/json" -d '{"firstName": "First","lastName":"Last","email":"123@example.com","username":"username2","password":"1234","website":"https://example.com"}' localhost:3000/users

curl -X PUT -H "Content-Type: application/json" -d '{"firstName": "Update"}' localhost:3000/users/578e13646d5af31c3948383e

curl -X DELETE localhost:3000/users/5798430ad8c5df1c6e29e234

在执行命令前，设置NODE_ENV（export NODE_ENV="test/development"
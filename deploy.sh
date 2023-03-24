cd ./frontend && npm run build && cd ..

# UPLOAD IMAGES TO DOCKER HUB

docker login -u hamburger9 -p neider13A

docker build . -t hamburger9/coinsvvv:latest

docker push hamburger9/coinsvvv:latest


# REGISTER TASK DEFINITION

aws ecs register-task-definition --cli-input-json file://task-definition.json
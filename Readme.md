Run the container
```bash
docker-compose up
```

Create role
```bash
aws iam create-role --endpoint-url=http://localhost:4572 --role-name lambda-ex --assume-role-policy-document '{"Version": "2012-10-17","Statement": [{ "Effect": "Allow", "Principal": {"Service": "lambda.amazonaws.com"}, "Action": "sts:AssumeRole"}]}'
```

After run the command, zip the files from dist folder with lambda.zip name
```bash
yarn build
```

Deploy Lambda
```bash
aws lambda create-function --endpoint-url=http://localhost:4574 --function-name my-lambda --zip-file fileb://dist/lambda.zip --handler index.handler --runtime nodejs12.x --role arn:aws:iam::123456789012:role/lambda-ex
```

Invoke the Lambda
```bash
aws lambda invoke --function-name my-lambda --endpoint-url=http://localhost:4574 response/out.json
```
## LoopBack-React-MongoDb Tutorial

YouTube refrence is a tutorial in 5 parts as :

```
https://www.youtube.com/watch?v=Mx-cywTNy8s

https://www.youtube.com/watch?v=idvCKXXFGs4&t=1622s

https://www.youtube.com/watch?v=R3wiX05SJps&t=698s

https://www.youtube.com/watch?v=yN5qKqLDlpM

https://www.youtube.com/watch?v=M_PaFaIf6d8


```

and the Github repo:

```
https://github.com/bradtraversy/meetupz

```

This is not necessary but if mongodb installed localy then:
```
sudo service mongodb start

```
Install LoopBack (LoopBack 4) locally

```
refer to LoopBack documentation
```
start with lb4 and start to create a project
```
lb4 <Name>
```
## How to connect the LoopBack to mongoDB

```
lb4 datasource
```
choose the Datasource name as "db".

and choose the "MongoDB(supported by StrongLoop) " for Select the connector for db list.

and put the mongodb url as follow:

```
mongodb+srv://aliali:<PASSWORD>@ali.3huc2.mongodb.net/ali

```
do not forget to replace <Password> by the real one.

## Create Model

```
lb4 model
```
** do not forget that the id property is _id and its type is string as we connected to mongodb

```

? Model class name: comments
? Please select the model base class Entity (A persisted model with an ID)
? Allow additional (free-form) properties? Yes
Model Comments will be created in src/models/comments.model.ts

Let's add a property to Comments
Enter an empty property name when done

? Enter the property name: _id
? Property type: string
? Is _id the ID property? Yes
? Is _id generated automatically? Yes

Let's add another property to Comments
Enter an empty property name when done

? Enter the property name: name
? Property type: string
? Is it required?: No
? Default value [leave blank for none]: 

Let's add another property to Comments
Enter an empty property name when done

? Enter the property name: title
? Property type: string
? Is it required?: No
? Default value [leave blank for none]: 

Let's add another property to Comments
Enter an empty property name when done

? Enter the property name: comm
? Property type: string
? Is it required?: No
? Default value [leave blank for none]: 


```

## Create repository

```
lb4 repository
```
```
? Select the datasource DbDatasource
? Select the model(s) you want to generate a repository for Comments
```

## Create controller

```
lb4 controller
```

```
? Controller class name: comments
Controller Comments will be created in src/controllers/comments.controller.ts

? What kind of controller would you like to generate? REST Controller with CRUD functions
? What is the name of the model to use with this CRUD repository? Comments
? What is the name of your CRUD repository? CommentsRepository
? What is the name of ID property? _id
? What is the type of your ID? string
? Is the id omitted when creating a new instance? Yes
? What is the base HTTP path name of the CRUD operations? /comments
```

* The back end is ready and works perfect
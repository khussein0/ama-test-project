# Ama Test Project
An application that resolves variable values in an input Map.

## Start
Clone this repository with your git client.

### Installation
```shell
> npm install
```

### Start App
```shell
> node app
```

### Run test
```shell
> npm test
```

## Libraries
- Jest (Used for unit testing)

## Unclear things
- If all map values has template to be substituted.
> Assumed that it will be substituted only one time by their order to avoid infinite loop.

- If template to be substituted key isn't available.
> Assumed that it will not be substituted and will be returned the way it is.


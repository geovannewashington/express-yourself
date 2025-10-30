In Node we can can access environment variables thought the process.env object.
The syntax is: process.env.<VAR_NAME>
We usually create a hidden file named .env which is going to store API keys and stuff like that.
Note that this file shouldn't be pushed to github, we prevent this from happening by adding its naming
to the '.gitignore' file

In prior versions of Node we would need to install a third party package in order to use custom env
variables, but nowadays we can run our node scrips with the --env-file=<pathto.env_file> flag.
Which we set in the package.json file.

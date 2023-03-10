#…or create a new repository on the command line

echo "# mywebsite" >> README.md

git init

git add README.md

git commit -m "first commit"

git branch -M main

git remote add origin https://github.com/Idaogah/mywebsite.git

git push -u origin main

@echo off
chcp 65001
"c:\Program Files\MongoDB\Server\5.0\bin\mongoimport.exe" --uri="mongodb://localhost:27017/SzamokDB" --collection=temakorok --drop --file=db_1.json --jsonArray
"c:\Program Files\MongoDB\Server\5.0\bin\mongoimport.exe" --uri="mongodb://localhost:27017/SzamokDB" --collection=kerdesek --drop --file=db_n.json --jsonArray
echo PLEASE KILL AND RESTART YOUR BACKEND SERVER DEV TASK IF RUNNING!
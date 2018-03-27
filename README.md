
nctuplust-frontend
===

## 安裝
### pre-commit hook
在 .git/hooks/ 下面新增一個檔案 ==pre-commit== 
內容:
```shell
#!/bin/bash

type standard >/dev/null 2>&1
if [[ $? -ne 0 ]]; then
  echo '"standard" package not installed. please run `npm install standard -g` to install standard linter.'
  exit 1
fi

git diff --name-only --relative --cached | grep '\.jsx\?$' | standard --fix
if [[ $? -ne 0 ]]; then
  echo '------'
  echo 'JavaScript Standard Style errors were detected. Aborting commit.'
  exit 1
fi
```
:::info
pre-commit hooks 會在 commit 前用 standard 這個套件修正 coding style，請確定有安裝
:::
:::danger
沒有通過 linter 測試的 code 不會被 merge ˋ˙
:::
### 套件
- npm install


## 開發 
### dev server
- npm run dev
- 打開瀏覽器到 [http://localhost:8080](http://localhost:8080)

### fake json api server
#### 產生假資料
- npm run seed
#### 執行 server
- npm run api-server
- 打開瀏覽器到 [http://localhost:9487](http://localhost:9487)

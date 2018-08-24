
nctuplust-frontend
===

## 安裝
先npm install standard -g

### pre-commit hook
在 .git/hooks/ 下面新增一個檔案 **pre-commit** 
內容:
```shell
#!/bin/bash

type standard >/dev/null 2>&1
if [[ $? -ne 0 ]]; then
  echo '"standard" package not installed. please run `npm install standard -g` to install standard linter.'
  exit 1
fi

git diff --name-only --relative --cached | grep '\.jsx\?$' | standard
if [[ $? -ne 0 ]]; then
  echo '------'
  echo 'JavaScript Standard Style errors were detected. Aborting commit.'
  exit 1
fi
```

請在 commit 之前下 standard --fix 自動修正 coding style
<br />
無法自動修正的會output出來 請自行手動修正

pre-commit hooks 會在 commit 前用 standard 這個套件檢查 coding style
<br />
沒有通過 linter 測試的 code 不會被 merge ˋˊ

### 注意
如果**pre-commit**沒有反應 可能是沒有權限
要先對 **pre-commit** 下chmod 755

### 套件
- npm install

#### UI套件
react-scroll-component: https://github.com/flyingant/react-scroll-to-component
react-tooltip: https://github.com/react-component/tooltip



## 開發 
### dev server
- npm run dev
- 打開瀏覽器到 [http://localhost:8080](http://localhost:8080)


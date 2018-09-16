
nctuplus-frontend
===

### 安裝套件
- npm install

### linter
使用 `standard` 這個 linter
<br />
pre-commit hooks 會在 commit 前用 standard 這個套件檢查 coding style
<br />
請在 commit 之前下 `npm run lint` 或 `yarn lint` 自動修正 coding style
<br />
無法自動修正的會output出來 請自行手動修正
<br />
沒有通過 linter 測試的 code 不會被 merge 

#### UI套件
- [react-scroll-component](https://github.com/flyingant/react-scroll-to-component)
- [react-tooltip](https://github.com/react-component/tooltip)


## 開發 
### dev server
- npm run dev
- 打開瀏覽器到 [http://localhost:8080](http://localhost:8080)



nctuplus-frontend
===

### 安裝套件
- yarn install

### linter
使用 `standard` 和 `stylelint` 這兩個 linter
<br />
pre-commit hooks 會在 commit 前用這兩個套件檢查 js 和 css 的 coding style
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

## 佈署
### Staging eerver
* 修改`docker-compose.staging.yml`，於`volumes`處將本機的SSL/TLS憑證掛載進容器內
* 修改`staging/nginx/sites-available/staging.conf`
  - 將`$STAGING_SERVER`處換為staging server的domain name，第15行中的`$server_name`不用替換
* 修改`staging/nginx/sites-available/ssl_staging.conf`
  - 將`$STAGING_SERVER`處換為staging server的domain name
  - 於`ssl_certificate`後方塡入憑證路徑
  - 於`ssl_certificate_key`後方塡入憑證所用的私鑰路徑
  - 此處的路徑皆為容器的路徑，非本機的路徑
* 修改`webpack.config.js`中後端伺服器URL，修改處為第12行，如下圖所示
  ![](https://imgur.com/576Kasx.png)

### Production Server
* 修改`docker-compose.production.yml`，於`volumes`處將本機的SSL/TLS憑證掛載進容器內
* 修改`webpack.config.js`中後端伺服器URL，修改處為第12行，如下圖所示
  ![](https://imgur.com/576Kasx.png)
* 修改`staging/nginx/sites-available/ssl_staging.conf`
  - 於`ssl_certificate`後方塡入憑證路徑
  - 於`ssl_certificate_key`後方塡入憑證所用的私鑰路徑
  - 此處的路徑皆為容器的路徑，非本機的路徑

### 啟動Staging server, Production server
* 使用資料夾內的`startup.sh`此script來啟動服務
* 此script會先詢問要啟動prodcution server還是staging server
  ![](https://imgur.com/pRV1N7l.png)
  
  使用數字來選擇需要的模式
* 當image build結束後會詢問是否要將容器跑在背景
  ![](https://imgur.com/QEPpmp8.png)
  
  使用英文字選擇需要的模式
* 當容器跑起來後會先使用yarn安裝所需的套件，通常這僅需在第一次啟動才需要完整安裝，接著會使用`yarn build`編出靜態檔案供nginx使用
* nginx的log位於容器內的`/var/log/nginx`資料夾內

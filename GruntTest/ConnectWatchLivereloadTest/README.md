# Gruntで、Connect,Watch,Livereload
Gruntの  
- [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)
- [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
- [connect-livereload](https://github.com/intesso/connect-livereload)  を使って、ローカルサーバーの立ち上げとファイル監視、変更の際にブラウザ自動更新(livereload)機能を実装。

## 実装の際の注意点
connect-livereloadは、loadNpmTasksしなくてよかったが、  
事前に npm install --save-dev connect-livereload をしておく必要がある。    
```javascript
grunt.loadNpmTasks('connect-livereload'); #これは書かなくて良い
```
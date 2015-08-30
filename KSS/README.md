# KSS スタイルガイド
KSSスタイルガイドの説明。  
kss-nodeのクイックスタートは[こちら](https://github.com/kss-node/kss-node/wiki/Quick-Start-Guide)  
詳しい説明は[こちら](https://github.com/kss-node/kss/blob/spec/SPEC.md)  
また、KSSスタイルガイド生成の際にハマったところを説明します。  

## スタイルガイドの生成
```
npm-exec kss-node css --template styleguide-template-custom --css ../css/test.css
```

## スタイルガイド生成の際にエラーが出る
【解決策】  
kss-nodeのversionに合ったテンプレを生成する  
下記を実行すると、その環境に合ったテンプレを生成できるので、  
テンプレ記載ミスによる、スタイルガイド生成の際のエラーは出なくなる。  
※handlebarsのバージョン違いによって記述方法が変わった際に出るエラーがでなくなる。  
```
kss-node --init styleguide-template
```
もしくは、  
```
npm-exec kss-node --init styleguide-template
```

## {$modifiers}が反応しない
Markupに記述した{$modifiers}がうまく出力されず  
スタイルガイドにスタイルが当たらない事があった。  

【解決策】  
kss-nodeのversionによって書き方が変わったもよう。  
kss-node のversionが 1.X の場合は{$modifiers}  
versionが2.Xからは、{$modifier_class}または{{modifier_class}}となったようで、  
いづれかかを試すとうまくいった。

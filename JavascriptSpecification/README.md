# Javascriptの理解

## ECMAScript5で追加された主な要素

* オブジェクトやオブジェクトプロパティ関連の新たなAPI
* Strictモード
* 配列操作メソッドの追加
* JSON

## ECMAScript5の対応環境

* IE9以降
* Firefox4以降
* Safari5.1以降
* Chrome13以降
* iOS Safari5.0以降
* Android Browser3.0以降
* Node.js0.5.1以降

現行ブラウザにおいては、IE8以下をサポートする場合には使えない。  
iOS/Android向けの開発では利用出来る。  

## データ型とは

プリミティブ型と参照型がある。

## プリミティブ型

trueや1のように、そのままの形で格納される単純なデータ型。
下記の5つがある。
* 真偽値
* 数値
* 文字列
* null
* undefined

## プリミティブ型のデータ型を判定する

```
console.log(typeof "Naoki");
// "string"

console.log(typeof 10);
// "number"

console.log(typeof 5.1);
// "number"

console.log(typeof true);
// boolean

console.log(typeof undefined);
// "undefined"

console.log(typeof null);
// "object" # nullだけはobjectを返してしまう。これは正式に仕様ミスである事が発表されている。

// nullかどうか判定する方法は下記のようにする。
console.log(value === null);
// true # nullを比較するときは型変換を行わない厳格な等価===を使う事。
```



# Javascriptの仕様や理解を深めるメモ

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

PCは、IE8以下をサポートする場合には使えないが、それ以外の現行ブラウザは利用可能。  
スマートフォンは、iOS/Android向け開発で利用可能。  

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

## プリミティブ型のデータ型を判定する方法

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

## 参照型

参照型はオブジェクトを表す。  
そして参照型はJavascriptにおいてはクラスに一番近い存在。  
参照型は割り当てた変数にオブジェクトを直接格納しておらず、オブジェクトが存在するメモリ位置のポインタ(参照)が格納されている。  

```
var object1 = new Object();
var object2 = object1;
// object2にはインタンスがコピーされるわけではなく、object1と同じオブジェクトを参照している。
// その為、object1を書き換えるとobject2も書き変わる。
```

## オブジェクト参照の解除

必要がなくなったオブジェクトの参照は解除しておくのがベスト。
```
var object1 = new Object();

object1 = null; // object1が必要なくなったらnullを代入してオブジェクトの参照を解除するのがベスト
```
オブジェクト参照の解除は、大規模開発の時には特に重要。

## プロパティの追加と削除

Javascriptのオブジェクトはいつでもプロパティを追加、削除できる。
```
var object1 = new Object();
var object2 = object1;

object1.myCustomProperty = "いいね!";
console.log(object2.myCustomProperty); // "いいね!"
```
いつでもプロパティを追加、削除出来ないように防ぐ手段も存在する。

## ビルトインのデータ型

Jacascriptがビルトインで提供するデータ型は以下となる。
* Array
* Date
* Error
* Function
* Object
* RegExp

それぞれビルトイン参照型は、new演算子を使用してインスタンス化出来る。
```
var items = new Array();
var now = new Date();
var error = new Error('何かが起こりました。');
var func = new Function('console.log("こんにちは!");');
var object = new Object();
var re = new RegExp("//d+");
```

## リテラル

リテラルとは、new演算子とオブジェクトコンストラクタを使用することなく参照型の値を生成出来る記法の事。
```
// オブジェクトリテラル 
var book = {
	name: "なおき",
	year: 2015
};

// 配列リテラル
var colors = ["red", "blue", "green"];

// 関数リテラル
function reflect(value) {
	return value;
}

// 正規表現リテラル
var numbers = /\d+/g;
```
リテラルを使う開発者が多い。Functionコンストラクタは使用が推奨されていない。

## プロパティへのアクセス

ドット記法とブラケット記法がある。
```
var array = [];

// ドット記法
array.push(1234);

// ブラケット記法
array["push"](1234);
```
ドット記法が使用出来る場合はドット記法が多く使われている。  
ただ動的にプロパティの値にアクセスしたい場合はブラケット記法を使用する必要がある。

## 参照型のデータ型を判定したい時

関数以外の参照型はtypeof演算子を使用すると"object"が返ってくるため有効ではない。  
instanceof演算子を使用する事で判定出来る。
```
var items = [];
var object = {};
function reflect(value){
	return value;
}

console.log(items instanceof Array); // true
console.log(object instanceof Object); // true
console.log(reflect instanceof Function); // true
```

## 配列を判定したい時は

instanceofでの配列判定は出来るが、Webの場合は例外が発生するため、ES5のArray.isArray()を使うのが最良の方法。
```
var items = [];

console.log(Array.isArray(items)); // true
```

## 関数宣言と関数式

```
// 関数宣言
function add(num1, num2) {
	return num1 + num2;
}

// 関数式
var add = function(num1, num2) {
	return num1 + num2;
};
```
関数宣言は実行される際にスコープの一番上まで巻き上げられるが、関数式は巻き上げがないため関数式より上に書かれた関数はエラーとなる。

## 値としての関数

```
var numbers = [1, 5, 8, 4, 7, 10, 2, 6];

numbers.sort(function(first, second){
	return first - second;
});

console.log(numbers); // [1, 2, 4, 5, 6, 7, 8, 10]

numbers.sort();

console.log(numbers); // [1, 10, 2, 4, 5, 6, 7, 8]
```
sort()メソッドは、オプション引数として比較を行う関数を与える事ができる。  
比較関数を使わない場合は、文字列変換してソートする為、正しい数値のソートが出来ない。

## arguments

関数の実行時に生成されるオブジェクト。  
配列に似ているが配列ではなく、Array.isArray(arguments)は常にfalseとなる。  
arugumentsを配列として扱いたいときは、Array.prototype.slice.call(arguments)で引数を新たな配列としてコピーする事ができる。  
argumentsは引数の数が任意の場合に使うのが有効。
```
// arugumentsを使って任意の引数を全て足したものを返す例
function sum() {
	var result = 0,
		i = 0,
		len = arguments.length;
	
	while(i < len) {
		result += arguments[i];
		i++;
	}

	return result;
}

console.log(sum(1, 2)); // 3
console.log(sum(3, 4, 5, 6)); // 18
console.log(sum(50)); // 50
console.log(sum()); // 0
```

## オブジェクトメソッド

```
var person = {
	name: "Naoki",

	sayName: function() {
		console.log(person.name);
	}
};

person.sayName(); // "Naoki"
```

## thisオブジェクト

```
var person = {
	name: "Naoki",
	sayName: function() {
		console.log(this.name);
	}
};

person.sayName(); // "Naoki"
```
person.nameはthis.nameに置き換えることができる。

```
function sayNameForAll() {
	console.log(this.name);
}

var person1 = {
	name: "Naoki",
	sayName: sayNameForAll
};

var person2 = {
	name: "Greg",
	sayName: sayNameForAll
};

var name = "Michael"

person1.sayName(); // "Naoki"
person2.sayName(); // "Greg"

sayNameForAll(); // "Michael"
```
thisは呼び出されたオブジェクトを指す。  
グローバルコンテキストで呼び出すと、グローバル変数の値"Michael"を出力する。

## thisの値を操作する

Javascriptの関数は、thisの値を変更出来るメソッドを3つ持っている。  
call(), apply(), bind()の３つ。

## call()メソッド

call()はthisの値と引数を指定して関数を実行する。  
call()の第一引数に、関数が実行される際にthisの値になるべき値を渡す。  
call()の第二引数以降に、関数に渡す引数を指定する。
```
function sayNameForAll(label) {
	console.log(label + ":" + this.name);
}

var person1 = {
	name: "Naoki"
};

var person2 = {
	name: "Greg"
};

var name = "Michael";

sayNameForAll.call(this, "global"); // "global:Michael"
sayNameForAll.call(this, "person1"); // "person1:Naoki"
sayNameForAll.call(this, "person2"); // "person2:Greg"
```
call()メソッドを使用すると、関数をそれぞれのオブジェクトのメソッドとして追加する必要はない。  

## apply()メソッド

apply()メソッドは、thisとなるべき値と実行関数の引数の配列(もしくはargumentsのような配列Likeなオブジェクト)の２つのパラメータしな持ってないことを除けば、call()と同じ挙動となる。  
```
function sayNameForAll(label) {
	console.log(label + ":" + this.name);
}

var person1 = {
	name: "Naoki"
};

var person2 = {
	name: "Greg"
};

var name = "Michael";

sayNameForAll.apply(this, ["global"]); // "global:Michael"
sayNameForAll.apply(person1, ["person1"]); // "person1:Naoki"
sayNameForAll.apply(person2, ["person2"]); // "person2:Greg"
```
既にデータが配列に格納されている場合はapply()を使用し、そうでなければcall()を使用する。

## bind()メソッド

bind()メソッドはES5から追加された。  
call(),apply()とはまったく異なる機能となる。  
bind()は、thisの値を固定した新しい関数を生成する。  
bind()の最初の引数は新しい関数のthisとして固定される値で、その後の引数は新しい関数の引数として固定される。  
```
function sayNameForAll(label) {
	console.log(label + ":" + this.name);
}

var person1 = {
	name: "Naoki"
};

var person2 = {
	name: "Greg"
};

// person1オブジェクト専用の関数を生成
var sayNameForPerson1 = sayNameForAll.bind(person1);

sayNameForPerson1("person1"); // "person1:Naoki"

// person2オブジェクト専用の関数を生成
// ここでは１つ目の引数も固定していることに注意
var sayNameForPerson2 = sayNameForAll.bind(person2, "person2");

sayNameForPerson2(); // "person2:Greg"
```

















































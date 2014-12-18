require([
  'sub1', 
  'sub2'
  ], function(
  sub1, 
  sub2
  ) {

  // sub1.jsとsub2.jsをそれぞれ利用します。
  console.log(sub1.getName());
  console.log(sub2.getName());
  console.log(sub1.greeting());
  console.log(sub2.greeting());
});
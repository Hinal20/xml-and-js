const wait =(ms=1000) => new Promise((resolve)=> setTimeout(resolve,ms));

const inc =(a) =>new Promise((resolve)=>wait().then(()=>resolve(a+1)));

const sum =(a,b) =>new Promise((resolve)=>wait().then(()=>resolve(a+b)));

const max =(a,b) =>new Promise((resolve)=>wait().then(()=>resolve(a > b ? a : b)));

const avg =(a,b) =>new Promise((resolve)=>wait()
                                    .then(()=>sum(a,b))
                                    .then((s)=>resolve(s/2)));

                                    
const obj = {
  name: "Marcus Aurelius",
 split(sep = " ") {
  return new Promise((resolve) =>
  wait().then(()=> resolve(this.name.split(sep))));
  },
};
class Person {
  constructor(name) {
    this.name = name;
  }

  static  of(name) {
    

    return new Promise((resolve)=>wait().then(()=>resolve(new Person(name))));
  }

   split(sep = " ") {
    return new Promise((resolve)=>wait().then(()=>resolve(this.name.split(sep))));
   
  }
}

const person = new Person("Marcus Aurelius");
( async () => {
              console.log("await inc(5) =", await inc(5));
              console.log("await sum(1, 3) =", await sum(1, 3));
              console.log("await max(8, 6) =", await max(8, 6));
              console.log("await avg(8, 6) =", await avg(8, 6));
              console.log("await obj.split() =", await obj.split());
              console.log("await person.split() =", await person.split());
              })();
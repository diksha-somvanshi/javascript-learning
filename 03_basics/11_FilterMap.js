const programming = ["js","rb","py","java","cpp"];
const values = programming.forEach((item)=>{
    return item;
}) // foreach loop doesn't return values
console.log(values);

const nums = [1,2,3,4,5,6,7,8,,9,0];
//filter returns the value
let newnums=nums.filter((num)=> {
   return  num>4;
}); //filter contains callback function

console.log(newnums)
// const nums2 = [];
// nums.forEach((num)=>{
//     if(num>4){
//         newnums.push(num)
//     }
// })
// console.log(nums2)

const nums2 = [];
nums.forEach((num)=>{
    if(num>4){
        nums2.push(num);
    }
})
console.log(nums2)

const books = [
    {title : 'book one',genre : 'fiction',publish: 1981, edition: 2004},
    {title : 'book two',genre : 'non-fiction',publish: 1992, edition: 2008},
    {title : 'book three',genre : 'history',publish: 1999, edition: 2007},
    {title : 'book four',genre : 'non-fiction',publish: 1989, edition: 2010},
    {title : 'book five',genre : 'science',publish: 2009, edition: 2014},
    {title : 'book six',genre : 'fiction',publish: 1987, edition: 2010},
    {title : 'book seven',genre : 'history',publish: 1986, edition: 1996},
    {title : 'book eight',genre : 'science',publish: 2011, edition: 2016},
    {title : 'book nine',genre : 'non-fiction',publish: 1981, edition: 1989}
];
let userbooks = books.filter((bk)=> bk.genre==='history');

userbooks = books.filter ((bk)=> bk.publish>2000);
userbooks = books.filter ((bk)=> bk.publish>1995 && bk.genre === 'history');
console.log(userbooks);

newnums = nums.map((num)=>(num+10));
console.log(newnums)

const mynumbers = [1,2,3,4,5,6,7,8,9,10];

const nums3 = mynumbers
                .map((num)=>(num*10))
                .map((num)=>num+1)
                .filter((num)=> num>40);

console.log(nums3);

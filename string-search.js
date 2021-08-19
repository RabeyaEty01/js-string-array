/* //searching products using indexOf
const products =[
    'Dell hardcore 129 200GB Laptop',
    'iphone 1TB camera flashlight phone',
    'yellow laptop with black Camera',
    '1X59 Lenvo commercial yogo laptop',
    'LG supernova laptop',
    'HTC low price Phone',
    'purple color phone with Laptop'
];

const searching ='laptop';
//indexOf

const output =[];
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase())!=-1){
        output.push(product);
    }
}
console.log(output);
*/


const products =[
    'Dell hardcore 129 200GB Laptop',
    'iphone 1TB camera flashlight phone',
    'Dell yellow laptop with black Camera',
    '1X59 Lenvo commercial yogo laptop',
    'LG Dell supernova laptop',
    'HTC low price Phone',
    'Dell Purple color phone with Laptop'
];

const searching ='dell';
const output =[];
//searching products using includes
for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        //output.push(product);
    }
}
//console.log(output);

//searching product using starts with
for(const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product)
    }
}
console.log(output);

//startsWith diye string er first e start hoise oi product diye search kore ber kora jay 
//endsWith diye string er end e ache emn product search dewa jay 
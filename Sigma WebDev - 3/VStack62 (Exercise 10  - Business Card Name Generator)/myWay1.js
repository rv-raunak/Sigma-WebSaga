/* Create a business name generator by combining list of adjectives and shop name and another word
(You have to select any one word from the 3 catgories randomly)


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/


function random3PartPercentage()
{
    let random = Math.random();
    let percentage = random*100;
    let fraction = 100/3;

    if(percentage<fraction) return 1;
    else if(percentage<(2*fraction)) return 2;
    else return 3;
}
 


function Word1()
{
    let adjectives = {
        1: 'Crazy',
        2: 'Amazing',
        3: 'Fire'
    }    


    let index = random3PartPercentage();
    return adjectives[index];
}    


function Word2()
{
    let shopName = {
        1: 'Engine',
        2: 'Foods',
        3: "Garments"
    }     

    let index = random3PartPercentage();
    return shopName[index];
    
}    


function Word3()
{

    let anotherWord = {
        1: 'Bros',
        2: 'Limited',
        3: 'Hub'
    }      

    let index = random3PartPercentage();
    return anotherWord[index];
    
}    

console.log(`${Word1()} ${Word2()} ${Word3()}`);




/*
The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.

Example
Input:
List = [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
       ]

Output:
'Vatsan took his dog for a spin'
*/

function sentence(list) {
  let str ='';
  let arr = list.map(el => Object.entries(el));
  arr = arr.sort((a,b) => parseInt(a[0]) - parseInt(b[0]));
  for (let el of arr){
    for (let elem of el){
      str += elem[1]+' ';
    } 
  }
   return str.trim();
}

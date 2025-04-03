export function removeDuplicates(array)
{
    for(let i = 0; i < array.length; i++)
    {
        let word = array[i];
        for(let j = i + 1; j < array.length; j++)
        {
            if(word.englishWord == array[j].englishWord)
            {
                array.splice(i, 1);
            }
        }
    }
    return array;
}
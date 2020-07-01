#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <strings.h>

#include "dictionary.h"

// Represents a node in a hash table
typedef struct node
{
    char word[LENGTH + 1];
    struct node *next;
}
node; // first node in the linked list 

// Number of words in dictionary
int word_count = 0;

// Number of buckets in hash table
const unsigned int N = 26;

// Hash table
node *table[N];

// Returns true if word is in dictionary else false
bool check(const char *word)
{
    //goal 1: return true if word is in dictionary, false otherwise 
    //goal 2: case insensitive

    //step 1 hash word to obtain a hash value 
    unsigned int n = hash(word);

    //step 2: access linked list at that index in the hash table 
    //create a varable cursor to check if this word is what I am looking for
    node *cursor = table[n];

    //check each item until I get to null 
    while (cursor != NULL)
    {
        //traverse linked list, looking for the word (strcasecmp -> case insensitive)
        if (strcasecmp(word, cursor -> word) == 0)
        {
            return true;
        }

        cursor = cursor -> next;

    }
    return false;
}

// Hashes word to a number
// hash function credit to djb2 by Dan Bernstein

unsigned long
unsigned int hash(const char *word)
{
    unsigned long hash_value = 5381;
    int c; 

    while (c = *str++)
        hash = ((hash << 5) + hash) + c; /* hash * 33 + c */

    return hash;

}

// Loads dictionary into memory, returning true if successful else false
bool load(const char *dictionary)
{
    // Open dictionary and check for memory issue
    // Open dictionary file and create word array
    FILE *dict = fopen(dictionary, "r");
    char word[LENGTH + 1];

    //store the words in a hash table : array of linked lists
    //hash function: assigns a number to every input

    //step 1: read strings from file one at a time 

    //step 2: create new node for each word

    //step 3: copy the word into the list 

    //step 4: hash the word to obtain index 

    //step 5: insert into hash table 


    // Check for memory issue with dict
    if(dict == NULL)
    {
        printf("Dictionary is null\n");
        unload();
        return false;
    }

    // Read string 1 word at a time from file 

    //1st arg - file pointer 
    //2nd arg - read in a string 
    //3rd arg - character array where you can access all the characters of the word after reading from the file
    while (fscanf(dict, "%s", word) != EOF)
    {
        //allocate memory based on size of node
        //address of that node is inside n, n points to node
        node *n = malloc(sizeof(node));

        //if malloc doesn't have enough memory, then the return function should return false 
        //check if return value is null
        if (n == NULL)
        {
            return false;
        }
        //once the node is created, copy that word into the node
        //n->word means (*n).word
       //strcpy(destination,source)
       //copy the word 'hello' into  character array with that particular word field
        strcpy(n -> word, word);
        word_count++;

        //hash word to obtain a hash value 
        int dict_index = hash(word);

        // Insert into hash table if already empty
        if (table[dict_index] == NULL)
        {
            n -> next = NULL;
        }
        // Insert work as new node if not empyty
        else
        {
            n -> next = table[dict_index];
        }

        table[dict_index] = n;

    //insert node into hash table at that location

    }

    // Close dictionary file
    fclose(dict);

    // Indicate success
    return true;
}

// Returns number of words in dictionary if loaded else 0 if not yet loaded
unsigned int size(void)
{
    return word_count;
    return 0;
}

// Unloads dictionary from memory, returning true if successful else false
bool unload(void)
{
    for (int i = 0; i < N; i++)
    {
        node *cursor = table[i];
        while (cursor)
        {
            node *temp = cursor;
            cursor = cursor->next;
            free(temp);//without worry about losing the rest of the linked list
        }
    }
    return true;
}
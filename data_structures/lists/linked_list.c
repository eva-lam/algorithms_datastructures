
#include <stdio.h>
#include <stdlib.h>
// in linked list time complexities O(n)

int main(void)
{
	//allocate an array of 3 integers
	int *list = malloc(3 * sizeof(int)); 

	if(list == NULL) 
	{
		return 1; 
	}

	list[0] = 1; 
	list[1] = 2; 
	list[2] = 3; 

	//resize a chunk of memory
	int * tmp = realloc(list, 4* sizeof(int)); 
	if(tmp == NULL)
	{
		free(list); 
		return 1; 
	}
	
	for ( int i=0; i<3; i++)
	{
		tmp[i] = list[i]; 
	}
	
	tmp[3] = 4; 
	free(list); 
	list = temp; 
	
	for ( int i=0; i<4; i++)
	{
		print("%i\n", list[i]);
	}
//loggin 1 2 3 4 
	free(list);

}

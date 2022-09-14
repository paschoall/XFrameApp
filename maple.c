int main()
{
    int total = 0;
    
    int level = 249;
    
    int aux = ((level-139)/10)+1;
    
    int Level = level-139;
    
    int i;
    
    for(i=0; i < 12; i++){
        if(Level < 10)
            total = total + (3+i)*(Level);
        else{
            total = total + (3+i)*10;
            Level = Level - 10;
        }
    }
    
    printf("%d", total);

    return 0;
}

#include<stdio.h>
int main()
{
    int profit[10],weight[10],ratio[10],n,i,jtemp;;
     printf("enter the size of array\n");
     scanf("%d",&n);
     printf("Enter the value of profits\n");
     for(i=1;i<=n;i++)
     {
        scanf("%d",&profit);
     }
     printf("Enter the value of weights\n");
     for(i=1;i<=n;i++)
     {
        scanf("%d",&weightt);
     }
     for(i=1;i<=n;i++)
     {
        ratio[i]=profit[i]/weight[i];
     }
     for(i=1;i<=n;i++)
     {
        for(j=0;j<=n;j++)
        {
           if(a[j]<a[j-1])
            {
                temp=a[j];
                a[j]=a[j-1];
                a[j-1]=temp;
            }
        }
     }
     
}
function compareTwoNumbers(num1: number, num2:number): number {
    let higherNumber: number;
    let lowerNumber: number;
  
    if (num1 > num2) {
        higherNumber = num1;
        lowerNumber = num2;
    } else {
        higherNumber = num2;
        lowerNumber = num1;
    }
  
    const diference = higherNumber - lowerNumber;
  
    return diference; 
  }